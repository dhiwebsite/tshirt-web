import React from "react";

import DesignSelectionTable from "@/components/users-components/DesignSelectionTable";

function Home() {
  return (
    <>
      <div className="my-1">
        <p className="font-bold text-2xl mx-2">Available Designs</p>
      </div>
      <div className="">
        <div className="col-span-4">
          <DesignSelectionTable />
        </div>

        {/* <div>
          <p>Suggestion Plane</p>
        </div> */}
      </div>
    </>
  );
}

export default Home;
