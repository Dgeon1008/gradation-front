import React from 'react';
import { Outlet } from 'react-router-dom';

const ArtistDetailContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ArtistDetailContainer;