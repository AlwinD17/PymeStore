import React, { useState } from 'react';
import img1 from '../assets/template1.jpeg';
import img2 from '../assets/template2.jpeg';
import img3 from '../assets/template3.jpeg';

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={img1}
        alt="Imagen 1"
        style={{ width: '200px', height: '200px', margin: '10px', cursor: 'pointer', border: selectedImage === img1 ? '2px solid blue' : '2px solid transparent' }}
        onClick={() => handleImageClick(img1)}
      />
      <img
        src={img2}
        alt="Imagen 2"
        style={{ width: '200px', height: '200px', margin: '10px', cursor: 'pointer', border: selectedImage === img2 ? '2px solid blue' : '2px solid transparent' }}
        onClick={() => handleImageClick(img2)}
      />
      <img
        src={img3}
        alt="Imagen 3"
        style={{ width: '200px', height: '200px', margin: '10px', cursor: 'pointer', border: selectedImage === img3 ? '2px solid blue' : '2px solid transparent' }}
        onClick={() => handleImageClick(img3)}
      />
    </div>
  );
};

export default ImageSelector;
