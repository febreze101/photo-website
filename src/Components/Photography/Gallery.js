import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [imageData, setImageData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        images.map(async (image) => {
          const img = new Image();
          img.src = image.src;

          return new Promise((resolve) => {
            img.onload = () => {
              resolve({
                ...image,
                isVertical: img.height > img.width,
                isHorizontal: img.width > img.height,
              });
            };
            img.onerror = () => {
              resolve({
                ...image,
                error: true,
              });
            };
          });
        })
      );
      setImageData(loadedImages);
    };

    loadImages();
  }, [images]);

  const handleClickImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseOverlay = () => {
    setCurrentImageIndex(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  return (
    <div className="gallery">
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${
            image.isVertical ? "vertical" : "horizontal"
          }`}
          onClick={() => handleClickImage(index)}
        >
          {image.error ? (
            <div className="error">Image failed to load</div>
          ) : (
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
            />
          )}
        </div>
      ))}
      {currentImageIndex !== null && !imageData[currentImageIndex].error && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <span className="close">&times;</span>
          <span
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePreviousImage();
            }}
          >
            &#10094;
          </span>
          <img
            className="overlay-content"
            src={imageData[currentImageIndex].src}
            alt={
              imageData[currentImageIndex].alt ||
              `Image ${currentImageIndex + 1}`
            }
          />
          <span
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
