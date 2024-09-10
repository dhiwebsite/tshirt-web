import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function CheckoutAddress() {
  const addresses = [
    {
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      landmark: "Near Central Park",
      pincode: "10001",
      city: "New York",
      state: "NY",
      country: "USA",
      addressType: "home",
    },
    {
      addressLine1: "456 Elm St",
      addressLine2: "Suite 5A",
      landmark: "Next to City Hall",
      pincode: "90001",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      addressType: "away",
    },
  ];

  const [showAddress, setShowAddress] = useState(false);
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="w-full">
            <Button className="w-full" variant="outline">
              Choose Address
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent
          side={"bottom"}
          className="h-[456px] sm:h-fit overflow-y-scroll"
        >
          <SheetHeader>
            <SheetTitle>Add or Choose Address to proceed</SheetTitle>
          </SheetHeader>
          <div className="my-2 flex gap-4 items-center">
            <Button
              onClick={() => {
                setShowAddress(!showAddress);
              }}
            >
              {showAddress ? <Minus /> : <Plus />}
            </Button>

            <div className="flex gap-6">
              {addresses.map((address) => {
                return (
                  <div className="border border-black p-2 rounded-sm cursor-pointer">
                    <p>{address.addressType}</p>

                    <div>{address.city}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {showAddress && (
            <div className="sm:flex sm:justify-center w-full">
              <div className="sm:w-2/4 my-1">
                <div className="">
                  <Input
                    id="name"
                    placeholder="Address Line 1"
                    className="col-span-3"
                  />
                </div>
                <div className="my-[8px]">
                  <Input
                    id="username"
                    placeholder="Address Line 2"
                    className="col-span-3"
                  />
                </div>

                <div className="flex-col md:flex-row flex justify-between gap-2 my-1">
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      className="col-span-3"
                      placeholder="9765409111"
                    />
                  </div>
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      placeholder="Pincode"
                      className="col-span-3"
                    />
                  </div>
                </div>

                <div className="flex-col md:flex-row flex justify-between gap-2 my-1">
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      placeholder="Landmark"
                      className="col-span-3"
                    />
                  </div>
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      className="col-span-3"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="flex-col md:flex-row flex justify-between gap-2 my-1">
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      placeholder="State"
                      className="col-span-3"
                    />
                  </div>
                  <div className="md:w-2/4">
                    <Input
                      id="username"
                      placeholder="Country"
                      className="col-span-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <SheetFooter className="my-2 md:my-0">
            <SheetClose asChild>
              <Button type="submit">Proceed</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
