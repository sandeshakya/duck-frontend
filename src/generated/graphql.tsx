import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "duck" */
export type Duck = {
  __typename?: 'duck';
  city: Scalars['String'];
  food: Scalars['String'];
  foodQuantity: Scalars['numeric'];
  id: Scalars['uuid'];
  numberOfDucks: Scalars['numeric'];
  province: Scalars['String'];
  streetaddress: Scalars['String'];
  time: Scalars['date'];
};

/** aggregated selection of "duck" */
export type Duck_Aggregate = {
  __typename?: 'duck_aggregate';
  aggregate?: Maybe<Duck_Aggregate_Fields>;
  nodes: Array<Duck>;
};

/** aggregate fields of "duck" */
export type Duck_Aggregate_Fields = {
  __typename?: 'duck_aggregate_fields';
  avg?: Maybe<Duck_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Duck_Max_Fields>;
  min?: Maybe<Duck_Min_Fields>;
  stddev?: Maybe<Duck_Stddev_Fields>;
  stddev_pop?: Maybe<Duck_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Duck_Stddev_Samp_Fields>;
  sum?: Maybe<Duck_Sum_Fields>;
  var_pop?: Maybe<Duck_Var_Pop_Fields>;
  var_samp?: Maybe<Duck_Var_Samp_Fields>;
  variance?: Maybe<Duck_Variance_Fields>;
};


