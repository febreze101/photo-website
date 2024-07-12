import { width } from "@mui/system";
import Gallery from "./Gallery";
import React, { useEffect, useState } from "react";

export default function Photography() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map((filename) => ({
        src: r(filename),
        alt: filename.replace(/\.(png|jpe?g|svg)$/, "").replace(/^\.\//, ""),
      }));
    };

    const imageContext = require.context(
      "../../img",
      false,
      /\.(png|jpe?g|svg)$/
    );
    const loadedImages = importAll(imageContext);
    setImages(loadedImages);
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div sx={{ width: "100%" }}>
        <Gallery images={images} />
      </div>
    </div>
  );
}
