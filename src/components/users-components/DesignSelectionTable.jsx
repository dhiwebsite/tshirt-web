import React, { useState } from "react";
import ReactSelect from "react-select";
import ImagePlacer from "./ImagePlacer";
import wolf from "../../assets/wolf.png";
import tiger from "../../assets/tiger.png";
import eagle from "../../assets/eagle.png";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { request } from "@/global/axiosGlobal";
import DesignViewClient from "./DesignViewClient";
function DesignSelectionTable() {
  const logos = [wolf, tiger, eagle];
  const [value, setValue] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return request.get(`/get-categories`);
    },
  });
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="">
        <div className="mx-4">
          <ReactSelect
            isLoading={isLoading}
            styles={{
              option: () => ({
                color: "black",
              }),
            }}
            options={data?.data.map((category) => {
              return {
                label: category.categoryName,
                value: category.categoryName,
              };
            })}
            value={value}
            onChange={(option) => {
              setValue(option);
            }}
          />
        </div>

        <div className="">
          <DesignViewClient categoryName={value?.value} />
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
