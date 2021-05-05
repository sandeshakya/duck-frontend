import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import ProvinceList from "../utils/ProvinceList";
import { useMutation } from "@apollo/client";
import { INSERT_DUCK_DATA } from "../graphql/duck";
import {
  InsertDuckDataMutation,
  InsertDuckDataMutationVariables,
} from "../generated/graphql";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export interface IState {
  food: string;
  time: string;
  streetaddress: string;
  city: string;
  province: string;
  numberOfDucks: number;
  foodQuantity: number;
}

export default function DuckSubmit() {
  const classes = useStyles();
  const history = useHistory();

  const [addDuck] = useMutation<
    InsertDuckDataMutation,
    InsertDuckDataMutationVariables
  >(INSERT_DUCK_DATA);

  const validationSchema = yup.object({
    food: yup.string().required("Food name is required"),
    time: yup.string().required("A time is required"),
    streetaddress: yup.string().required("A Street Address is required"),
    city: yup.string().required("A City is required"),
    province: yup.string().required("A Province is required"),
    numberOfDucks: yup.number().required("Invalid number of ducks").min(1),
    foodQuantity: yup
      .number()
      .required("Invalid number of food quantity")
      .min(1),
  });
  const formik = useFormik({
    initialValues: {
      food: "",
      time: "",
      streetaddress: "",
      city: "",
      province: "SK",
      numberOfDucks: 0,
      foodQuantity: 0,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      try {
        await addDuck({
          variables: {
            obj: { ...values, time: new Date(values.time).toISOString() },
          },
          refetchQueries: ["getDuckData"],
        });
        history.push("/");
      } catch (e) {
        console.error(e);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={classes.container}>
      <Typography variant="h3">Duck Feeding Form</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField
          name="food"
          label="What did you feed the ducks?"
          value={formik.values.food}
          error={formik.touched.food && Boolean(formik.errors.food)}
          helperText={formik.touched.food && formik.errors.food}
          onChange={formik.handleChange}
        />
        <TextField
          name="time"
          type="datetime-local"
          label="When did you feed them?"
          value={formik.values.time}
          error={formik.touched.time && Boolean(formik.errors.time)}
          helperText={formik.touched.time && formik.errors.time}
          onChange={formik.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="streetaddress"
          label="Street Address"
          value={formik.values.streetaddress}
          error={
            formik.touched.streetaddress && Boolean(formik.errors.streetaddress)
          }
          helperText={
            formik.touched.streetaddress && formik.errors.streetaddress
          }
          onChange={formik.handleChange}
        />
        <TextField
          name="city"
          label="City"
          value={formik.values.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          onChange={formik.handleChange}
        />
        <Typography variant="caption">Province</Typography>
        <Select
          name="province"
          onChange={formik.handleChange}
          label="Province"
          defaultValue="SK"
        >
          {ProvinceList.map((p, idx) => (
            <MenuItem key={idx} value={p.value}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          name="numberOfDucks"
          label="How many Ducks did you feed?"
          value={formik.values.numberOfDucks}
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          error={
            formik.touched.numberOfDucks && Boolean(formik.errors.numberOfDucks)
          }
          helperText={
            formik.touched.numberOfDucks && formik.errors.numberOfDucks
          }
          onChange={formik.handleChange}
        />
        <TextField
          name="foodQuantity"
          label="How much did you feed the ducks? (pieces)"
          value={formik.values.foodQuantity}
          type="number"
          error={
            formik.touched.foodQuantity && Boolean(formik.errors.foodQuantity)
          }
          helperText={formik.touched.foodQuantity && formik.errors.foodQuantity}
          onChange={formik.handleChange}
          InputProps={{ inputProps: { min: 0 } }}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
          style={{ marginTop: "8px" }}
        >
          Submit
        </Button>
      </form>
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
}));
