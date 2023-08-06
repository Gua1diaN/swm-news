import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './profile/Profile';
import { Image } from './profile/Image';

function App() {
  const props = {
    "captionText": "Cras mattis consectetur purus sit amet fermentum.",
    "url": "https://images.thewest.com.au/publication/B88945448Z/1536132433649_GKR1Q2DJF.2-1.jpg",
    "index": 0
}
  return (
    // <Profile />
    <Image {...props} />
  );
}

export default App;
