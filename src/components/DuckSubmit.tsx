import React, { useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import Select from "react-select";
import ProvinceList from "../utils/ProvinceList";

export interface IState {
  food: string;
  time: string;
  streetaddress: string;
  city: string;
  province: string;
  numberOfDucks: number;
  foodQuantity: number;
}
interface IAction {
  type:
    | "updateFood"
    | "updateTime"
    | "updateStreetAddress"
    | "updateCity"
    | "updateProvince"
    | "updateNumberOfDucks"
    | "updateFoodQuantity";
  payload: any;
}

const duckReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "updateFood":
      return { ...state, food: action.payload };
    case "updateTime":
      return { ...state, time: action.payload };
    case "updateStreetAddress":
      return { ...state, streetaddress: action.payload };
    case "updateCity":
      return { ...state, city: action.payload };
    case "updateProvince":
      return { ...state, province: action.payload };
    case "updateNumberOfDucks":
      return { ...state, numberOfDucks: action.payload };
    case "updateFoodQuantity":
      return { ...state, foodQuantity: action.payload };
    default:
      return state;
  }
};

export default function DuckSubmit() {
  const classes = useStyles();
  const [errors, setErrors] = useState<string[]>([]);
  const [state, dispatch] = useReducer(duckReducer, {
    food: "",
    time: "",
    streetaddress: "",
    city: "",
    province: "",
    numberOfDucks: 0,
    foodQuantity: 0,
  });

  function HandleSubmit() {
    const submitErrors: string[] = [];
    for (const [k, v] of Object.entries(state)) {
      if (v === "" || v === "0") {
        submitErrors.push(`${k} is invalid`);
      }
    }
    setErrors(submitErrors);
    if (!submitErrors.length) {
      console.log(state);
    }
  }

  return (
    <div className={classes.container}>
      <Typography variant="h3">Duck Feeding Form</Typography>
      <div className={classes.form}>
        <TextField
          label="Food"
          value={state.food}
          onChange={(e) =>
            dispatch({ type: "updateFood", payload: e.target.value })
          }
        />
        <br />
        <TextField
          label="Time"
          value={state.time}
          onChange={(e) =>
            dispatch({ type: "updateTime", payload: e.target.value })
          }
        />
        <br />
        <TextField
          label="Street Address"
          value={state.streetaddress}
          onChange={(e) =>
            dispatch({ type: "updateStreetAddress", payload: e.target.value })
          }
        />
        <br />
        <TextField
          label="City"
          value={state.city}
          onChange={(e) =>
            dispatch({ type: "updateCity", payload: e.target.value })
          }
        />
        <br />
        <div style={{ marginTop: 8 }}>
          <Select
            options={ProvinceList}
            onChange={(e) =>
              dispatch({ type: "updateProvince", payload: e?.value })
            }
          />
        </div>
        <br />
        <TextField
          label="How many ducks"
          value={state.numberOfDucks}
          onChange={(e) =>
            dispatch({ type: "updateNumberOfDucks", payload: e.target.value })
          }
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
        />
        <br />
        <TextField
          label="How much food (pieces)"
          value={state.foodQuantity}
          onChange={(e) =>
            dispatch({ type: "updateFoodQuantity", payload: e.target.value })
          }
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={HandleSubmit}>
          Submit
        </Button>
        {Boolean(errors.length) &&
          errors.map((e, idx) => (
            <div key={idx} className={classes.error}>
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "540px",
  },
  error: {
    color: "red",
  },
}));
