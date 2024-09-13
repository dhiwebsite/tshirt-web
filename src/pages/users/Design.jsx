import ImagePlacer from "@/components/users-components/ImagePlacer";
import { SizeDropDown } from "@/components/users-components/SizeDropDown";
import React from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Design() {
  const location = useLocation();
  const image = location.state.logo;

  return (
    <div className="flex-col md:flex-row flex items-start">
      <div>
        <div>
          <p className="text-xl font-extrabold my-2">Live Preview</p>
        </div>
        <ImagePlacer logo={image} />
      </div>

      <div className="my-8">
        <div>
          <p className="my-1 font-semibold">Size</p>
          <SizeDropDown />
        </div>
        <div className="my-4">
          <p className="my-1 font-semibold">Quantity</p>
          <Input type="number" placeholder="1" />
        </div>

        <div>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Design;
