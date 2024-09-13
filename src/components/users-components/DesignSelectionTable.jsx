import React from "react";
import ReactSelect from "react-select";
import ImagePlacer from "./ImagePlacer";
import wolf from "../../assets/wolf.png";
import tiger from "../../assets/tiger.png";
import eagle from "../../assets/eagle.png";
import { useNavigate } from "react-router-dom";
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

  const logos = [wolf, tiger, eagle];

  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="mx-4">
          <ReactSelect options={animeCharacters} placeholder="Search Designs" />
        </div>

        <div className="flex gap-2">
          {logos.map((logo) => {
            return (
              <div
                key={logo}
                style={{
                  width: "fit-content",
                }}
                onClick={() => {
                  navigate("/design", {
                    state: {
                      logo,
                    },
                  });
                }}
              >
                <img src={logo} height={150} width={150} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DesignSelectionTable;
