import { DataTable } from "@/components/admin-components/data-table";
import FileUpload from "@/components/admin-components/FileUpload";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const ReactSelect = ({ getOption }) => {
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
    <CreatableSelect
      isClearable
      options={animeCharacters}
      onChange={(option) => {
        getOption(option?.value);
      }}
      placeholder={"Create or Search Design Theme"}
      styles={{
        option: () => ({
          color: "black",
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          color: "black",
        }),
      }}
    />
  );
};

function Admin() {
  const adminDesignTableColumns = [
    {
      accessorKey: "designTheme",
      header: "Design Theme",
    },
    {
      accessorKey: "designCount",
      header: "No Of Designs",
    },

    {
      accessorKey: "orders",
      header: "Orders",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ value }) => (
        <div className="flex">
          <div className="font-bold">View</div>

          <div className="ml-4">
            <FileUpload optionNotPresent={false} />
          </div>
        </div>
      ),
    },
  ];

  const [optionNotPresent, setOptionNotPresent] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const getOption = (value) => {
    if (value && value.length > 0) {
      setOptionNotPresent(false);
      setSelectedOption(value);
    } else {
      setOptionNotPresent(true);
    }
  };
  return (
    <>
      <h4 className="text-2xl font-bold">Upload Design</h4>
      <div className="flex items-center sm:justify-between md:justify-start my-4">
        <div className="sm:w-full md:w-3/6">
          <ReactSelect getOption={getOption} />
        </div>
        <div className="mx-2">
          <FileUpload optionNotPresent={optionNotPresent} />
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-2xl font-bold">Desgin Table</h4>
      </div>
      <DataTable
        columns={adminDesignTableColumns}
        data={[
          {
            designTheme: "Naruto",
            designCount: 45,
            orders: 10,
          },
        ]}
      />
    </>
  );
}

export default Admin;
