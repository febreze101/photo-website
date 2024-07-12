import React from "react";
import { IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FullScreenView = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  return (
    <Box className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <IconButton
        onClick={onClose}
        className="absolute top-4 right-4"
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <IconButton
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        aria-label="previous image"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        aria-label="next image"
      >
        <ChevronRightIcon />
      </IconButton>
      <Box className="max-w-[90%] max-h-[90%]">
        <img
          loading="lazy"
          src={images[currentIndex].src}
          alt={
            images[currentIndex].alt || `Full-screen Image ${currentIndex + 1}`
          }
          className="max-w-full max-h-full object-contain"
        />
      </Box>
    </Box>
  );
};

export default FullScreenView;
