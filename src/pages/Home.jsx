import React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/clerk-react";
import DesignSelectionTable from "@/components/users-components/DesignSelectionTable";

function Home() {
  return (
    <>
      <UserButton />
      <ModeToggle />

      <div className="my-1">
        <p className="font-bold text-2xl mx-2">Available Designs</p>
      </div>
      <div className="grid sm:grid-cols-5 lg:gird-cols-1">
        <div className="col-span-4">
          <DesignSelectionTable />
        </div>

        <div>
          <p>Suggestion Plane</p>
        </div>
      </div>
    </>
  );
}

export default Home;