/** aggregate fields of "duck" */
export type Duck_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Duck_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "duck" */
export type Duck_Aggregate_Order_By = {
  avg?: Maybe<Duck_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Duck_Max_Order_By>;
  min?: Maybe<Duck_Min_Order_By>;
  stddev?: Maybe<Duck_Stddev_Order_By>;
  stddev_pop?: Maybe<Duck_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Duck_Stddev_Samp_Order_By>;
  sum?: Maybe<Duck_Sum_Order_By>;
  var_pop?: Maybe<Duck_Var_Pop_Order_By>;
  var_samp?: Maybe<Duck_Var_Samp_Order_By>;
  variance?: Maybe<Duck_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "duck" */
export type Duck_Arr_Rel_Insert_Input = {
  data: Array<Duck_Insert_Input>;
  on_conflict?: Maybe<Duck_On_Conflict>;
};

/** aggregate avg on columns */
export type Duck_Avg_Fields = {
  __typename?: 'duck_avg_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "duck" */
export type Duck_Avg_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "duck". All fields are combined with a logical 'AND'. */
export type Duck_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Duck_Bool_Exp>>>;
  _not?: Maybe<Duck_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Duck_Bool_Exp>>>;
  city?: Maybe<String_Comparison_Exp>;
  food?: Maybe<String_Comparison_Exp>;
  foodQuantity?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  numberOfDucks?: Maybe<Numeric_Comparison_Exp>;
  province?: Maybe<String_Comparison_Exp>;
  streetaddress?: Maybe<String_Comparison_Exp>;
  time?: Maybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "duck" */
export enum Duck_Constraint {
  /** unique or primary key constraint */
  DuckPkey = 'duck_pkey'
}

/** input type for incrementing integer column in table "duck" */
export type Duck_Inc_Input = {
  foodQuantity?: Maybe<Scalars['numeric']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "duck" */
export type Duck_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  food?: Maybe<Scalars['String']>;
  foodQuantity?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
  province?: Maybe<Scalars['String']>;
  streetaddress?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Duck_Max_Fields = {
  __typename?: 'duck_max_fields';
  city?: Maybe<Scalars['String']>;
  food?: Maybe<Scalars['String']>;
  foodQuantity?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
  province?: Maybe<Scalars['String']>;
  streetaddress?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "duck" */
export type Duck_Max_Order_By = {
  city?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  foodQuantity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  streetaddress?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Duck_Min_Fields = {
  __typename?: 'duck_min_fields';
  city?: Maybe<Scalars['String']>;
  food?: Maybe<Scalars['String']>;
  foodQuantity?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
  province?: Maybe<Scalars['String']>;
  streetaddress?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "duck" */
export type Duck_Min_Order_By = {
  city?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  foodQuantity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  streetaddress?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** response of any mutation on the table "duck" */
export type Duck_Mutation_Response = {
  __typename?: 'duck_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Duck>;
};

/** input type for inserting object relation for remote table "duck" */
export type Duck_Obj_Rel_Insert_Input = {
  data: Duck_Insert_Input;
  on_conflict?: Maybe<Duck_On_Conflict>;
};

/** on conflict condition type for table "duck" */
export type Duck_On_Conflict = {
  constraint: Duck_Constraint;
  update_columns: Array<Duck_Update_Column>;
  where?: Maybe<Duck_Bool_Exp>;
};

/** ordering options when selecting data from "duck" */
export type Duck_Order_By = {
  city?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  foodQuantity?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  streetaddress?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** primary key columns input for table: "duck" */
export type Duck_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "duck" */
export enum Duck_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Food = 'food',
  /** column name */
  FoodQuantity = 'foodQuantity',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfDucks = 'numberOfDucks',
  /** column name */
  Province = 'province',
  /** column name */
  Streetaddress = 'streetaddress',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "duck" */
export type Duck_Set_Input = {
  city?: Maybe<Scalars['String']>;
  food?: Maybe<Scalars['String']>;
  foodQuantity?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
  province?: Maybe<Scalars['String']>;
  streetaddress?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Duck_Stddev_Fields = {
  __typename?: 'duck_stddev_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "duck" */
export type Duck_Stddev_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Duck_Stddev_Pop_Fields = {
  __typename?: 'duck_stddev_pop_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "duck" */
export type Duck_Stddev_Pop_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Duck_Stddev_Samp_Fields = {
  __typename?: 'duck_stddev_samp_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "duck" */
export type Duck_Stddev_Samp_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Duck_Sum_Fields = {
  __typename?: 'duck_sum_fields';
  foodQuantity?: Maybe<Scalars['numeric']>;
  numberOfDucks?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "duck" */
export type Duck_Sum_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** update columns of table "duck" */
export enum Duck_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Food = 'food',
  /** column name */
  FoodQuantity = 'foodQuantity',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfDucks = 'numberOfDucks',
  /** column name */
  Province = 'province',
  /** column name */
  Streetaddress = 'streetaddress',
  /** column name */
  Time = 'time'
}

/** aggregate var_pop on columns */
export type Duck_Var_Pop_Fields = {
  __typename?: 'duck_var_pop_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "duck" */
export type Duck_Var_Pop_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Duck_Var_Samp_Fields = {
  __typename?: 'duck_var_samp_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "duck" */
export type Duck_Var_Samp_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Duck_Variance_Fields = {
  __typename?: 'duck_variance_fields';
  foodQuantity?: Maybe<Scalars['Float']>;
  numberOfDucks?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "duck" */
export type Duck_Variance_Order_By = {
  foodQuantity?: Maybe<Order_By>;
  numberOfDucks?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "duck" */
  delete_duck?: Maybe<Duck_Mutation_Response>;
  /** delete single row from the table: "duck" */
  delete_duck_by_pk?: Maybe<Duck>;
  /** insert data into the table: "duck" */
  insert_duck?: Maybe<Duck_Mutation_Response>;
  /** insert a single row into the table: "duck" */
  insert_duck_one?: Maybe<Duck>;
  /** update data of the table: "duck" */
  update_duck?: Maybe<Duck_Mutation_Response>;
  /** update single row of the table: "duck" */
  update_duck_by_pk?: Maybe<Duck>;
};


/** mutation root */
export type Mutation_RootDelete_DuckArgs = {
  where: Duck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Duck_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_DuckArgs = {
  objects: Array<Duck_Insert_Input>;
  on_conflict?: Maybe<Duck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Duck_OneArgs = {
  object: Duck_Insert_Input;
  on_conflict?: Maybe<Duck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DuckArgs = {
  _inc?: Maybe<Duck_Inc_Input>;
  _set?: Maybe<Duck_Set_Input>;
  where: Duck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Duck_By_PkArgs = {
  _inc?: Maybe<Duck_Inc_Input>;
  _set?: Maybe<Duck_Set_Input>;
  pk_columns: Duck_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "duck" */
  duck: Array<Duck>;
  /** fetch aggregated fields from the table: "duck" */
  duck_aggregate: Duck_Aggregate;
  /** fetch data from the table: "duck" using primary key columns */
  duck_by_pk?: Maybe<Duck>;
};


/** query root */
export type Query_RootDuckArgs = {
  distinct_on?: Maybe<Array<Duck_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Duck_Order_By>>;
  where?: Maybe<Duck_Bool_Exp>;
};


/** query root */
export type Query_RootDuck_AggregateArgs = {
  distinct_on?: Maybe<Array<Duck_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Duck_Order_By>>;
  where?: Maybe<Duck_Bool_Exp>;
};


/** query root */
export type Query_RootDuck_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "duck" */
  duck: Array<Duck>;
  /** fetch aggregated fields from the table: "duck" */
  duck_aggregate: Duck_Aggregate;
  /** fetch data from the table: "duck" using primary key columns */
  duck_by_pk?: Maybe<Duck>;
};


/** subscription root */
export type Subscription_RootDuckArgs = {
  distinct_on?: Maybe<Array<Duck_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Duck_Order_By>>;
  where?: Maybe<Duck_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDuck_AggregateArgs = {
  distinct_on?: Maybe<Array<Duck_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Duck_Order_By>>;
  where?: Maybe<Duck_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDuck_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetDuckDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDuckDataQuery = (
  { __typename?: 'query_root' }
  & { duck: Array<(
    { __typename?: 'duck' }
    & Pick<Duck, 'id' | 'city' | 'food' | 'foodQuantity' | 'numberOfDucks' | 'province' | 'streetaddress' | 'time'>
  )> }
);

export type InsertDuckDataMutationVariables = Exact<{
  obj: Duck_Insert_Input;
}>;


export type InsertDuckDataMutation = (
  { __typename?: 'mutation_root' }
  & { insert_duck_one?: Maybe<(
    { __typename?: 'duck' }
    & Pick<Duck, 'id'>
  )> }
);


export const GetDuckDataDocument = gql`
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

/**
 * __useGetDuckDataQuery__
 *
 * To run a query within a React component, call `useGetDuckDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDuckDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDuckDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDuckDataQuery(baseOptions?: Apollo.QueryHookOptions<GetDuckDataQuery, GetDuckDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDuckDataQuery, GetDuckDataQueryVariables>(GetDuckDataDocument, options);
      }
export function useGetDuckDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDuckDataQuery, GetDuckDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDuckDataQuery, GetDuckDataQueryVariables>(GetDuckDataDocument, options);
        }
export type GetDuckDataQueryHookResult = ReturnType<typeof useGetDuckDataQuery>;
export type GetDuckDataLazyQueryHookResult = ReturnType<typeof useGetDuckDataLazyQuery>;
export type GetDuckDataQueryResult = Apollo.QueryResult<GetDuckDataQuery, GetDuckDataQueryVariables>;
export const InsertDuckDataDocument = gql`
    mutation insertDuckData($obj: duck_insert_input!) {
  insert_duck_one(object: $obj) {
    id
  }
}
    `;
export type InsertDuckDataMutationFn = Apollo.MutationFunction<InsertDuckDataMutation, InsertDuckDataMutationVariables>;

/**
 * __useInsertDuckDataMutation__
 *
 * To run a mutation, you first call `useInsertDuckDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDuckDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDuckDataMutation, { data, loading, error }] = useInsertDuckDataMutation({
 *   variables: {
 *      obj: // value for 'obj'
 *   },
 * });
 */
export function useInsertDuckDataMutation(baseOptions?: Apollo.MutationHookOptions<InsertDuckDataMutation, InsertDuckDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertDuckDataMutation, InsertDuckDataMutationVariables>(InsertDuckDataDocument, options);
      }
export type InsertDuckDataMutationHookResult = ReturnType<typeof useInsertDuckDataMutation>;
export type InsertDuckDataMutationResult = Apollo.MutationResult<InsertDuckDataMutation>;
export type InsertDuckDataMutationOptions = Apollo.BaseMutationOptions<InsertDuckDataMutation, InsertDuckDataMutationVariables>;