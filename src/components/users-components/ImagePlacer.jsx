import React from "react";
import * as fabric from "fabric";
import { useEffect, useRef, useState } from "react";
import wolf from "../../assets/wolf.png";
import tiger from "../../assets/tiger.png";
import eagle from "../../assets/eagle.png";

const ImagePlacer = () => {
  const canvasref = useRef();
  const logos = [wolf, tiger, eagle];
  const [canvas, setCanvas] = useState(null);
  const [img, setImage] = useState(null);
  useEffect(() => {
    const can = new fabric.Canvas(canvasref.current);

    setCanvas(can);
    return () => {
      can.dispose();
    };
  }, []);

  var modifiedHandler = function (evt) {
    var modifiedObject = evt.target;
    console.log(modifiedObject);
    document.getElementById("modified").src = canvas.toDataURL();
  };

  const handleAddImage = (logo) => {
    let imgElement = document.createElement("img");
    imgElement.src = logo;
    imgElement.onload = function () {
      let image = new fabric.Image(imgElement);

      canvas.clear();

      const maxWidth = 280 * 0.5;
      const maxHeight = 420 * 0.5;
      const scale = Math.min(
        maxWidth / image.width,
        maxHeight / image.height,
        1
      );

      image.set({
        scaleX: scale,
        scaleY: scale,
        originX: "left",
        originY: "left",
      });

      canvas.add(image);
      console.log(image);
      canvas.on("object:modified", modifiedHandler);
      canvas.centerObject(image);
      canvas.setActiveObject(image);
      canvas.renderAll();
    };
  };
  return (
    <div className="flex gap-5">
      <div>
        <canvas
          width="280"
          height="420"
          style={{
            border: "1px dotted black",
            margin: "0 16px",
          }}
          ref={canvasref}
        />
      </div>
      <div className=" w-fit">
        <img
          id="modified"
          width={"280"}
          height={"420"}
          className="border border-black"
        />
      </div>
      <div
        style={{
          display: "flex",
          margin: "0 16px",
        }}
      >
        {logos.map((logo) => {
          return (
            <div
              key={logo}
              style={{
                width: "fit-content",
              }}
              onClick={() => {
                handleAddImage(logo);
              }}
            >
              <img src={logo} height={150} width={150} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePlacer;
