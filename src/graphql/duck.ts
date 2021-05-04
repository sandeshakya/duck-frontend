import { gql } from "@apollo/client";

export const GET_DUCK_DATA = gql`
  query getDuckData {
    duck {
      id
      city
      food
      foodQuantity
      numberOfDucks
      province
      streetaddress
      time
    }
  }
`;

export const INSERT_DUCK_DATA = gql`
mutation insertDuckData($obj:duck_insert_input!){
  insert_duck_one(object:$obj){
    id
  }
}
`;