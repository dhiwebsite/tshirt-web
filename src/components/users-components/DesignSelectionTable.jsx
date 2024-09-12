import React from "react";
import ReactSelect from "react-select";
import ImagePlacer from "./ImagePlacer";

function DesignSelectionTable() {
  const animeCharacters = [
    { label: "Naruto Uzumaki", value: "naruto" },
    { label: "Goku", value: "goku" },
    { label: "Monkey D. Luffy", value: "luffy" },
    { label: "Saitama", value: "saitama" },
    { label: "Light Yagami", value: "light" },
    { label: "Edward Elric", value: "edward" },
    { label: "Ichigo Kurosaki", value: "ichigo" },
    { label: "Eren Yeager", value: "eren" },
    { label: "Sasuke Uchiha", value: "sasuke" },
    { label: "Levi Ackerman", value: "levi" },
  ];
  return (
    <>
      <div className="">
        <div className="mx-4">
          <ReactSelect options={animeCharacters} placeholder="Search Designs" />
        </div>

        <ImagePlacer />
      </div>
    </>
  );
}

export default DesignSelectionTable;
