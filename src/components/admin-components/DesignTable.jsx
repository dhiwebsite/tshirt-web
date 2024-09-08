import React from "react";
import { DataTable } from "@/components/admin-components/data-table";
import FileUpload from "./FileUpload";
function DesignTable() {
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
  return (
    <div>
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
    </div>
  );
}

export default DesignTable;
