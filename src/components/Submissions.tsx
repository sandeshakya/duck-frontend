import { useQuery } from "@apollo/client";
import { ArrowDownward } from "@material-ui/icons";
import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import { GetDuckDataQuery } from "../generated/graphql";
import { GET_DUCK_DATA } from "../graphql/duck";
import { IState } from "./DuckSubmit";

export default function Submissions() {
  const { data, loading } = useQuery<GetDuckDataQuery>(GET_DUCK_DATA);
  return (
    <div>
      {!loading && Boolean(data) && Boolean(data?.duck.length) && (
        <MaterialTable<IState>
          isLoading={loading}
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
          data={data.duck.map((d) => ({
            time: d.time,
            food: d.food,
            streetaddress: d.streetaddress,
            city: d.city,
            province: d.province,
            foodQuantity: d.foodQuantity,
            numberOfDucks: d.numberOfDucks,
          }))}
        />
      )}
    </div>
  );
}
