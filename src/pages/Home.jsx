import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function Home() {
  return (
    <>
      <SignedIn>
        <Button>Click Me</Button>
        <ModeToggle />
        <UserButton />
      </SignedIn>
    </>
  );
}

export default Home;
