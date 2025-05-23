import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import ArtistDetailContainer from "../pages/artist/artistDetail/ArtistDetailContainer";
import ArtistDetail from "../pages/artist/artistDetail/ArtistDetail";
import LoginLayout from "../pages/layout/LoginLayout";
import DisplayCategory from "../pages/display/DisplayCategory";
import DisplayRegistration from "../pages/display/displayRegistration/DisplayRegistration";
import DisplayContainer from "../pages/display/DisplayContainer";
import DisplayDetailContainer from "../pages/display/displayDetail/DisplayDetailContainer";
import ArtistContainer from "../pages/artist/ArtistContainer";
import AuctionContainer from "../pages/auction/AuctionContainer";
import AuctionBiddingContainer from "../pages/auction/auctionBidding/AuctionBiddingContainer";
import AuctionCategory from "../pages/auction/AuctionCategory";
import ExhibitionContainer from "../pages/exhibition/ExhibitionContainer";
import ExhibitionGradation from "../pages/exhibition/exhibitionGradation/ExhibitionGradation";
import ExhibitionUniversity from "../pages/exhibition/exhibitionUniversity/ExhibitionUniversity";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import ArtistDetailModify from "../pages/mypage/myInfo/artistDetailModify/ArtistDetailModify";
import AuctionRegistration from "../pages/auction/auctionRegistration/AuctionRegistration";
import AuctionAgreementContainer from "../pages/auction/auctionAgreement/AuctionAgreementContainer";
import AuctionAgreementExplanation from "../pages/auction/auctionAgreement/AuctionAgreementExplanation";
import AuctionAgreementPrivacyPolicy from "../pages/auction/auctionAgreement/AuctionAgreementPrivacyPolicy";
import AuctionAgreementAuctionPolicy from "../pages/auction/auctionAgreement/AuctionAgreementAuctionPolicy";
import AuctionPayment from "../pages/auction/auctionPayment/AuctionPayment";
import ExhibitionCategory from "../pages/exhibition/ExhibitionCategory";
import ExhibitionGradationPastContainer from "../pages/exhibition/exhibitionGradationPast/ExhibitionGradationPastContainer";
import ExhibitionGradationPast from "../pages/exhibition/exhibitionGradationPast/ExhibitionGradationPast";
import ExhibitionRegistration from "../pages/exhibition/exhibitionRegistration/ExhibitionRegistration";
import UniversityCheck from "../pages/mypage/myInfo/universityCheck/UniversityCheck";
import CommentList from "../pages/mypage/myActive/comment/CommentList";
import ContactArtistContainer from "../pages/mypage/myActive/contactArtist/ContactArtistContainer";
import ContactArtistDetail from "../pages/mypage/myActive/contactArtist/ContactArtistDetail";
import ArtistCategory from "../pages/artist/ArtistCategory";
import ContactArtistWrite from "../pages/mypage/myActive/contactArtist/ContactArtistWrite";
import ArtLikeContainer from "../pages/mypage/myActive/like/ArtLikeContainer";
import ArtLikeList from "../pages/mypage/myActive/like/ArtLikeList";
import UniversityLikeList from "../pages/mypage/myActive/like/UniversityLikeList";
import MyArtList from "../pages/mypage/myActive/myArt/MyArtList";
import MyAvailableAuctionArt from "../pages/mypage/myActive/myArt/MyAvailableAuctionArt";
import MyArtContainer from "../pages/mypage/myActive/myArt/MyArtContainer";
import MyPaymentContainer from "../pages/mypage/myPayment/MyPaymentContainer";
import MyPaymentList from "../pages/mypage/myPayment/MyPaymentList";
import MyAuctionList from "../pages/mypage/myPayment/MyAuctionList";
import MyPaymentDeliveryInfo from "../pages/mypage/myPayment/MyPaymentDeliveryInfo";
import MypageDelete from "../pages/mypage/mypageDelete/MypageDelete";
import MyPaymentDeliveryInfoContainer from "../pages/mypage/myPayment/MyPaymentDeliveryInfoContainer";
import ServiceCenterContainer from "../pages/serviceCenter/ServiceCenterContainer";
import QnaList from "../pages/serviceCenter/qna/QnaList";
import QnaSend from "../pages/serviceCenter/qna/QnaSend";
import QnaDetail from "../pages/serviceCenter/qna/QnaDetail";
import FaqList from "../pages/serviceCenter/faq/FaqList";
import FaqDetail from "../pages/serviceCenter/faq/FaqDetail";
import AdminContainer from "../pages/admin/AdminContainer";
import AdminFaqList from "../pages/admin/faq/AdminFaqList";
import AdminFaqDetail from "../pages/admin/faq/AdminFaqDetail";
import AdminFaqRegistration from "../pages/admin/faq/AdminFaqRegistration";
import NotFound from "../pages/notFound/NotFound";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminFaqModify from "../pages/admin/faq/AdminFaqModify";
import AdminQnaLayout from "../pages/admin/qna/AdminQnaLayout";
import AdminQnaWaitingList from "../pages/admin/qna/AdminQnaWaitingList";
import AdminQnaDetail from "../pages/admin/qna/AdminQnaDetail";
import AdminQnaCompletedList from "../pages/admin/qna/AdminQnaCompletedList";
import FormManagementLayout from "../pages/admin/formManagement/FormManagementLayout";
import FormManagementApprovedList from "../pages/admin/formManagement/list/FormManagementApprovedList";
import FormManagementDetailContainer from "../pages/admin/formManagement/detail/FormManagementDetailContainer";
import FormManageMentCategory from "../pages/admin/formManagement/FormManageMentCategory";
import UserManagementContainer from "../pages/admin/userManagement/UserManagementContainer";
import UserInfoContainer from "../pages/mypage/myInfo/userInfo/UserInfoContainer";
import ChangePasswordContainer from "../pages/mypage/myInfo/changePassword/ChangePasswordContainer";
import AuctionLayout from "../pages/auction/AuctionLayout";
import AuctionDetailContainer from "../pages/auction/auctionDetail/AuctionDetailContainer";
import AuctionListContainer from "../pages/auction/auctionList/AuctionListContainer";
import AuctionExpectedModify from "../pages/auction/auctionExpectedModify/AuctionExpectedModify";
import DisplayListContainer from "../pages/display/displayList/DisplayListContainer";
import ArtistListContainer from "../pages/artist/artistList/ArtistListContainer";
import ArtistMyProfile from "../pages/artist/artistMyProfile/ArtistMyProfile";
import MyApprovedContainer from "../pages/mypage/myApproved/MyApprovedContainer";
import MyApprovedCategory from "../pages/mypage/myApproved/MyApprovedCategory";
import MyApprovedListContainer from "../pages/mypage/myApproved/myApprovedList/MyApprovedListContainer";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <MainContainer />
      },
      {
        path : "/join",
        element : <Join />
      },
      {
        path : "/join",
        element : <Join />
      },
      {
        path : "/display",
        element : <DisplayContainer />,  // display 메인
        children : [
          {
            path : "",
            element : <DisplayCategory />,
            children : [
              {
                path : ":category",
                element : <DisplayListContainer />
              },
            ]
          },
          {
            path : ":category/detail/:id",
            element : <DisplayDetailContainer />,
          },
          {
            path : "registration",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <DisplayRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/artist",
        element : <ArtistContainer />,  // artist 메인
        children : [
          {
            path : "",
            element : <ArtistCategory />,
            children : [
              {
                path : "",
                element : <ArtistMyProfile />,
                children : [
                  {
                    path : ":category",
                    element : <ArtistListContainer />
                  },
                ]
              }
            ]
          },
          {
            path : ":category/detail",
            element : <ArtistDetailContainer />,
            children : [
              {
                path : ":id",
                element : <ArtistDetail />
              }
            ]
          }
        ]
      },
      {
        path : "/auction",
        element : <AuctionContainer />,
        children : [
          {
            path : "",
            element : <AuctionLayout />,
            children : [
              {
                path : ":type",
                element : <AuctionBiddingContainer />,
                children : [
                  {
                    path : "",
                    element : <AuctionCategory />,
                    children : [
                      {
                        path : ":category",
                        element : <AuctionListContainer />
                      },
                    ]
                  }
                ]
              }
            ]
          },
          {
            path : ":type/:category/detail/:id",
            element : <AuctionDetailContainer />
          },
          {
            path : ":type/:category/modify/:id",
            element : <AuctionExpectedModify />
          },
          {
            path : "payment",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <AuctionPayment />
              }
            ]
          },
          {
            path : "agreement",
            element : <AuctionAgreementContainer />,
            children : [
              {
                index : true,
                element : <AuctionAgreementExplanation />
              },
              {
                path : "explanation",
                element : <AuctionAgreementExplanation />
              },
              {
                path : "privacy-policy",
                element : <AuctionAgreementPrivacyPolicy />
              },
              {
                path : "auction-policy",
                element : <AuctionAgreementAuctionPolicy />
              }
            ]
          },
          {
            path : "registration",
            element : <LoginLayout />,
            children : [
              {
                path : ":id",
                element : <AuctionRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/exhibition",
        element : <ExhibitionContainer />,
        children : [
          {
            path : "",
            element : <ExhibitionCategory />,
            children : [
              {
                path : "gradation",
                element : <ExhibitionGradation />
              },
              {
                path : "university",
                element : <ExhibitionUniversity />
              }
            ]
          },
          {
            path : "gradation/past",
            element : <ExhibitionGradationPastContainer />,
            children : [
              {
                path : ":id",
                element : <ExhibitionGradationPast />
              }
            ]
          },
          {
            path : "university/registration",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <ExhibitionRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/mypage",
        element : <LoginLayout />,
        children : [
          {
            path : "",
            element : <MyPageContainer />,
            children : [
              {
                path : "",
                element : <UserInfoContainer />
              },
              {
                path : "artist-datail-modify",
                element : <ArtistDetailModify />
              },
              {
                path : "change-password",
                element : <ChangePasswordContainer />,
              },
              {
                path : "university-check",
                element : <UniversityCheck />
              },
              {
                path : "comment-list",
                element : <CommentList />
              },
              {
                path : "delete",
                element : <MypageDelete />
              },
              {
                path : "contact-artist",
                element : <ContactArtistContainer />,
                children : [
                  {
                    path : "detail/:id",
                    element : <ContactArtistDetail />,
                  },
                  {
                    path : "write/:email",
                    element : <ContactArtistWrite />
                  }
                ]
              },
              {
                path : "like",
                element : <ArtLikeContainer />,
                children : [
                  {
                    path : "",
                    element : <ArtLikeList />
                  },
                  {
                    path : "art",
                    element : <ArtLikeList />
                  },
                  {
                    path : "university",
                    element : <UniversityLikeList />
                  },
                ]
              },
              {
                path : "my-art",
                element : <MyArtContainer />,
                children : [
                  {
                    path : "",
                    element : <MyArtList />
                  },
                  {
                    path : "art-list",
                    element : <MyArtList />
                  },
                  {
                    path : "available-auction-art-list",
                    element : <MyAvailableAuctionArt />
                  },
                ]
              },
              {
                path : "my-payment",
                element : <MyPaymentContainer />,
                children : [
                  {
                    path : "",
                    element : <MyAuctionList />
                  },
                  {
                    path : "auction-list",
                    element : <MyAuctionList />
                  },
                  {
                    path : "payment-list",
                    element : <MyPaymentList />,
                  },
                  {
                    path : "payment-list/delivery-info",
                    element : <MyPaymentDeliveryInfoContainer />,
                    children : [
                      {
                        path : ":id",
                        element : <MyPaymentDeliveryInfo />
                      }
                    ]
                  }
                ]
              },
              {
                path : "mypage-approved-list",
                element : <MyApprovedContainer />,
                children : [
                  {
                    path : ":category",
                    element : <MyApprovedCategory />,
                    children : [
                      {
                        path : "",
                        element : <MyApprovedListContainer />
                      }
                    ]
                  }
                ]
              },
              // {
              //   path: "my-mail",
              //   element: <MyMailContainer />,
              //   children: [
              //     {
              //       path: "",
              //       element: <MyMailListContainer />,
              //       children: [
              //         {
              //           path: "received",
              //           element: <MyMailReceived />
              //         },
              //         {
              //           path: "sended",
              //           element: <MyMailSended />
              //         }
              //       ]
              //     },
              //     {
              //       path: "received/detail/:id",
              //       element: <MyMailReceivedDetail />
              //     },
              //     {
              //       path: "sended/detail/:id",
              //       element: <MyMailSendedDetail />
              //     }
              //   ]
              // },
              {
                path : "admin",
                element : <AdminLayout />,
                children : [
                  {
                    path : "",
                    element : <AdminContainer />,
                    children : [
                      {
                        path : "faq",
                        element : <AdminFaqList />
                      },
                      {
                        path : "faq/detail/:id",
                        element : <AdminFaqDetail />,
                      },
                      {
                        path : "faq/modify/:id",
                        element : <AdminFaqModify />
                      },
                      {
                        path : "faq/registration",
                        element : <AdminFaqRegistration />
                      },
                      {
                        path : "qna",
                        element : <AdminQnaLayout />,
                        children : [
                          {
                            path : "",
                            element : <AdminQnaWaitingList />
                          },
                          {
                            path : "complete",
                            element : <AdminQnaCompletedList />
                          },
                        ]
                      },
                      {
                        path : "form-management",
                        element : <FormManagementLayout />,
                        children : [
                          {
                            path : "",
                            element : <FormManageMentCategory />,
                            children : [
                              {
                                path : ":type",
                                element : <FormManagementApprovedList />,
                              }
                            ]
                          }
                        ]
                      },
                      {
                        path : "form-management/detail/:type/:id",
                        element : <FormManagementDetailContainer />,
                      },
                      {
                        path : "qna/detail/:id",
                        element : <AdminQnaDetail />
                      },
                      {
                        path : "user-management",
                        element : <UserManagementContainer />
                      }
                    ]
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        path : "/service-center/qna",
        element : <LoginLayout />,
        children : [
          {
            path : "",
            element : <ServiceCenterContainer />,
            children : [
              {
                path : "",
                element : <QnaList />
              },
              {
                path : "detail/:id",
                element : <QnaDetail />
              },
              {
                path : "registration",
                element : <QnaSend />
              },
            ]
          },
        ]
      },
      {
        path : "/service-center/faq",
        element : <ServiceCenterContainer />,
        children : [
          {
            path : "",
            element : <FaqList />
          },
          {
            path : "detail/:id",
            element : <FaqDetail />
          }
        ]
      },
      {
        path : "*",
        element : <NotFound />
      }
    ]
  }
])

export default router;
