import React from "react";
import ReactSelect from "react-select";

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
      <div className=" mx-2 p-3 grid sm:grid-cols-1 md:grid-cols-3 gap-2">
        <div className="border-2 border-red-400 rounded-xl p-1">
          <ReactSelect />
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-col">
            {animeCharacters.map((design) => {
              return (
                <div key={design.value} className="my-2 w-max">
                  <p className="font-bold mx-2">{design.value}</p> <hr />
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2 border-2 border-red-400 rounded-xl"></div>
      </div>
    </>
  );
}

export default DesignSelectionTable;
