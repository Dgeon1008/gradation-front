import { useForm } from 'react-hook-form';
import S from './style';
import SubButton from '../../../components/button/SubButton';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import DisplayRegistrationModal from './displayRegistrationModal/DisplayRegistrationModal';

const DisplayRegistration = () => {
  const { register, handleSubmit, setValue, formState: {isSubmitting, errors} } = useForm({mode: "onBlur"});
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser.id;
  const [thumbnailUrls, setThumbnailUrls] = useState([]);
  const [selectFiles, setSelectFiles] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();

  const categoryList = ["한국화", "조각", "공예", "건축", "서예", "회화"]
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setValue("artCategory", category)
  };

  const handleThumbnailImage = async (e) => {
    const files = Array.from(e.target.files);
    setSelectFiles(files)

  const previewUrls = files.map(file => URL.createObjectURL(file));
    setThumbnailUrls(previewUrls); 
  };

  const handleCancel = () => {
    navigate("/display/korean");
    alert("등록을 취소하시겠습니까?")
  }

  return (
    <div>
      <form encType='multipart/form-data' autoComplete="off" onSubmit={handleSubmit(async (data) => {
        const {
          userName,
          artTitle,
          artCategory,
          artMaterial,
          artSize,
          artEndDate,
          artDescription,
        } = data;
        const artPostDTO = {
          userName : userName,
          artTitle : artTitle,
          artCategory : artCategory,
          artMaterial : artMaterial,
          artSize : artSize,
          artEndDate : artEndDate,
          artDescription : artDescription,
          userId: Number(userId)
        }
        console.log("artPostDTO", artPostDTO);
      
      await fetch("http://localhost:10000/displays/api/registration", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(artPostDTO)
      })
        .then((res) => {
          if(!res.ok) {
              throw new Error("실패")
          }
          return res.json();
        })
        .then((res) => {
          console.log(res)
          const artId = res.artId;
          console.log(artId)
          setIsModalOpen(true)
          if(!data.files) {
            alert("첨부 파일을 선택하세요.")
            return;
          }
            const formData = new FormData();
            Array.from(data.files).forEach((file) => {
              console.log(file.name)
              formData.append("files", file)
              console.log(data.files)
            })
      
      
            fetch(`http://localhost:10000/files/api/upload/art/${artId}`, {
              method : "POST",
              body : formData
            })
              .then((res) => res.json())
              .then(console.log)
              .catch(console.error)
        })
      })}>
      <S.Container>
        <S.Line>
          <S.ENH3>registration</S.ENH3>
        </S.Line>
        <S.FormWrapper>
          <S.Form>
            <S.FileWrapper>
              <S.File type="file" accept="image/*" multiple {...register("files")}
                onChange={handleThumbnailImage} />
              {thumbnailUrls.length === 0 && (
                <S.IconWrapper>
                  <S.Icon src={"/assets/images/icon/add.png"} alt="업로드" />
                  <S.H5>첨부파일 업로드</S.H5>
                </S.IconWrapper>
              )}
              {thumbnailUrls.length > 0 && (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  style={{width: "100%", height: "100%"}} >
                  {thumbnailUrls.map((url, i) => (
                    <SwiperSlide key={i}>
                      <img src={url} alt={`previewImg${i}`}
                        style={{ width: "100%", height: "100%",
                        objectFit: "contain",
                        // objectFit: "cover",
                        }}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </S.FileWrapper>
            <S.InputContainer>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>작가명<span>*</span></S.H7>
                      <S.Input type='text' placeholder='작가명을 입력하세요.'
                      {...register("userName", {
                        required : true,
                      })}
                    />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.userName?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>작품명<span>*</span></S.H7>
                      <S.Input type='text' placeholder='작품명을 입력하세요.'
                      {...register("artTitle", {
                        required : true,
                      })}
                    />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.artTitle?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>작품 분류<span>*</span></S.H7>
                      <S.DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <S.DropdownButton>
                          <S.H8 selected={selectedCategory}>
                            {selectedCategory || '작품 분류를 선택하세요.'}
                          </S.H8>
                        </S.DropdownButton>
                        <S.DropdownIcon src="/assets/images/icon/down.png" alt="드롭다운" />
                      </S.DropdownWrapper>
                      {isDropdownOpen && (
                        <S.OptionList>
                          {categoryList.map((category) => (
                            <S.Option key={category} onClick={() => handleCategorySelect(category)}>
                              {category}
                            </S.Option>
                          ))}
                        </S.OptionList>
                      )}
                      <S.Input type='hidden' value={selectedCategory}
                      {...register("artCategory", {
                        required : true,
                      })}
                    />
                    {/* <S.DropdownWrapper onCli>
                      <S.DropdownButton>
                        <p>작품 분류를 선택하세요.</p>
                      </S.DropdownButton>
                      <S.DropdownIcon src={'/assets/images/icon/down.png'} alt='드롭다운' />
                    </S.DropdownWrapper> */}
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.artCategory?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>작품 재료<span>*</span></S.H7>
                      <S.Input type='text' placeholder='작품 재료를 입력하세요.'
                      {...register("artMaterial", {
                        required : true,
                      })}
                    />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.artMaterial?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>작품 규격<span>*</span></S.H7>
                      <S.Input type='text' placeholder='가로 X 세로 X 높이'
                      {...register("artSize", {
                        required : true,
                      })}
                    />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.artSize?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>제작 완료일<span>*</span></S.H7>
                      <S.Input type='date' placeholder='제작 완료일'
                      {...register("artEndDate", {
                        required : true,
                      })}
                    />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              {errors && errors?.artEndDate?.type === "required" && (
                <S.Warning>필수 항목입니다.</S.Warning>
              )}
              </S.BorderWrapper>
            </S.InputContainer>
          </S.Form>
            <S.Description>
              <S.Label>
                <S.H7>작품 설명<span>*</span></S.H7>
              </S.Label>
                <S.InputBox type='text' placeholder='작품 설명을 입력하세요.'
                {...register("artDescription", {
                  required : true,
                })}
                />
                {errors && errors?.artDescription?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                )}
            </S.Description>
        </S.FormWrapper>
        <S.ButtonWrapper>
          <SubButton onClick={handleCancel}>취소</SubButton>
          <PrimaryButton disabled={isSubmitting}>등록</PrimaryButton>
        </S.ButtonWrapper>
      </S.Container>
      </form>
      {isModalOpen && <DisplayRegistrationModal />}
    </div>
  );
};

export default DisplayRegistration;