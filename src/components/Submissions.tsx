import { ArrowDownward } from "@material-ui/icons";
import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import submissions from "../utils/dummySubmissions";

export default function Submissions() {
  return (
    <div>
      <MaterialTable
        icons={{
          SortArrow: forwardRef((props, ref) => (
            <ArrowDownward {...props} ref={ref} />
          )),
        }}
        options={{
          search: false,
          paging: false,
        }}
        title="Submissions"
        columns={[
          {
            title: "Time",
            field: "time",
            render: (rowData) => (
              <div>{new Date(rowData.time).toLocaleString()}</div>
            ),
          },
          { title: "Food", field: "food" },
          { title: "Street Address", field: "streetaddress" },
          { title: "City", field: "city" },
          { title: "Province", field: "province" },
          { title: "Food Quantity", field: "foodQuantity" },
          { title: "Number of Ducks", field: "numberOfDucks" },
        ]}
        data={submissions}
      />
    </div>
  );
}
