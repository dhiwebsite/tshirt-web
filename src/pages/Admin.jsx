import { DataTable } from "@/components/admin-components/data-table";

import React from "react";

const data = {};

function Admin() {
  return (
    <>
      <div className="my-4">
        <h4 className="text-2xl font-bold">Desgin Table</h4>
      </div>
      <DataTable
        columns={[
          {
            accessorKey: "designTheme",
            header: "Design Theme",
          },
          {
            accessorKey: "designCount",
            header: "No Of Designs",
          },
          {
            accessorKey: "actions",
            header: "Actions",
            cell: ({ value }) => <button>View</button>,
          },
        ]}
        data={[
          {
            designTheme: "Naruto",
            designCount: 45,
          },
        ]}
      />
    </>
  );
}

export default Admin;
