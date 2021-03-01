/* tslint:disable */ /* eslint-disable */
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  questionnairestatus: any;
  timestamptz: any;
  uuid: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsCompoundIdKey = 'accounts_compound_id_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "balls" */
export type Balls = {
  __typename?: 'balls';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "balls" */
export type Balls_Aggregate = {
  __typename?: 'balls_aggregate';
  aggregate?: Maybe<Balls_Aggregate_Fields>;
  nodes: Array<Balls>;
};

/** aggregate fields of "balls" */
export type Balls_Aggregate_Fields = {
  __typename?: 'balls_aggregate_fields';
  avg?: Maybe<Balls_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Balls_Max_Fields>;
  min?: Maybe<Balls_Min_Fields>;
  stddev?: Maybe<Balls_Stddev_Fields>;
  stddev_pop?: Maybe<Balls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balls_Stddev_Samp_Fields>;
  sum?: Maybe<Balls_Sum_Fields>;
  var_pop?: Maybe<Balls_Var_Pop_Fields>;
  var_samp?: Maybe<Balls_Var_Samp_Fields>;
  variance?: Maybe<Balls_Variance_Fields>;
};


/** aggregate fields of "balls" */
export type Balls_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Balls_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "balls" */
export type Balls_Aggregate_Order_By = {
  avg?: Maybe<Balls_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Balls_Max_Order_By>;
  min?: Maybe<Balls_Min_Order_By>;
  stddev?: Maybe<Balls_Stddev_Order_By>;
  stddev_pop?: Maybe<Balls_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Balls_Stddev_Samp_Order_By>;
  sum?: Maybe<Balls_Sum_Order_By>;
  var_pop?: Maybe<Balls_Var_Pop_Order_By>;
  var_samp?: Maybe<Balls_Var_Samp_Order_By>;
  variance?: Maybe<Balls_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "balls" */
export type Balls_Arr_Rel_Insert_Input = {
  data: Array<Balls_Insert_Input>;
  on_conflict?: Maybe<Balls_On_Conflict>;
};

/** aggregate avg on columns */
export type Balls_Avg_Fields = {
  __typename?: 'balls_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "balls" */
export type Balls_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "balls". All fields are combined with a logical 'AND'. */
export type Balls_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Balls_Bool_Exp>>>;
  _not?: Maybe<Balls_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Balls_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "balls" */
export enum Balls_Constraint {
  /** unique or primary key constraint */
  BallsPkey = 'balls_pkey'
}

/** input type for incrementing integer column in table "balls" */
export type Balls_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "balls" */
export type Balls_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Balls_Max_Fields = {
  __typename?: 'balls_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "balls" */
export type Balls_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Balls_Min_Fields = {
  __typename?: 'balls_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "balls" */
export type Balls_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "balls" */
export type Balls_Mutation_Response = {
  __typename?: 'balls_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Balls>;
};

/** input type for inserting object relation for remote table "balls" */
export type Balls_Obj_Rel_Insert_Input = {
  data: Balls_Insert_Input;
  on_conflict?: Maybe<Balls_On_Conflict>;
};

/** on conflict condition type for table "balls" */
export type Balls_On_Conflict = {
  constraint: Balls_Constraint;
  update_columns: Array<Balls_Update_Column>;
  where?: Maybe<Balls_Bool_Exp>;
};

/** ordering options when selecting data from "balls" */
export type Balls_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "balls" */
export type Balls_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "balls" */
export enum Balls_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "balls" */
export type Balls_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Balls_Stddev_Fields = {
  __typename?: 'balls_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "balls" */
export type Balls_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Balls_Stddev_Pop_Fields = {
  __typename?: 'balls_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "balls" */
export type Balls_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Balls_Stddev_Samp_Fields = {
  __typename?: 'balls_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "balls" */
export type Balls_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Balls_Sum_Fields = {
  __typename?: 'balls_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "balls" */
export type Balls_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "balls" */
export enum Balls_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Balls_Var_Pop_Fields = {
  __typename?: 'balls_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "balls" */
export type Balls_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Balls_Var_Samp_Fields = {
  __typename?: 'balls_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "balls" */
export type Balls_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Balls_Variance_Fields = {
  __typename?: 'balls_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "balls" */
export type Balls_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "collaboration_users" */
export type Collaboration_Users = {
  __typename?: 'collaboration_users';
  /** An object relationship */
  collaboration: Collaborations;
  collaboration_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "collaboration_users" */
export type Collaboration_Users_Aggregate = {
  __typename?: 'collaboration_users_aggregate';
  aggregate?: Maybe<Collaboration_Users_Aggregate_Fields>;
  nodes: Array<Collaboration_Users>;
};

/** aggregate fields of "collaboration_users" */
export type Collaboration_Users_Aggregate_Fields = {
  __typename?: 'collaboration_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Collaboration_Users_Max_Fields>;
  min?: Maybe<Collaboration_Users_Min_Fields>;
};


/** aggregate fields of "collaboration_users" */
export type Collaboration_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Collaboration_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collaboration_users" */
export type Collaboration_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Collaboration_Users_Max_Order_By>;
  min?: Maybe<Collaboration_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collaboration_users" */
export type Collaboration_Users_Arr_Rel_Insert_Input = {
  data: Array<Collaboration_Users_Insert_Input>;
  on_conflict?: Maybe<Collaboration_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collaboration_users". All fields are combined with a logical 'AND'. */
export type Collaboration_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Collaboration_Users_Bool_Exp>>>;
  _not?: Maybe<Collaboration_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Collaboration_Users_Bool_Exp>>>;
  collaboration?: Maybe<Collaborations_Bool_Exp>;
  collaboration_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collaboration_users" */
export enum Collaboration_Users_Constraint {
  /** unique or primary key constraint */
  CollaborationUsersPkey = 'collaboration_users_pkey'
}

/** input type for inserting data into table "collaboration_users" */
export type Collaboration_Users_Insert_Input = {
  collaboration?: Maybe<Collaborations_Obj_Rel_Insert_Input>;
  collaboration_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Collaboration_Users_Max_Fields = {
  __typename?: 'collaboration_users_max_fields';
  collaboration_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collaboration_users" */
export type Collaboration_Users_Max_Order_By = {
  collaboration_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Collaboration_Users_Min_Fields = {
  __typename?: 'collaboration_users_min_fields';
  collaboration_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collaboration_users" */
export type Collaboration_Users_Min_Order_By = {
  collaboration_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "collaboration_users" */
export type Collaboration_Users_Mutation_Response = {
  __typename?: 'collaboration_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Collaboration_Users>;
};

/** input type for inserting object relation for remote table "collaboration_users" */
export type Collaboration_Users_Obj_Rel_Insert_Input = {
  data: Collaboration_Users_Insert_Input;
  on_conflict?: Maybe<Collaboration_Users_On_Conflict>;
};

/** on conflict condition type for table "collaboration_users" */
export type Collaboration_Users_On_Conflict = {
  constraint: Collaboration_Users_Constraint;
  update_columns: Array<Collaboration_Users_Update_Column>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};

/** ordering options when selecting data from "collaboration_users" */
export type Collaboration_Users_Order_By = {
  collaboration?: Maybe<Collaborations_Order_By>;
  collaboration_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "collaboration_users" */
export type Collaboration_Users_Pk_Columns_Input = {
  collaboration_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "collaboration_users" */
export enum Collaboration_Users_Select_Column {
  /** column name */
  CollaborationId = 'collaboration_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "collaboration_users" */
export type Collaboration_Users_Set_Input = {
  collaboration_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "collaboration_users" */
export enum Collaboration_Users_Update_Column {
  /** column name */
  CollaborationId = 'collaboration_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "collaborations" */
export type Collaborations = {
  __typename?: 'collaborations';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<Collaboration_Users>;
  /** An aggregated array relationship */
  users_aggregate: Collaboration_Users_Aggregate;
};


/** columns and relationships of "collaborations" */
export type CollaborationsUsersArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** columns and relationships of "collaborations" */
export type CollaborationsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};

/** aggregated selection of "collaborations" */
export type Collaborations_Aggregate = {
  __typename?: 'collaborations_aggregate';
  aggregate?: Maybe<Collaborations_Aggregate_Fields>;
  nodes: Array<Collaborations>;
};

/** aggregate fields of "collaborations" */
export type Collaborations_Aggregate_Fields = {
  __typename?: 'collaborations_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Collaborations_Max_Fields>;
  min?: Maybe<Collaborations_Min_Fields>;
};


/** aggregate fields of "collaborations" */
export type Collaborations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Collaborations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collaborations" */
export type Collaborations_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Collaborations_Max_Order_By>;
  min?: Maybe<Collaborations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collaborations" */
export type Collaborations_Arr_Rel_Insert_Input = {
  data: Array<Collaborations_Insert_Input>;
  on_conflict?: Maybe<Collaborations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collaborations". All fields are combined with a logical 'AND'. */
export type Collaborations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Collaborations_Bool_Exp>>>;
  _not?: Maybe<Collaborations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Collaborations_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  users?: Maybe<Collaboration_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "collaborations" */
export enum Collaborations_Constraint {
  /** unique or primary key constraint */
  CollaborationsPkey = 'collaborations_pkey'
}

/** input type for inserting data into table "collaborations" */
export type Collaborations_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Collaboration_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Collaborations_Max_Fields = {
  __typename?: 'collaborations_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "collaborations" */
export type Collaborations_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Collaborations_Min_Fields = {
  __typename?: 'collaborations_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "collaborations" */
export type Collaborations_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "collaborations" */
export type Collaborations_Mutation_Response = {
  __typename?: 'collaborations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Collaborations>;
};

/** input type for inserting object relation for remote table "collaborations" */
export type Collaborations_Obj_Rel_Insert_Input = {
  data: Collaborations_Insert_Input;
  on_conflict?: Maybe<Collaborations_On_Conflict>;
};

/** on conflict condition type for table "collaborations" */
export type Collaborations_On_Conflict = {
  constraint: Collaborations_Constraint;
  update_columns: Array<Collaborations_Update_Column>;
  where?: Maybe<Collaborations_Bool_Exp>;
};

/** ordering options when selecting data from "collaborations" */
export type Collaborations_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  users_aggregate?: Maybe<Collaboration_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "collaborations" */
export type Collaborations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collaborations" */
export enum Collaborations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "collaborations" */
export type Collaborations_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "collaborations" */
export enum Collaborations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "config" */
export type Config = {
  __typename?: 'config';
  id: Scalars['Int'];
  inviteOnly: Scalars['Boolean'];
};

/** aggregated selection of "config" */
export type Config_Aggregate = {
  __typename?: 'config_aggregate';
  aggregate?: Maybe<Config_Aggregate_Fields>;
  nodes: Array<Config>;
};

/** aggregate fields of "config" */
export type Config_Aggregate_Fields = {
  __typename?: 'config_aggregate_fields';
  avg?: Maybe<Config_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Config_Max_Fields>;
  min?: Maybe<Config_Min_Fields>;
  stddev?: Maybe<Config_Stddev_Fields>;
  stddev_pop?: Maybe<Config_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Config_Stddev_Samp_Fields>;
  sum?: Maybe<Config_Sum_Fields>;
  var_pop?: Maybe<Config_Var_Pop_Fields>;
  var_samp?: Maybe<Config_Var_Samp_Fields>;
  variance?: Maybe<Config_Variance_Fields>;
};


/** aggregate fields of "config" */
export type Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "config" */
export type Config_Aggregate_Order_By = {
  avg?: Maybe<Config_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Config_Max_Order_By>;
  min?: Maybe<Config_Min_Order_By>;
  stddev?: Maybe<Config_Stddev_Order_By>;
  stddev_pop?: Maybe<Config_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Config_Stddev_Samp_Order_By>;
  sum?: Maybe<Config_Sum_Order_By>;
  var_pop?: Maybe<Config_Var_Pop_Order_By>;
  var_samp?: Maybe<Config_Var_Samp_Order_By>;
  variance?: Maybe<Config_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "config" */
export type Config_Arr_Rel_Insert_Input = {
  data: Array<Config_Insert_Input>;
  on_conflict?: Maybe<Config_On_Conflict>;
};

/** aggregate avg on columns */
export type Config_Avg_Fields = {
  __typename?: 'config_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "config" */
export type Config_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "config". All fields are combined with a logical 'AND'. */
export type Config_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Config_Bool_Exp>>>;
  _not?: Maybe<Config_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Config_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  inviteOnly?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "config" */
export enum Config_Constraint {
  /** unique or primary key constraint */
  ConfigPkey = 'config_pkey'
}

/** input type for incrementing integer column in table "config" */
export type Config_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "config" */
export type Config_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  inviteOnly?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Config_Max_Fields = {
  __typename?: 'config_max_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "config" */
export type Config_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Config_Min_Fields = {
  __typename?: 'config_min_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "config" */
export type Config_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "config" */
export type Config_Mutation_Response = {
  __typename?: 'config_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Config>;
};

/** input type for inserting object relation for remote table "config" */
export type Config_Obj_Rel_Insert_Input = {
  data: Config_Insert_Input;
  on_conflict?: Maybe<Config_On_Conflict>;
};

/** on conflict condition type for table "config" */
export type Config_On_Conflict = {
  constraint: Config_Constraint;
  update_columns: Array<Config_Update_Column>;
  where?: Maybe<Config_Bool_Exp>;
};

/** ordering options when selecting data from "config" */
export type Config_Order_By = {
  id?: Maybe<Order_By>;
  inviteOnly?: Maybe<Order_By>;
};

/** primary key columns input for table: "config" */
export type Config_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "config" */
export enum Config_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InviteOnly = 'inviteOnly'
}

/** input type for updating data in table "config" */
export type Config_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  inviteOnly?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Config_Stddev_Fields = {
  __typename?: 'config_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "config" */
export type Config_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Config_Stddev_Pop_Fields = {
  __typename?: 'config_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "config" */
export type Config_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Config_Stddev_Samp_Fields = {
  __typename?: 'config_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "config" */
export type Config_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Config_Sum_Fields = {
  __typename?: 'config_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "config" */
export type Config_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "config" */
export enum Config_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InviteOnly = 'inviteOnly'
}

/** aggregate var_pop on columns */
export type Config_Var_Pop_Fields = {
  __typename?: 'config_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "config" */
export type Config_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Config_Var_Samp_Fields = {
  __typename?: 'config_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "config" */
export type Config_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Config_Variance_Fields = {
  __typename?: 'config_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "config" */
export type Config_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "form_answers" */
export type Form_Answers = {
  __typename?: 'form_answers';
  /** An object relationship */
  form: Forms;
  form_id: Scalars['uuid'];
  form_question_id: Scalars['uuid'];
  id: Scalars['uuid'];
  int_value: Scalars['String'];
  /** An object relationship */
  question: Form_Questions;
  text_value: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "form_answers" */
export type Form_Answers_Aggregate = {
  __typename?: 'form_answers_aggregate';
  aggregate?: Maybe<Form_Answers_Aggregate_Fields>;
  nodes: Array<Form_Answers>;
};

/** aggregate fields of "form_answers" */
export type Form_Answers_Aggregate_Fields = {
  __typename?: 'form_answers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Answers_Max_Fields>;
  min?: Maybe<Form_Answers_Min_Fields>;
};


/** aggregate fields of "form_answers" */
export type Form_Answers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Answers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_answers" */
export type Form_Answers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Answers_Max_Order_By>;
  min?: Maybe<Form_Answers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_answers" */
export type Form_Answers_Arr_Rel_Insert_Input = {
  data: Array<Form_Answers_Insert_Input>;
  on_conflict?: Maybe<Form_Answers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_answers". All fields are combined with a logical 'AND'. */
export type Form_Answers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Answers_Bool_Exp>>>;
  _not?: Maybe<Form_Answers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Answers_Bool_Exp>>>;
  form?: Maybe<Forms_Bool_Exp>;
  form_id?: Maybe<Uuid_Comparison_Exp>;
  form_question_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  int_value?: Maybe<String_Comparison_Exp>;
  question?: Maybe<Form_Questions_Bool_Exp>;
  text_value?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_answers" */
export enum Form_Answers_Constraint {
  /** unique or primary key constraint */
  FormAnswersIdKey = 'form_answers_id_key',
  /** unique or primary key constraint */
  FormAnswersPkey = 'form_answers_pkey'
}

/** input type for inserting data into table "form_answers" */
export type Form_Answers_Insert_Input = {
  form?: Maybe<Forms_Obj_Rel_Insert_Input>;
  form_id?: Maybe<Scalars['uuid']>;
  form_question_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  int_value?: Maybe<Scalars['String']>;
  question?: Maybe<Form_Questions_Obj_Rel_Insert_Input>;
  text_value?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Form_Answers_Max_Fields = {
  __typename?: 'form_answers_max_fields';
  form_id?: Maybe<Scalars['uuid']>;
  form_question_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  int_value?: Maybe<Scalars['String']>;
  text_value?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "form_answers" */
export type Form_Answers_Max_Order_By = {
  form_id?: Maybe<Order_By>;
  form_question_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  int_value?: Maybe<Order_By>;
  text_value?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Answers_Min_Fields = {
  __typename?: 'form_answers_min_fields';
  form_id?: Maybe<Scalars['uuid']>;
  form_question_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  int_value?: Maybe<Scalars['String']>;
  text_value?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "form_answers" */
export type Form_Answers_Min_Order_By = {
  form_id?: Maybe<Order_By>;
  form_question_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  int_value?: Maybe<Order_By>;
  text_value?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_answers" */
export type Form_Answers_Mutation_Response = {
  __typename?: 'form_answers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Answers>;
};

/** input type for inserting object relation for remote table "form_answers" */
export type Form_Answers_Obj_Rel_Insert_Input = {
  data: Form_Answers_Insert_Input;
  on_conflict?: Maybe<Form_Answers_On_Conflict>;
};

/** on conflict condition type for table "form_answers" */
export type Form_Answers_On_Conflict = {
  constraint: Form_Answers_Constraint;
  update_columns: Array<Form_Answers_Update_Column>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};

/** ordering options when selecting data from "form_answers" */
export type Form_Answers_Order_By = {
  form?: Maybe<Forms_Order_By>;
  form_id?: Maybe<Order_By>;
  form_question_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  int_value?: Maybe<Order_By>;
  question?: Maybe<Form_Questions_Order_By>;
  text_value?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_answers" */
export type Form_Answers_Pk_Columns_Input = {
  form_id: Scalars['uuid'];
  form_question_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "form_answers" */
export enum Form_Answers_Select_Column {
  /** column name */
  FormId = 'form_id',
  /** column name */
  FormQuestionId = 'form_question_id',
  /** column name */
  Id = 'id',
  /** column name */
  IntValue = 'int_value',
  /** column name */
  TextValue = 'text_value',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "form_answers" */
export type Form_Answers_Set_Input = {
  form_id?: Maybe<Scalars['uuid']>;
  form_question_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  int_value?: Maybe<Scalars['String']>;
  text_value?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "form_answers" */
export enum Form_Answers_Update_Column {
  /** column name */
  FormId = 'form_id',
  /** column name */
  FormQuestionId = 'form_question_id',
  /** column name */
  Id = 'id',
  /** column name */
  IntValue = 'int_value',
  /** column name */
  TextValue = 'text_value',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "form_blueprints" */
export type Form_Blueprints = {
  __typename?: 'form_blueprints';
  /** An array relationship */
  categories: Array<Form_Categories>;
  /** An aggregated array relationship */
  categories_aggregate: Form_Categories_Aggregate;
  deleted: Scalars['Boolean'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  forms: Array<Forms>;
  /** An aggregated array relationship */
  forms_aggregate: Forms_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "form_blueprints" */
export type Form_BlueprintsCategoriesArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** columns and relationships of "form_blueprints" */
export type Form_BlueprintsCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** columns and relationships of "form_blueprints" */
export type Form_BlueprintsFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** columns and relationships of "form_blueprints" */
export type Form_BlueprintsForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};

/** aggregated selection of "form_blueprints" */
export type Form_Blueprints_Aggregate = {
  __typename?: 'form_blueprints_aggregate';
  aggregate?: Maybe<Form_Blueprints_Aggregate_Fields>;
  nodes: Array<Form_Blueprints>;
};

/** aggregate fields of "form_blueprints" */
export type Form_Blueprints_Aggregate_Fields = {
  __typename?: 'form_blueprints_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Blueprints_Max_Fields>;
  min?: Maybe<Form_Blueprints_Min_Fields>;
};


/** aggregate fields of "form_blueprints" */
export type Form_Blueprints_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Blueprints_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_blueprints" */
export type Form_Blueprints_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Blueprints_Max_Order_By>;
  min?: Maybe<Form_Blueprints_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_blueprints" */
export type Form_Blueprints_Arr_Rel_Insert_Input = {
  data: Array<Form_Blueprints_Insert_Input>;
  on_conflict?: Maybe<Form_Blueprints_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_blueprints". All fields are combined with a logical 'AND'. */
export type Form_Blueprints_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Blueprints_Bool_Exp>>>;
  _not?: Maybe<Form_Blueprints_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Blueprints_Bool_Exp>>>;
  categories?: Maybe<Form_Categories_Bool_Exp>;
  deleted?: Maybe<Boolean_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  forms?: Maybe<Forms_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_blueprints" */
export enum Form_Blueprints_Constraint {
  /** unique or primary key constraint */
  FormBlueprintsPkey = 'form_blueprints_pkey'
}

/** input type for inserting data into table "form_blueprints" */
export type Form_Blueprints_Insert_Input = {
  categories?: Maybe<Form_Categories_Arr_Rel_Insert_Input>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  forms?: Maybe<Forms_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Form_Blueprints_Max_Fields = {
  __typename?: 'form_blueprints_max_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_blueprints" */
export type Form_Blueprints_Max_Order_By = {
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Blueprints_Min_Fields = {
  __typename?: 'form_blueprints_min_fields';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_blueprints" */
export type Form_Blueprints_Min_Order_By = {
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_blueprints" */
export type Form_Blueprints_Mutation_Response = {
  __typename?: 'form_blueprints_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Blueprints>;
};

/** input type for inserting object relation for remote table "form_blueprints" */
export type Form_Blueprints_Obj_Rel_Insert_Input = {
  data: Form_Blueprints_Insert_Input;
  on_conflict?: Maybe<Form_Blueprints_On_Conflict>;
};

/** on conflict condition type for table "form_blueprints" */
export type Form_Blueprints_On_Conflict = {
  constraint: Form_Blueprints_Constraint;
  update_columns: Array<Form_Blueprints_Update_Column>;
  where?: Maybe<Form_Blueprints_Bool_Exp>;
};

/** ordering options when selecting data from "form_blueprints" */
export type Form_Blueprints_Order_By = {
  categories_aggregate?: Maybe<Form_Categories_Aggregate_Order_By>;
  deleted?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  forms_aggregate?: Maybe<Forms_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_blueprints" */
export type Form_Blueprints_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_blueprints" */
export enum Form_Blueprints_Select_Column {
  /** column name */
  Deleted = 'deleted',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "form_blueprints" */
export type Form_Blueprints_Set_Input = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "form_blueprints" */
export enum Form_Blueprints_Update_Column {
  /** column name */
  Deleted = 'deleted',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "form_categories" */
export type Form_Categories = {
  __typename?: 'form_categories';
  /** An object relationship */
  blueprint: Form_Blueprints;
  /** An array relationship */
  compoundQuestions: Array<Form_Compound_Questions>;
  /** An aggregated array relationship */
  compoundQuestions_aggregate: Form_Compound_Questions_Aggregate;
  form_blueprint_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  sortIndex: Scalars['Int'];
};


/** columns and relationships of "form_categories" */
export type Form_CategoriesCompoundQuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};


/** columns and relationships of "form_categories" */
export type Form_CategoriesCompoundQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};

/** aggregated selection of "form_categories" */
export type Form_Categories_Aggregate = {
  __typename?: 'form_categories_aggregate';
  aggregate?: Maybe<Form_Categories_Aggregate_Fields>;
  nodes: Array<Form_Categories>;
};

/** aggregate fields of "form_categories" */
export type Form_Categories_Aggregate_Fields = {
  __typename?: 'form_categories_aggregate_fields';
  avg?: Maybe<Form_Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Categories_Max_Fields>;
  min?: Maybe<Form_Categories_Min_Fields>;
  stddev?: Maybe<Form_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Categories_Sum_Fields>;
  var_pop?: Maybe<Form_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Categories_Var_Samp_Fields>;
  variance?: Maybe<Form_Categories_Variance_Fields>;
};


/** aggregate fields of "form_categories" */
export type Form_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_categories" */
export type Form_Categories_Aggregate_Order_By = {
  avg?: Maybe<Form_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Categories_Max_Order_By>;
  min?: Maybe<Form_Categories_Min_Order_By>;
  stddev?: Maybe<Form_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Form_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Form_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Form_Categories_Sum_Order_By>;
  var_pop?: Maybe<Form_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Form_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Form_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "form_categories" */
export type Form_Categories_Arr_Rel_Insert_Input = {
  data: Array<Form_Categories_Insert_Input>;
  on_conflict?: Maybe<Form_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Categories_Avg_Fields = {
  __typename?: 'form_categories_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form_categories" */
export type Form_Categories_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form_categories". All fields are combined with a logical 'AND'. */
export type Form_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Categories_Bool_Exp>>>;
  _not?: Maybe<Form_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Categories_Bool_Exp>>>;
  blueprint?: Maybe<Form_Blueprints_Bool_Exp>;
  compoundQuestions?: Maybe<Form_Compound_Questions_Bool_Exp>;
  form_blueprint_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_categories" */
export enum Form_Categories_Constraint {
  /** unique or primary key constraint */
  FormBlueprintCategoriesIdKey = 'form_blueprint_categories_id_key',
  /** unique or primary key constraint */
  FormCategoriesPkey = 'form_categories_pkey'
}

/** input type for incrementing integer column in table "form_categories" */
export type Form_Categories_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "form_categories" */
export type Form_Categories_Insert_Input = {
  blueprint?: Maybe<Form_Blueprints_Obj_Rel_Insert_Input>;
  compoundQuestions?: Maybe<Form_Compound_Questions_Arr_Rel_Insert_Input>;
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Form_Categories_Max_Fields = {
  __typename?: 'form_categories_max_fields';
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "form_categories" */
export type Form_Categories_Max_Order_By = {
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Categories_Min_Fields = {
  __typename?: 'form_categories_min_fields';
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "form_categories" */
export type Form_Categories_Min_Order_By = {
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_categories" */
export type Form_Categories_Mutation_Response = {
  __typename?: 'form_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Categories>;
};

/** input type for inserting object relation for remote table "form_categories" */
export type Form_Categories_Obj_Rel_Insert_Input = {
  data: Form_Categories_Insert_Input;
  on_conflict?: Maybe<Form_Categories_On_Conflict>;
};

/** on conflict condition type for table "form_categories" */
export type Form_Categories_On_Conflict = {
  constraint: Form_Categories_Constraint;
  update_columns: Array<Form_Categories_Update_Column>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "form_categories" */
export type Form_Categories_Order_By = {
  blueprint?: Maybe<Form_Blueprints_Order_By>;
  compoundQuestions_aggregate?: Maybe<Form_Compound_Questions_Aggregate_Order_By>;
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_categories" */
export type Form_Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_categories" */
export enum Form_Categories_Select_Column {
  /** column name */
  FormBlueprintId = 'form_blueprint_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex'
}

/** input type for updating data in table "form_categories" */
export type Form_Categories_Set_Input = {
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Form_Categories_Stddev_Fields = {
  __typename?: 'form_categories_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form_categories" */
export type Form_Categories_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Categories_Stddev_Pop_Fields = {
  __typename?: 'form_categories_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form_categories" */
export type Form_Categories_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Categories_Stddev_Samp_Fields = {
  __typename?: 'form_categories_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form_categories" */
export type Form_Categories_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Form_Categories_Sum_Fields = {
  __typename?: 'form_categories_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "form_categories" */
export type Form_Categories_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "form_categories" */
export enum Form_Categories_Update_Column {
  /** column name */
  FormBlueprintId = 'form_blueprint_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex'
}

/** aggregate var_pop on columns */
export type Form_Categories_Var_Pop_Fields = {
  __typename?: 'form_categories_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form_categories" */
export type Form_Categories_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Categories_Var_Samp_Fields = {
  __typename?: 'form_categories_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form_categories" */
export type Form_Categories_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Categories_Variance_Fields = {
  __typename?: 'form_categories_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form_categories" */
export type Form_Categories_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "form_compound_questions" */
export type Form_Compound_Questions = {
  __typename?: 'form_compound_questions';
  /** An object relationship */
  category: Form_Categories;
  form_category_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  questions: Array<Form_Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Form_Questions_Aggregate;
  required: Scalars['Boolean'];
  sortIndex: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "form_compound_questions" */
export type Form_Compound_QuestionsQuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** columns and relationships of "form_compound_questions" */
export type Form_Compound_QuestionsQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};

/** aggregated selection of "form_compound_questions" */
export type Form_Compound_Questions_Aggregate = {
  __typename?: 'form_compound_questions_aggregate';
  aggregate?: Maybe<Form_Compound_Questions_Aggregate_Fields>;
  nodes: Array<Form_Compound_Questions>;
};

/** aggregate fields of "form_compound_questions" */
export type Form_Compound_Questions_Aggregate_Fields = {
  __typename?: 'form_compound_questions_aggregate_fields';
  avg?: Maybe<Form_Compound_Questions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Compound_Questions_Max_Fields>;
  min?: Maybe<Form_Compound_Questions_Min_Fields>;
  stddev?: Maybe<Form_Compound_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Compound_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Compound_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Compound_Questions_Sum_Fields>;
  var_pop?: Maybe<Form_Compound_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Compound_Questions_Var_Samp_Fields>;
  variance?: Maybe<Form_Compound_Questions_Variance_Fields>;
};


/** aggregate fields of "form_compound_questions" */
export type Form_Compound_Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_compound_questions" */
export type Form_Compound_Questions_Aggregate_Order_By = {
  avg?: Maybe<Form_Compound_Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Compound_Questions_Max_Order_By>;
  min?: Maybe<Form_Compound_Questions_Min_Order_By>;
  stddev?: Maybe<Form_Compound_Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Form_Compound_Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Form_Compound_Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Form_Compound_Questions_Sum_Order_By>;
  var_pop?: Maybe<Form_Compound_Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Form_Compound_Questions_Var_Samp_Order_By>;
  variance?: Maybe<Form_Compound_Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "form_compound_questions" */
export type Form_Compound_Questions_Arr_Rel_Insert_Input = {
  data: Array<Form_Compound_Questions_Insert_Input>;
  on_conflict?: Maybe<Form_Compound_Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Compound_Questions_Avg_Fields = {
  __typename?: 'form_compound_questions_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form_compound_questions". All fields are combined with a logical 'AND'. */
export type Form_Compound_Questions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Compound_Questions_Bool_Exp>>>;
  _not?: Maybe<Form_Compound_Questions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Compound_Questions_Bool_Exp>>>;
  category?: Maybe<Form_Categories_Bool_Exp>;
  form_category_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questions?: Maybe<Form_Questions_Bool_Exp>;
  required?: Maybe<Boolean_Comparison_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_compound_questions" */
export enum Form_Compound_Questions_Constraint {
  /** unique or primary key constraint */
  FormCompoundQuestionsIdKey = 'form_compound_questions_id_key',
  /** unique or primary key constraint */
  FormCompoundQuestionsPkey = 'form_compound_questions_pkey'
}

/** input type for incrementing integer column in table "form_compound_questions" */
export type Form_Compound_Questions_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "form_compound_questions" */
export type Form_Compound_Questions_Insert_Input = {
  category?: Maybe<Form_Categories_Obj_Rel_Insert_Input>;
  form_category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Form_Questions_Arr_Rel_Insert_Input>;
  required?: Maybe<Scalars['Boolean']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Form_Compound_Questions_Max_Fields = {
  __typename?: 'form_compound_questions_max_fields';
  form_category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Max_Order_By = {
  form_category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Compound_Questions_Min_Fields = {
  __typename?: 'form_compound_questions_min_fields';
  form_category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Min_Order_By = {
  form_category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_compound_questions" */
export type Form_Compound_Questions_Mutation_Response = {
  __typename?: 'form_compound_questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Compound_Questions>;
};

/** input type for inserting object relation for remote table "form_compound_questions" */
export type Form_Compound_Questions_Obj_Rel_Insert_Input = {
  data: Form_Compound_Questions_Insert_Input;
  on_conflict?: Maybe<Form_Compound_Questions_On_Conflict>;
};

/** on conflict condition type for table "form_compound_questions" */
export type Form_Compound_Questions_On_Conflict = {
  constraint: Form_Compound_Questions_Constraint;
  update_columns: Array<Form_Compound_Questions_Update_Column>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};

/** ordering options when selecting data from "form_compound_questions" */
export type Form_Compound_Questions_Order_By = {
  category?: Maybe<Form_Categories_Order_By>;
  form_category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Form_Questions_Aggregate_Order_By>;
  required?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_compound_questions" */
export type Form_Compound_Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_compound_questions" */
export enum Form_Compound_Questions_Select_Column {
  /** column name */
  FormCategoryId = 'form_category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Required = 'required',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "form_compound_questions" */
export type Form_Compound_Questions_Set_Input = {
  form_category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Form_Compound_Questions_Stddev_Fields = {
  __typename?: 'form_compound_questions_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Compound_Questions_Stddev_Pop_Fields = {
  __typename?: 'form_compound_questions_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Compound_Questions_Stddev_Samp_Fields = {
  __typename?: 'form_compound_questions_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Form_Compound_Questions_Sum_Fields = {
  __typename?: 'form_compound_questions_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "form_compound_questions" */
export enum Form_Compound_Questions_Update_Column {
  /** column name */
  FormCategoryId = 'form_category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Required = 'required',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Form_Compound_Questions_Var_Pop_Fields = {
  __typename?: 'form_compound_questions_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Compound_Questions_Var_Samp_Fields = {
  __typename?: 'form_compound_questions_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Compound_Questions_Variance_Fields = {
  __typename?: 'form_compound_questions_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form_compound_questions" */
export type Form_Compound_Questions_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "form_default_list_options" */
export type Form_Default_List_Options = {
  __typename?: 'form_default_list_options';
  form_default_list_id: Scalars['uuid'];
  id: Scalars['uuid'];
  label: Scalars['String'];
  /** An object relationship */
  list: Form_Default_Lists;
  value: Scalars['String'];
};

/** aggregated selection of "form_default_list_options" */
export type Form_Default_List_Options_Aggregate = {
  __typename?: 'form_default_list_options_aggregate';
  aggregate?: Maybe<Form_Default_List_Options_Aggregate_Fields>;
  nodes: Array<Form_Default_List_Options>;
};

/** aggregate fields of "form_default_list_options" */
export type Form_Default_List_Options_Aggregate_Fields = {
  __typename?: 'form_default_list_options_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Default_List_Options_Max_Fields>;
  min?: Maybe<Form_Default_List_Options_Min_Fields>;
};


/** aggregate fields of "form_default_list_options" */
export type Form_Default_List_Options_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_default_list_options" */
export type Form_Default_List_Options_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Default_List_Options_Max_Order_By>;
  min?: Maybe<Form_Default_List_Options_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_default_list_options" */
export type Form_Default_List_Options_Arr_Rel_Insert_Input = {
  data: Array<Form_Default_List_Options_Insert_Input>;
  on_conflict?: Maybe<Form_Default_List_Options_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_default_list_options". All fields are combined with a logical 'AND'. */
export type Form_Default_List_Options_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Default_List_Options_Bool_Exp>>>;
  _not?: Maybe<Form_Default_List_Options_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Default_List_Options_Bool_Exp>>>;
  form_default_list_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  list?: Maybe<Form_Default_Lists_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_default_list_options" */
export enum Form_Default_List_Options_Constraint {
  /** unique or primary key constraint */
  FormDefaultListOptionsPkey = 'form_default_list_options_pkey'
}

/** input type for inserting data into table "form_default_list_options" */
export type Form_Default_List_Options_Insert_Input = {
  form_default_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  list?: Maybe<Form_Default_Lists_Obj_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Form_Default_List_Options_Max_Fields = {
  __typename?: 'form_default_list_options_max_fields';
  form_default_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_default_list_options" */
export type Form_Default_List_Options_Max_Order_By = {
  form_default_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Default_List_Options_Min_Fields = {
  __typename?: 'form_default_list_options_min_fields';
  form_default_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_default_list_options" */
export type Form_Default_List_Options_Min_Order_By = {
  form_default_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_default_list_options" */
export type Form_Default_List_Options_Mutation_Response = {
  __typename?: 'form_default_list_options_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Default_List_Options>;
};

/** input type for inserting object relation for remote table "form_default_list_options" */
export type Form_Default_List_Options_Obj_Rel_Insert_Input = {
  data: Form_Default_List_Options_Insert_Input;
  on_conflict?: Maybe<Form_Default_List_Options_On_Conflict>;
};

/** on conflict condition type for table "form_default_list_options" */
export type Form_Default_List_Options_On_Conflict = {
  constraint: Form_Default_List_Options_Constraint;
  update_columns: Array<Form_Default_List_Options_Update_Column>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};

/** ordering options when selecting data from "form_default_list_options" */
export type Form_Default_List_Options_Order_By = {
  form_default_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  list?: Maybe<Form_Default_Lists_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_default_list_options" */
export type Form_Default_List_Options_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_default_list_options" */
export enum Form_Default_List_Options_Select_Column {
  /** column name */
  FormDefaultListId = 'form_default_list_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "form_default_list_options" */
export type Form_Default_List_Options_Set_Input = {
  form_default_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "form_default_list_options" */
export enum Form_Default_List_Options_Update_Column {
  /** column name */
  FormDefaultListId = 'form_default_list_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "form_default_lists" */
export type Form_Default_Lists = {
  __typename?: 'form_default_lists';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  options: Array<Form_Default_List_Options>;
  /** An aggregated array relationship */
  options_aggregate: Form_Default_List_Options_Aggregate;
};


/** columns and relationships of "form_default_lists" */
export type Form_Default_ListsOptionsArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};


/** columns and relationships of "form_default_lists" */
export type Form_Default_ListsOptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};

/** aggregated selection of "form_default_lists" */
export type Form_Default_Lists_Aggregate = {
  __typename?: 'form_default_lists_aggregate';
  aggregate?: Maybe<Form_Default_Lists_Aggregate_Fields>;
  nodes: Array<Form_Default_Lists>;
};

/** aggregate fields of "form_default_lists" */
export type Form_Default_Lists_Aggregate_Fields = {
  __typename?: 'form_default_lists_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Default_Lists_Max_Fields>;
  min?: Maybe<Form_Default_Lists_Min_Fields>;
};


/** aggregate fields of "form_default_lists" */
export type Form_Default_Lists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Default_Lists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_default_lists" */
export type Form_Default_Lists_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Default_Lists_Max_Order_By>;
  min?: Maybe<Form_Default_Lists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_default_lists" */
export type Form_Default_Lists_Arr_Rel_Insert_Input = {
  data: Array<Form_Default_Lists_Insert_Input>;
  on_conflict?: Maybe<Form_Default_Lists_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_default_lists". All fields are combined with a logical 'AND'. */
export type Form_Default_Lists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Default_Lists_Bool_Exp>>>;
  _not?: Maybe<Form_Default_Lists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Default_Lists_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  options?: Maybe<Form_Default_List_Options_Bool_Exp>;
};

/** unique or primary key constraints on table "form_default_lists" */
export enum Form_Default_Lists_Constraint {
  /** unique or primary key constraint */
  FormDefaultListsPkey = 'form_default_lists_pkey'
}

/** input type for inserting data into table "form_default_lists" */
export type Form_Default_Lists_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Form_Default_List_Options_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Form_Default_Lists_Max_Fields = {
  __typename?: 'form_default_lists_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_default_lists" */
export type Form_Default_Lists_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Default_Lists_Min_Fields = {
  __typename?: 'form_default_lists_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_default_lists" */
export type Form_Default_Lists_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_default_lists" */
export type Form_Default_Lists_Mutation_Response = {
  __typename?: 'form_default_lists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Default_Lists>;
};

/** input type for inserting object relation for remote table "form_default_lists" */
export type Form_Default_Lists_Obj_Rel_Insert_Input = {
  data: Form_Default_Lists_Insert_Input;
  on_conflict?: Maybe<Form_Default_Lists_On_Conflict>;
};

/** on conflict condition type for table "form_default_lists" */
export type Form_Default_Lists_On_Conflict = {
  constraint: Form_Default_Lists_Constraint;
  update_columns: Array<Form_Default_Lists_Update_Column>;
  where?: Maybe<Form_Default_Lists_Bool_Exp>;
};

/** ordering options when selecting data from "form_default_lists" */
export type Form_Default_Lists_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  options_aggregate?: Maybe<Form_Default_List_Options_Aggregate_Order_By>;
};

/** primary key columns input for table: "form_default_lists" */
export type Form_Default_Lists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_default_lists" */
export enum Form_Default_Lists_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "form_default_lists" */
export type Form_Default_Lists_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "form_default_lists" */
export enum Form_Default_Lists_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "form_question_list_options" */
export type Form_Question_List_Options = {
  __typename?: 'form_question_list_options';
  form_question_list_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  questionList: Form_Question_Lists;
  sortIndex: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
  weight: Scalars['numeric'];
};

/** aggregated selection of "form_question_list_options" */
export type Form_Question_List_Options_Aggregate = {
  __typename?: 'form_question_list_options_aggregate';
  aggregate?: Maybe<Form_Question_List_Options_Aggregate_Fields>;
  nodes: Array<Form_Question_List_Options>;
};

/** aggregate fields of "form_question_list_options" */
export type Form_Question_List_Options_Aggregate_Fields = {
  __typename?: 'form_question_list_options_aggregate_fields';
  avg?: Maybe<Form_Question_List_Options_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Question_List_Options_Max_Fields>;
  min?: Maybe<Form_Question_List_Options_Min_Fields>;
  stddev?: Maybe<Form_Question_List_Options_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Question_List_Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Question_List_Options_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Question_List_Options_Sum_Fields>;
  var_pop?: Maybe<Form_Question_List_Options_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Question_List_Options_Var_Samp_Fields>;
  variance?: Maybe<Form_Question_List_Options_Variance_Fields>;
};


/** aggregate fields of "form_question_list_options" */
export type Form_Question_List_Options_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_question_list_options" */
export type Form_Question_List_Options_Aggregate_Order_By = {
  avg?: Maybe<Form_Question_List_Options_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Question_List_Options_Max_Order_By>;
  min?: Maybe<Form_Question_List_Options_Min_Order_By>;
  stddev?: Maybe<Form_Question_List_Options_Stddev_Order_By>;
  stddev_pop?: Maybe<Form_Question_List_Options_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Form_Question_List_Options_Stddev_Samp_Order_By>;
  sum?: Maybe<Form_Question_List_Options_Sum_Order_By>;
  var_pop?: Maybe<Form_Question_List_Options_Var_Pop_Order_By>;
  var_samp?: Maybe<Form_Question_List_Options_Var_Samp_Order_By>;
  variance?: Maybe<Form_Question_List_Options_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "form_question_list_options" */
export type Form_Question_List_Options_Arr_Rel_Insert_Input = {
  data: Array<Form_Question_List_Options_Insert_Input>;
  on_conflict?: Maybe<Form_Question_List_Options_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Question_List_Options_Avg_Fields = {
  __typename?: 'form_question_list_options_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form_question_list_options". All fields are combined with a logical 'AND'. */
export type Form_Question_List_Options_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Question_List_Options_Bool_Exp>>>;
  _not?: Maybe<Form_Question_List_Options_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Question_List_Options_Bool_Exp>>>;
  form_question_list_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questionList?: Maybe<Form_Question_Lists_Bool_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_question_list_options" */
export enum Form_Question_List_Options_Constraint {
  /** unique or primary key constraint */
  FormQuestionListOptionsPkey = 'form_question_list_options_pkey'
}

/** input type for incrementing integer column in table "form_question_list_options" */
export type Form_Question_List_Options_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "form_question_list_options" */
export type Form_Question_List_Options_Insert_Input = {
  form_question_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  questionList?: Maybe<Form_Question_Lists_Obj_Rel_Insert_Input>;
  sortIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Form_Question_List_Options_Max_Fields = {
  __typename?: 'form_question_list_options_max_fields';
  form_question_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Max_Order_By = {
  form_question_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Question_List_Options_Min_Fields = {
  __typename?: 'form_question_list_options_min_fields';
  form_question_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Min_Order_By = {
  form_question_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_question_list_options" */
export type Form_Question_List_Options_Mutation_Response = {
  __typename?: 'form_question_list_options_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Question_List_Options>;
};

/** input type for inserting object relation for remote table "form_question_list_options" */
export type Form_Question_List_Options_Obj_Rel_Insert_Input = {
  data: Form_Question_List_Options_Insert_Input;
  on_conflict?: Maybe<Form_Question_List_Options_On_Conflict>;
};

/** on conflict condition type for table "form_question_list_options" */
export type Form_Question_List_Options_On_Conflict = {
  constraint: Form_Question_List_Options_Constraint;
  update_columns: Array<Form_Question_List_Options_Update_Column>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};

/** ordering options when selecting data from "form_question_list_options" */
export type Form_Question_List_Options_Order_By = {
  form_question_list_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questionList?: Maybe<Form_Question_Lists_Order_By>;
  sortIndex?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_question_list_options" */
export type Form_Question_List_Options_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_question_list_options" */
export enum Form_Question_List_Options_Select_Column {
  /** column name */
  FormQuestionListId = 'form_question_list_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Value = 'value',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "form_question_list_options" */
export type Form_Question_List_Options_Set_Input = {
  form_question_list_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Form_Question_List_Options_Stddev_Fields = {
  __typename?: 'form_question_list_options_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Question_List_Options_Stddev_Pop_Fields = {
  __typename?: 'form_question_list_options_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Question_List_Options_Stddev_Samp_Fields = {
  __typename?: 'form_question_list_options_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Form_Question_List_Options_Sum_Fields = {
  __typename?: 'form_question_list_options_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** update columns of table "form_question_list_options" */
export enum Form_Question_List_Options_Update_Column {
  /** column name */
  FormQuestionListId = 'form_question_list_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Value = 'value',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Form_Question_List_Options_Var_Pop_Fields = {
  __typename?: 'form_question_list_options_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Question_List_Options_Var_Samp_Fields = {
  __typename?: 'form_question_list_options_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Question_List_Options_Variance_Fields = {
  __typename?: 'form_question_list_options_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form_question_list_options" */
export type Form_Question_List_Options_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** columns and relationships of "form_question_list_types" */
export type Form_Question_List_Types = {
  __typename?: 'form_question_list_types';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "form_question_list_types" */
export type Form_Question_List_Types_Aggregate = {
  __typename?: 'form_question_list_types_aggregate';
  aggregate?: Maybe<Form_Question_List_Types_Aggregate_Fields>;
  nodes: Array<Form_Question_List_Types>;
};

/** aggregate fields of "form_question_list_types" */
export type Form_Question_List_Types_Aggregate_Fields = {
  __typename?: 'form_question_list_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Question_List_Types_Max_Fields>;
  min?: Maybe<Form_Question_List_Types_Min_Fields>;
};


/** aggregate fields of "form_question_list_types" */
export type Form_Question_List_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Question_List_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_question_list_types" */
export type Form_Question_List_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Question_List_Types_Max_Order_By>;
  min?: Maybe<Form_Question_List_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_question_list_types" */
export type Form_Question_List_Types_Arr_Rel_Insert_Input = {
  data: Array<Form_Question_List_Types_Insert_Input>;
  on_conflict?: Maybe<Form_Question_List_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_question_list_types". All fields are combined with a logical 'AND'. */
export type Form_Question_List_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Question_List_Types_Bool_Exp>>>;
  _not?: Maybe<Form_Question_List_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Question_List_Types_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_question_list_types" */
export enum Form_Question_List_Types_Constraint {
  /** unique or primary key constraint */
  FormQuestionListTypesPkey = 'form_question_list_types_pkey'
}

/** input type for inserting data into table "form_question_list_types" */
export type Form_Question_List_Types_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Form_Question_List_Types_Max_Fields = {
  __typename?: 'form_question_list_types_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_question_list_types" */
export type Form_Question_List_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Question_List_Types_Min_Fields = {
  __typename?: 'form_question_list_types_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_question_list_types" */
export type Form_Question_List_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_question_list_types" */
export type Form_Question_List_Types_Mutation_Response = {
  __typename?: 'form_question_list_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Question_List_Types>;
};

/** input type for inserting object relation for remote table "form_question_list_types" */
export type Form_Question_List_Types_Obj_Rel_Insert_Input = {
  data: Form_Question_List_Types_Insert_Input;
  on_conflict?: Maybe<Form_Question_List_Types_On_Conflict>;
};

/** on conflict condition type for table "form_question_list_types" */
export type Form_Question_List_Types_On_Conflict = {
  constraint: Form_Question_List_Types_Constraint;
  update_columns: Array<Form_Question_List_Types_Update_Column>;
  where?: Maybe<Form_Question_List_Types_Bool_Exp>;
};

/** ordering options when selecting data from "form_question_list_types" */
export type Form_Question_List_Types_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_question_list_types" */
export type Form_Question_List_Types_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "form_question_list_types" */
export enum Form_Question_List_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "form_question_list_types" */
export type Form_Question_List_Types_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "form_question_list_types" */
export enum Form_Question_List_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "form_question_lists" */
export type Form_Question_Lists = {
  __typename?: 'form_question_lists';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  options: Array<Form_Question_List_Options>;
  /** An aggregated array relationship */
  options_aggregate: Form_Question_List_Options_Aggregate;
  /** An array relationship */
  questions: Array<Form_Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Form_Questions_Aggregate;
};


/** columns and relationships of "form_question_lists" */
export type Form_Question_ListsOptionsArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** columns and relationships of "form_question_lists" */
export type Form_Question_ListsOptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** columns and relationships of "form_question_lists" */
export type Form_Question_ListsQuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** columns and relationships of "form_question_lists" */
export type Form_Question_ListsQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};

/** aggregated selection of "form_question_lists" */
export type Form_Question_Lists_Aggregate = {
  __typename?: 'form_question_lists_aggregate';
  aggregate?: Maybe<Form_Question_Lists_Aggregate_Fields>;
  nodes: Array<Form_Question_Lists>;
};

/** aggregate fields of "form_question_lists" */
export type Form_Question_Lists_Aggregate_Fields = {
  __typename?: 'form_question_lists_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Question_Lists_Max_Fields>;
  min?: Maybe<Form_Question_Lists_Min_Fields>;
};


/** aggregate fields of "form_question_lists" */
export type Form_Question_Lists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Question_Lists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_question_lists" */
export type Form_Question_Lists_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Question_Lists_Max_Order_By>;
  min?: Maybe<Form_Question_Lists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "form_question_lists" */
export type Form_Question_Lists_Arr_Rel_Insert_Input = {
  data: Array<Form_Question_Lists_Insert_Input>;
  on_conflict?: Maybe<Form_Question_Lists_On_Conflict>;
};

/** Boolean expression to filter rows from the table "form_question_lists". All fields are combined with a logical 'AND'. */
export type Form_Question_Lists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Question_Lists_Bool_Exp>>>;
  _not?: Maybe<Form_Question_Lists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Question_Lists_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  options?: Maybe<Form_Question_List_Options_Bool_Exp>;
  questions?: Maybe<Form_Questions_Bool_Exp>;
};

/** unique or primary key constraints on table "form_question_lists" */
export enum Form_Question_Lists_Constraint {
  /** unique or primary key constraint */
  FormQuestionListPkey = 'form_question_list_pkey'
}

/** input type for inserting data into table "form_question_lists" */
export type Form_Question_Lists_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Form_Question_List_Options_Arr_Rel_Insert_Input>;
  questions?: Maybe<Form_Questions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Form_Question_Lists_Max_Fields = {
  __typename?: 'form_question_lists_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_question_lists" */
export type Form_Question_Lists_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Question_Lists_Min_Fields = {
  __typename?: 'form_question_lists_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_question_lists" */
export type Form_Question_Lists_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_question_lists" */
export type Form_Question_Lists_Mutation_Response = {
  __typename?: 'form_question_lists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Question_Lists>;
};

/** input type for inserting object relation for remote table "form_question_lists" */
export type Form_Question_Lists_Obj_Rel_Insert_Input = {
  data: Form_Question_Lists_Insert_Input;
  on_conflict?: Maybe<Form_Question_Lists_On_Conflict>;
};

/** on conflict condition type for table "form_question_lists" */
export type Form_Question_Lists_On_Conflict = {
  constraint: Form_Question_Lists_Constraint;
  update_columns: Array<Form_Question_Lists_Update_Column>;
  where?: Maybe<Form_Question_Lists_Bool_Exp>;
};

/** ordering options when selecting data from "form_question_lists" */
export type Form_Question_Lists_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  options_aggregate?: Maybe<Form_Question_List_Options_Aggregate_Order_By>;
  questions_aggregate?: Maybe<Form_Questions_Aggregate_Order_By>;
};

/** primary key columns input for table: "form_question_lists" */
export type Form_Question_Lists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_question_lists" */
export enum Form_Question_Lists_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "form_question_lists" */
export type Form_Question_Lists_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "form_question_lists" */
export enum Form_Question_Lists_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "form_question_types" */
export type Form_Question_Types = {
  __typename?: 'form_question_types';
  id: Scalars['String'];
  listish: Scalars['Boolean'];
  name: Scalars['String'];
  value: Scalars['Int'];
};

/** aggregated selection of "form_question_types" */
export type Form_Question_Types_Aggregate = {
  __typename?: 'form_question_types_aggregate';
  aggregate?: Maybe<Form_Question_Types_Aggregate_Fields>;
  nodes: Array<Form_Question_Types>;
};

/** aggregate fields of "form_question_types" */
export type Form_Question_Types_Aggregate_Fields = {
  __typename?: 'form_question_types_aggregate_fields';
  avg?: Maybe<Form_Question_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Question_Types_Max_Fields>;
  min?: Maybe<Form_Question_Types_Min_Fields>;
  stddev?: Maybe<Form_Question_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Question_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Question_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Question_Types_Sum_Fields>;
  var_pop?: Maybe<Form_Question_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Question_Types_Var_Samp_Fields>;
  variance?: Maybe<Form_Question_Types_Variance_Fields>;
};


/** aggregate fields of "form_question_types" */
export type Form_Question_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Question_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_question_types" */
export type Form_Question_Types_Aggregate_Order_By = {
  avg?: Maybe<Form_Question_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Question_Types_Max_Order_By>;
  min?: Maybe<Form_Question_Types_Min_Order_By>;
  stddev?: Maybe<Form_Question_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Form_Question_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Form_Question_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Form_Question_Types_Sum_Order_By>;
  var_pop?: Maybe<Form_Question_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Form_Question_Types_Var_Samp_Order_By>;
  variance?: Maybe<Form_Question_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "form_question_types" */
export type Form_Question_Types_Arr_Rel_Insert_Input = {
  data: Array<Form_Question_Types_Insert_Input>;
  on_conflict?: Maybe<Form_Question_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Question_Types_Avg_Fields = {
  __typename?: 'form_question_types_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form_question_types" */
export type Form_Question_Types_Avg_Order_By = {
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form_question_types". All fields are combined with a logical 'AND'. */
export type Form_Question_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Question_Types_Bool_Exp>>>;
  _not?: Maybe<Form_Question_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Question_Types_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  listish?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_question_types" */
export enum Form_Question_Types_Constraint {
  /** unique or primary key constraint */
  FormQuestionTypesIdKey = 'form_question_types_id_key',
  /** unique or primary key constraint */
  FormQuestionTypesPkey = 'form_question_types_pkey'
}

/** input type for incrementing integer column in table "form_question_types" */
export type Form_Question_Types_Inc_Input = {
  value?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "form_question_types" */
export type Form_Question_Types_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  listish?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Form_Question_Types_Max_Fields = {
  __typename?: 'form_question_types_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "form_question_types" */
export type Form_Question_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Question_Types_Min_Fields = {
  __typename?: 'form_question_types_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "form_question_types" */
export type Form_Question_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_question_types" */
export type Form_Question_Types_Mutation_Response = {
  __typename?: 'form_question_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Question_Types>;
};

/** input type for inserting object relation for remote table "form_question_types" */
export type Form_Question_Types_Obj_Rel_Insert_Input = {
  data: Form_Question_Types_Insert_Input;
  on_conflict?: Maybe<Form_Question_Types_On_Conflict>;
};

/** on conflict condition type for table "form_question_types" */
export type Form_Question_Types_On_Conflict = {
  constraint: Form_Question_Types_Constraint;
  update_columns: Array<Form_Question_Types_Update_Column>;
  where?: Maybe<Form_Question_Types_Bool_Exp>;
};

/** ordering options when selecting data from "form_question_types" */
export type Form_Question_Types_Order_By = {
  id?: Maybe<Order_By>;
  listish?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_question_types" */
export type Form_Question_Types_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "form_question_types" */
export enum Form_Question_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Listish = 'listish',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "form_question_types" */
export type Form_Question_Types_Set_Input = {
  id?: Maybe<Scalars['String']>;
  listish?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Form_Question_Types_Stddev_Fields = {
  __typename?: 'form_question_types_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form_question_types" */
export type Form_Question_Types_Stddev_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Question_Types_Stddev_Pop_Fields = {
  __typename?: 'form_question_types_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form_question_types" */
export type Form_Question_Types_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Question_Types_Stddev_Samp_Fields = {
  __typename?: 'form_question_types_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form_question_types" */
export type Form_Question_Types_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Form_Question_Types_Sum_Fields = {
  __typename?: 'form_question_types_sum_fields';
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "form_question_types" */
export type Form_Question_Types_Sum_Order_By = {
  value?: Maybe<Order_By>;
};

/** update columns of table "form_question_types" */
export enum Form_Question_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Listish = 'listish',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Form_Question_Types_Var_Pop_Fields = {
  __typename?: 'form_question_types_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form_question_types" */
export type Form_Question_Types_Var_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Question_Types_Var_Samp_Fields = {
  __typename?: 'form_question_types_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form_question_types" */
export type Form_Question_Types_Var_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Question_Types_Variance_Fields = {
  __typename?: 'form_question_types_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form_question_types" */
export type Form_Question_Types_Variance_Order_By = {
  value?: Maybe<Order_By>;
};

/** columns and relationships of "form_questions" */
export type Form_Questions = {
  __typename?: 'form_questions';
  /** An array relationship */
  answers: Array<Form_Answers>;
  /** An aggregated array relationship */
  answers_aggregate: Form_Answers_Aggregate;
  /** An object relationship */
  compoundQuestion: Form_Compound_Questions;
  form_compound_question_id: Scalars['uuid'];
  form_default_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_type_id: Scalars['String'];
  form_question_type_id: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  list?: Maybe<Form_Question_Lists>;
  list_type: Scalars['String'];
  name: Scalars['String'];
  /** An object relationship */
  questionType: Form_Question_Types;
  sortIndex: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "form_questions" */
export type Form_QuestionsAnswersArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** columns and relationships of "form_questions" */
export type Form_QuestionsAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};

/** aggregated selection of "form_questions" */
export type Form_Questions_Aggregate = {
  __typename?: 'form_questions_aggregate';
  aggregate?: Maybe<Form_Questions_Aggregate_Fields>;
  nodes: Array<Form_Questions>;
};

/** aggregate fields of "form_questions" */
export type Form_Questions_Aggregate_Fields = {
  __typename?: 'form_questions_aggregate_fields';
  avg?: Maybe<Form_Questions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Form_Questions_Max_Fields>;
  min?: Maybe<Form_Questions_Min_Fields>;
  stddev?: Maybe<Form_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Form_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Form_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Form_Questions_Sum_Fields>;
  var_pop?: Maybe<Form_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Form_Questions_Var_Samp_Fields>;
  variance?: Maybe<Form_Questions_Variance_Fields>;
};


/** aggregate fields of "form_questions" */
export type Form_Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Form_Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "form_questions" */
export type Form_Questions_Aggregate_Order_By = {
  avg?: Maybe<Form_Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Form_Questions_Max_Order_By>;
  min?: Maybe<Form_Questions_Min_Order_By>;
  stddev?: Maybe<Form_Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Form_Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Form_Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Form_Questions_Sum_Order_By>;
  var_pop?: Maybe<Form_Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Form_Questions_Var_Samp_Order_By>;
  variance?: Maybe<Form_Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "form_questions" */
export type Form_Questions_Arr_Rel_Insert_Input = {
  data: Array<Form_Questions_Insert_Input>;
  on_conflict?: Maybe<Form_Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Form_Questions_Avg_Fields = {
  __typename?: 'form_questions_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "form_questions" */
export type Form_Questions_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "form_questions". All fields are combined with a logical 'AND'. */
export type Form_Questions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Form_Questions_Bool_Exp>>>;
  _not?: Maybe<Form_Questions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Form_Questions_Bool_Exp>>>;
  answers?: Maybe<Form_Answers_Bool_Exp>;
  compoundQuestion?: Maybe<Form_Compound_Questions_Bool_Exp>;
  form_compound_question_id?: Maybe<Uuid_Comparison_Exp>;
  form_default_list_id?: Maybe<Uuid_Comparison_Exp>;
  form_question_list_id?: Maybe<Uuid_Comparison_Exp>;
  form_question_list_type_id?: Maybe<String_Comparison_Exp>;
  form_question_type_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  list?: Maybe<Form_Question_Lists_Bool_Exp>;
  list_type?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questionType?: Maybe<Form_Question_Types_Bool_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_questions" */
export enum Form_Questions_Constraint {
  /** unique or primary key constraint */
  FormQuestionsIdKey = 'form_questions_id_key',
  /** unique or primary key constraint */
  FormQuestionsPkey = 'form_questions_pkey'
}

/** input type for incrementing integer column in table "form_questions" */
export type Form_Questions_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "form_questions" */
export type Form_Questions_Insert_Input = {
  answers?: Maybe<Form_Answers_Arr_Rel_Insert_Input>;
  compoundQuestion?: Maybe<Form_Compound_Questions_Obj_Rel_Insert_Input>;
  form_compound_question_id?: Maybe<Scalars['uuid']>;
  form_default_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_type_id?: Maybe<Scalars['String']>;
  form_question_type_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list?: Maybe<Form_Question_Lists_Obj_Rel_Insert_Input>;
  list_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  questionType?: Maybe<Form_Question_Types_Obj_Rel_Insert_Input>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Form_Questions_Max_Fields = {
  __typename?: 'form_questions_max_fields';
  form_compound_question_id?: Maybe<Scalars['uuid']>;
  form_default_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_type_id?: Maybe<Scalars['String']>;
  form_question_type_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "form_questions" */
export type Form_Questions_Max_Order_By = {
  form_compound_question_id?: Maybe<Order_By>;
  form_default_list_id?: Maybe<Order_By>;
  form_question_list_id?: Maybe<Order_By>;
  form_question_list_type_id?: Maybe<Order_By>;
  form_question_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Form_Questions_Min_Fields = {
  __typename?: 'form_questions_min_fields';
  form_compound_question_id?: Maybe<Scalars['uuid']>;
  form_default_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_type_id?: Maybe<Scalars['String']>;
  form_question_type_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "form_questions" */
export type Form_Questions_Min_Order_By = {
  form_compound_question_id?: Maybe<Order_By>;
  form_default_list_id?: Maybe<Order_By>;
  form_question_list_id?: Maybe<Order_By>;
  form_question_list_type_id?: Maybe<Order_By>;
  form_question_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "form_questions" */
export type Form_Questions_Mutation_Response = {
  __typename?: 'form_questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Form_Questions>;
};

/** input type for inserting object relation for remote table "form_questions" */
export type Form_Questions_Obj_Rel_Insert_Input = {
  data: Form_Questions_Insert_Input;
  on_conflict?: Maybe<Form_Questions_On_Conflict>;
};

/** on conflict condition type for table "form_questions" */
export type Form_Questions_On_Conflict = {
  constraint: Form_Questions_Constraint;
  update_columns: Array<Form_Questions_Update_Column>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};

/** ordering options when selecting data from "form_questions" */
export type Form_Questions_Order_By = {
  answers_aggregate?: Maybe<Form_Answers_Aggregate_Order_By>;
  compoundQuestion?: Maybe<Form_Compound_Questions_Order_By>;
  form_compound_question_id?: Maybe<Order_By>;
  form_default_list_id?: Maybe<Order_By>;
  form_question_list_id?: Maybe<Order_By>;
  form_question_list_type_id?: Maybe<Order_By>;
  form_question_type_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list?: Maybe<Form_Question_Lists_Order_By>;
  list_type?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questionType?: Maybe<Form_Question_Types_Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "form_questions" */
export type Form_Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "form_questions" */
export enum Form_Questions_Select_Column {
  /** column name */
  FormCompoundQuestionId = 'form_compound_question_id',
  /** column name */
  FormDefaultListId = 'form_default_list_id',
  /** column name */
  FormQuestionListId = 'form_question_list_id',
  /** column name */
  FormQuestionListTypeId = 'form_question_list_type_id',
  /** column name */
  FormQuestionTypeId = 'form_question_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListType = 'list_type',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "form_questions" */
export type Form_Questions_Set_Input = {
  form_compound_question_id?: Maybe<Scalars['uuid']>;
  form_default_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_id?: Maybe<Scalars['uuid']>;
  form_question_list_type_id?: Maybe<Scalars['String']>;
  form_question_type_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Form_Questions_Stddev_Fields = {
  __typename?: 'form_questions_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "form_questions" */
export type Form_Questions_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Form_Questions_Stddev_Pop_Fields = {
  __typename?: 'form_questions_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "form_questions" */
export type Form_Questions_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Form_Questions_Stddev_Samp_Fields = {
  __typename?: 'form_questions_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "form_questions" */
export type Form_Questions_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Form_Questions_Sum_Fields = {
  __typename?: 'form_questions_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "form_questions" */
export type Form_Questions_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "form_questions" */
export enum Form_Questions_Update_Column {
  /** column name */
  FormCompoundQuestionId = 'form_compound_question_id',
  /** column name */
  FormDefaultListId = 'form_default_list_id',
  /** column name */
  FormQuestionListId = 'form_question_list_id',
  /** column name */
  FormQuestionListTypeId = 'form_question_list_type_id',
  /** column name */
  FormQuestionTypeId = 'form_question_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  ListType = 'list_type',
  /** column name */
  Name = 'name',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Form_Questions_Var_Pop_Fields = {
  __typename?: 'form_questions_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "form_questions" */
export type Form_Questions_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Form_Questions_Var_Samp_Fields = {
  __typename?: 'form_questions_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "form_questions" */
export type Form_Questions_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Form_Questions_Variance_Fields = {
  __typename?: 'form_questions_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "form_questions" */
export type Form_Questions_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "forms" */
export type Forms = {
  __typename?: 'forms';
  /** An array relationship */
  answers: Array<Form_Answers>;
  /** An aggregated array relationship */
  answers_aggregate: Form_Answers_Aggregate;
  /** An object relationship */
  blueprint: Form_Blueprints;
  form_blueprint_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  organisation: Organisations;
  organisation_id: Scalars['uuid'];
};


/** columns and relationships of "forms" */
export type FormsAnswersArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** columns and relationships of "forms" */
export type FormsAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};

/** aggregated selection of "forms" */
export type Forms_Aggregate = {
  __typename?: 'forms_aggregate';
  aggregate?: Maybe<Forms_Aggregate_Fields>;
  nodes: Array<Forms>;
};

/** aggregate fields of "forms" */
export type Forms_Aggregate_Fields = {
  __typename?: 'forms_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Forms_Max_Fields>;
  min?: Maybe<Forms_Min_Fields>;
};


/** aggregate fields of "forms" */
export type Forms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Forms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "forms" */
export type Forms_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Forms_Max_Order_By>;
  min?: Maybe<Forms_Min_Order_By>;
};

/** input type for inserting array relation for remote table "forms" */
export type Forms_Arr_Rel_Insert_Input = {
  data: Array<Forms_Insert_Input>;
  on_conflict?: Maybe<Forms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "forms". All fields are combined with a logical 'AND'. */
export type Forms_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Forms_Bool_Exp>>>;
  _not?: Maybe<Forms_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Forms_Bool_Exp>>>;
  answers?: Maybe<Form_Answers_Bool_Exp>;
  blueprint?: Maybe<Form_Blueprints_Bool_Exp>;
  form_blueprint_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisation?: Maybe<Organisations_Bool_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "forms" */
export enum Forms_Constraint {
  /** unique or primary key constraint */
  FormsIdKey = 'forms_id_key',
  /** unique or primary key constraint */
  FormsPkey = 'forms_pkey'
}

/** input type for inserting data into table "forms" */
export type Forms_Insert_Input = {
  answers?: Maybe<Form_Answers_Arr_Rel_Insert_Input>;
  blueprint?: Maybe<Form_Blueprints_Obj_Rel_Insert_Input>;
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Organisations_Obj_Rel_Insert_Input>;
  organisation_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Forms_Max_Fields = {
  __typename?: 'forms_max_fields';
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organisation_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "forms" */
export type Forms_Max_Order_By = {
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Forms_Min_Fields = {
  __typename?: 'forms_min_fields';
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organisation_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "forms" */
export type Forms_Min_Order_By = {
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "forms" */
export type Forms_Mutation_Response = {
  __typename?: 'forms_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Forms>;
};

/** input type for inserting object relation for remote table "forms" */
export type Forms_Obj_Rel_Insert_Input = {
  data: Forms_Insert_Input;
  on_conflict?: Maybe<Forms_On_Conflict>;
};

/** on conflict condition type for table "forms" */
export type Forms_On_Conflict = {
  constraint: Forms_Constraint;
  update_columns: Array<Forms_Update_Column>;
  where?: Maybe<Forms_Bool_Exp>;
};

/** ordering options when selecting data from "forms" */
export type Forms_Order_By = {
  answers_aggregate?: Maybe<Form_Answers_Aggregate_Order_By>;
  blueprint?: Maybe<Form_Blueprints_Order_By>;
  form_blueprint_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisation?: Maybe<Organisations_Order_By>;
  organisation_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "forms" */
export type Forms_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "forms" */
export enum Forms_Select_Column {
  /** column name */
  FormBlueprintId = 'form_blueprint_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganisationId = 'organisation_id'
}

/** input type for updating data in table "forms" */
export type Forms_Set_Input = {
  form_blueprint_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organisation_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "forms" */
export enum Forms_Update_Column {
  /** column name */
  FormBlueprintId = 'form_blueprint_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganisationId = 'organisation_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "balls" */
  delete_balls?: Maybe<Balls_Mutation_Response>;
  /** delete single row from the table: "balls" */
  delete_balls_by_pk?: Maybe<Balls>;
  /** delete data from the table: "collaboration_users" */
  delete_collaboration_users?: Maybe<Collaboration_Users_Mutation_Response>;
  /** delete single row from the table: "collaboration_users" */
  delete_collaboration_users_by_pk?: Maybe<Collaboration_Users>;
  /** delete data from the table: "collaborations" */
  delete_collaborations?: Maybe<Collaborations_Mutation_Response>;
  /** delete single row from the table: "collaborations" */
  delete_collaborations_by_pk?: Maybe<Collaborations>;
  /** delete data from the table: "config" */
  delete_config?: Maybe<Config_Mutation_Response>;
  /** delete single row from the table: "config" */
  delete_config_by_pk?: Maybe<Config>;
  /** delete data from the table: "form_answers" */
  delete_form_answers?: Maybe<Form_Answers_Mutation_Response>;
  /** delete single row from the table: "form_answers" */
  delete_form_answers_by_pk?: Maybe<Form_Answers>;
  /** delete data from the table: "form_blueprints" */
  delete_form_blueprints?: Maybe<Form_Blueprints_Mutation_Response>;
  /** delete single row from the table: "form_blueprints" */
  delete_form_blueprints_by_pk?: Maybe<Form_Blueprints>;
  /** delete data from the table: "form_categories" */
  delete_form_categories?: Maybe<Form_Categories_Mutation_Response>;
  /** delete single row from the table: "form_categories" */
  delete_form_categories_by_pk?: Maybe<Form_Categories>;
  /** delete data from the table: "form_compound_questions" */
  delete_form_compound_questions?: Maybe<Form_Compound_Questions_Mutation_Response>;
  /** delete single row from the table: "form_compound_questions" */
  delete_form_compound_questions_by_pk?: Maybe<Form_Compound_Questions>;
  /** delete data from the table: "form_default_list_options" */
  delete_form_default_list_options?: Maybe<Form_Default_List_Options_Mutation_Response>;
  /** delete single row from the table: "form_default_list_options" */
  delete_form_default_list_options_by_pk?: Maybe<Form_Default_List_Options>;
  /** delete data from the table: "form_default_lists" */
  delete_form_default_lists?: Maybe<Form_Default_Lists_Mutation_Response>;
  /** delete single row from the table: "form_default_lists" */
  delete_form_default_lists_by_pk?: Maybe<Form_Default_Lists>;
  /** delete data from the table: "form_question_list_options" */
  delete_form_question_list_options?: Maybe<Form_Question_List_Options_Mutation_Response>;
  /** delete single row from the table: "form_question_list_options" */
  delete_form_question_list_options_by_pk?: Maybe<Form_Question_List_Options>;
  /** delete data from the table: "form_question_list_types" */
  delete_form_question_list_types?: Maybe<Form_Question_List_Types_Mutation_Response>;
  /** delete single row from the table: "form_question_list_types" */
  delete_form_question_list_types_by_pk?: Maybe<Form_Question_List_Types>;
  /** delete data from the table: "form_question_lists" */
  delete_form_question_lists?: Maybe<Form_Question_Lists_Mutation_Response>;
  /** delete single row from the table: "form_question_lists" */
  delete_form_question_lists_by_pk?: Maybe<Form_Question_Lists>;
  /** delete data from the table: "form_question_types" */
  delete_form_question_types?: Maybe<Form_Question_Types_Mutation_Response>;
  /** delete single row from the table: "form_question_types" */
  delete_form_question_types_by_pk?: Maybe<Form_Question_Types>;
  /** delete data from the table: "form_questions" */
  delete_form_questions?: Maybe<Form_Questions_Mutation_Response>;
  /** delete single row from the table: "form_questions" */
  delete_form_questions_by_pk?: Maybe<Form_Questions>;
  /** delete data from the table: "forms" */
  delete_forms?: Maybe<Forms_Mutation_Response>;
  /** delete single row from the table: "forms" */
  delete_forms_by_pk?: Maybe<Forms>;
  /** delete data from the table: "organisation_users" */
  delete_organisation_users?: Maybe<Organisation_Users_Mutation_Response>;
  /** delete single row from the table: "organisation_users" */
  delete_organisation_users_by_pk?: Maybe<Organisation_Users>;
  /** delete data from the table: "organisations" */
  delete_organisations?: Maybe<Organisations_Mutation_Response>;
  /** delete single row from the table: "organisations" */
  delete_organisations_by_pk?: Maybe<Organisations>;
  /** delete data from the table: "problems" */
  delete_problems?: Maybe<Problems_Mutation_Response>;
  /** delete single row from the table: "problems" */
  delete_problems_by_pk?: Maybe<Problems>;
  /** delete data from the table: "questionnaire_answers" */
  delete_questionnaire_answers?: Maybe<Questionnaire_Answers_Mutation_Response>;
  /** delete single row from the table: "questionnaire_answers" */
  delete_questionnaire_answers_by_pk?: Maybe<Questionnaire_Answers>;
  /** delete data from the table: "questionnaire_categories" */
  delete_questionnaire_categories?: Maybe<Questionnaire_Categories_Mutation_Response>;
  /** delete single row from the table: "questionnaire_categories" */
  delete_questionnaire_categories_by_pk?: Maybe<Questionnaire_Categories>;
  /** delete data from the table: "questionnaire_question_parts" */
  delete_questionnaire_question_parts?: Maybe<Questionnaire_Question_Parts_Mutation_Response>;
  /** delete single row from the table: "questionnaire_question_parts" */
  delete_questionnaire_question_parts_by_pk?: Maybe<Questionnaire_Question_Parts>;
  /** delete data from the table: "questionnaire_questions" */
  delete_questionnaire_questions?: Maybe<Questionnaire_Questions_Mutation_Response>;
  /** delete single row from the table: "questionnaire_questions" */
  delete_questionnaire_questions_by_pk?: Maybe<Questionnaire_Questions>;
  /** delete data from the table: "questionnaire_runs" */
  delete_questionnaire_runs?: Maybe<Questionnaire_Runs_Mutation_Response>;
  /** delete single row from the table: "questionnaire_runs" */
  delete_questionnaire_runs_by_pk?: Maybe<Questionnaire_Runs>;
  /** delete data from the table: "questionnaire_users" */
  delete_questionnaire_users?: Maybe<Questionnaire_Users_Mutation_Response>;
  /** delete single row from the table: "questionnaire_users" */
  delete_questionnaire_users_by_pk?: Maybe<Questionnaire_Users>;
  /** delete data from the table: "questionnaires" */
  delete_questionnaires?: Maybe<Questionnaires_Mutation_Response>;
  /** delete single row from the table: "questionnaires" */
  delete_questionnaires_by_pk?: Maybe<Questionnaires>;
  /** delete data from the table: "stuff" */
  delete_stuff?: Maybe<Stuff_Mutation_Response>;
  /** delete single row from the table: "stuff" */
  delete_stuff_by_pk?: Maybe<Stuff>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** delete data from the table: "zeurder" */
  delete_zeurder?: Maybe<Zeurder_Mutation_Response>;
  /** delete single row from the table: "zeurder" */
  delete_zeurder_by_pk?: Maybe<Zeurder>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "balls" */
  insert_balls?: Maybe<Balls_Mutation_Response>;
  /** insert a single row into the table: "balls" */
  insert_balls_one?: Maybe<Balls>;
  /** insert data into the table: "collaboration_users" */
  insert_collaboration_users?: Maybe<Collaboration_Users_Mutation_Response>;
  /** insert a single row into the table: "collaboration_users" */
  insert_collaboration_users_one?: Maybe<Collaboration_Users>;
  /** insert data into the table: "collaborations" */
  insert_collaborations?: Maybe<Collaborations_Mutation_Response>;
  /** insert a single row into the table: "collaborations" */
  insert_collaborations_one?: Maybe<Collaborations>;
  /** insert data into the table: "config" */
  insert_config?: Maybe<Config_Mutation_Response>;
  /** insert a single row into the table: "config" */
  insert_config_one?: Maybe<Config>;
  /** insert data into the table: "form_answers" */
  insert_form_answers?: Maybe<Form_Answers_Mutation_Response>;
  /** insert a single row into the table: "form_answers" */
  insert_form_answers_one?: Maybe<Form_Answers>;
  /** insert data into the table: "form_blueprints" */
  insert_form_blueprints?: Maybe<Form_Blueprints_Mutation_Response>;
  /** insert a single row into the table: "form_blueprints" */
  insert_form_blueprints_one?: Maybe<Form_Blueprints>;
  /** insert data into the table: "form_categories" */
  insert_form_categories?: Maybe<Form_Categories_Mutation_Response>;
  /** insert a single row into the table: "form_categories" */
  insert_form_categories_one?: Maybe<Form_Categories>;
  /** insert data into the table: "form_compound_questions" */
  insert_form_compound_questions?: Maybe<Form_Compound_Questions_Mutation_Response>;
  /** insert a single row into the table: "form_compound_questions" */
  insert_form_compound_questions_one?: Maybe<Form_Compound_Questions>;
  /** insert data into the table: "form_default_list_options" */
  insert_form_default_list_options?: Maybe<Form_Default_List_Options_Mutation_Response>;
  /** insert a single row into the table: "form_default_list_options" */
  insert_form_default_list_options_one?: Maybe<Form_Default_List_Options>;
  /** insert data into the table: "form_default_lists" */
  insert_form_default_lists?: Maybe<Form_Default_Lists_Mutation_Response>;
  /** insert a single row into the table: "form_default_lists" */
  insert_form_default_lists_one?: Maybe<Form_Default_Lists>;
  /** insert data into the table: "form_question_list_options" */
  insert_form_question_list_options?: Maybe<Form_Question_List_Options_Mutation_Response>;
  /** insert a single row into the table: "form_question_list_options" */
  insert_form_question_list_options_one?: Maybe<Form_Question_List_Options>;
  /** insert data into the table: "form_question_list_types" */
  insert_form_question_list_types?: Maybe<Form_Question_List_Types_Mutation_Response>;
  /** insert a single row into the table: "form_question_list_types" */
  insert_form_question_list_types_one?: Maybe<Form_Question_List_Types>;
  /** insert data into the table: "form_question_lists" */
  insert_form_question_lists?: Maybe<Form_Question_Lists_Mutation_Response>;
  /** insert a single row into the table: "form_question_lists" */
  insert_form_question_lists_one?: Maybe<Form_Question_Lists>;
  /** insert data into the table: "form_question_types" */
  insert_form_question_types?: Maybe<Form_Question_Types_Mutation_Response>;
  /** insert a single row into the table: "form_question_types" */
  insert_form_question_types_one?: Maybe<Form_Question_Types>;
  /** insert data into the table: "form_questions" */
  insert_form_questions?: Maybe<Form_Questions_Mutation_Response>;
  /** insert a single row into the table: "form_questions" */
  insert_form_questions_one?: Maybe<Form_Questions>;
  /** insert data into the table: "forms" */
  insert_forms?: Maybe<Forms_Mutation_Response>;
  /** insert a single row into the table: "forms" */
  insert_forms_one?: Maybe<Forms>;
  /** insert data into the table: "organisation_users" */
  insert_organisation_users?: Maybe<Organisation_Users_Mutation_Response>;
  /** insert a single row into the table: "organisation_users" */
  insert_organisation_users_one?: Maybe<Organisation_Users>;
  /** insert data into the table: "organisations" */
  insert_organisations?: Maybe<Organisations_Mutation_Response>;
  /** insert a single row into the table: "organisations" */
  insert_organisations_one?: Maybe<Organisations>;
  /** insert data into the table: "problems" */
  insert_problems?: Maybe<Problems_Mutation_Response>;
  /** insert a single row into the table: "problems" */
  insert_problems_one?: Maybe<Problems>;
  /** insert data into the table: "questionnaire_answers" */
  insert_questionnaire_answers?: Maybe<Questionnaire_Answers_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_answers" */
  insert_questionnaire_answers_one?: Maybe<Questionnaire_Answers>;
  /** insert data into the table: "questionnaire_categories" */
  insert_questionnaire_categories?: Maybe<Questionnaire_Categories_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_categories" */
  insert_questionnaire_categories_one?: Maybe<Questionnaire_Categories>;
  /** insert data into the table: "questionnaire_question_parts" */
  insert_questionnaire_question_parts?: Maybe<Questionnaire_Question_Parts_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_question_parts" */
  insert_questionnaire_question_parts_one?: Maybe<Questionnaire_Question_Parts>;
  /** insert data into the table: "questionnaire_questions" */
  insert_questionnaire_questions?: Maybe<Questionnaire_Questions_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_questions" */
  insert_questionnaire_questions_one?: Maybe<Questionnaire_Questions>;
  /** insert data into the table: "questionnaire_runs" */
  insert_questionnaire_runs?: Maybe<Questionnaire_Runs_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_runs" */
  insert_questionnaire_runs_one?: Maybe<Questionnaire_Runs>;
  /** insert data into the table: "questionnaire_users" */
  insert_questionnaire_users?: Maybe<Questionnaire_Users_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_users" */
  insert_questionnaire_users_one?: Maybe<Questionnaire_Users>;
  /** insert data into the table: "questionnaires" */
  insert_questionnaires?: Maybe<Questionnaires_Mutation_Response>;
  /** insert a single row into the table: "questionnaires" */
  insert_questionnaires_one?: Maybe<Questionnaires>;
  /** insert data into the table: "stuff" */
  insert_stuff?: Maybe<Stuff_Mutation_Response>;
  /** insert a single row into the table: "stuff" */
  insert_stuff_one?: Maybe<Stuff>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** insert data into the table: "zeurder" */
  insert_zeurder?: Maybe<Zeurder_Mutation_Response>;
  /** insert a single row into the table: "zeurder" */
  insert_zeurder_one?: Maybe<Zeurder>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "balls" */
  update_balls?: Maybe<Balls_Mutation_Response>;
  /** update single row of the table: "balls" */
  update_balls_by_pk?: Maybe<Balls>;
  /** update data of the table: "collaboration_users" */
  update_collaboration_users?: Maybe<Collaboration_Users_Mutation_Response>;
  /** update single row of the table: "collaboration_users" */
  update_collaboration_users_by_pk?: Maybe<Collaboration_Users>;
  /** update data of the table: "collaborations" */
  update_collaborations?: Maybe<Collaborations_Mutation_Response>;
  /** update single row of the table: "collaborations" */
  update_collaborations_by_pk?: Maybe<Collaborations>;
  /** update data of the table: "config" */
  update_config?: Maybe<Config_Mutation_Response>;
  /** update single row of the table: "config" */
  update_config_by_pk?: Maybe<Config>;
  /** update data of the table: "form_answers" */
  update_form_answers?: Maybe<Form_Answers_Mutation_Response>;
  /** update single row of the table: "form_answers" */
  update_form_answers_by_pk?: Maybe<Form_Answers>;
  /** update data of the table: "form_blueprints" */
  update_form_blueprints?: Maybe<Form_Blueprints_Mutation_Response>;
  /** update single row of the table: "form_blueprints" */
  update_form_blueprints_by_pk?: Maybe<Form_Blueprints>;
  /** update data of the table: "form_categories" */
  update_form_categories?: Maybe<Form_Categories_Mutation_Response>;
  /** update single row of the table: "form_categories" */
  update_form_categories_by_pk?: Maybe<Form_Categories>;
  /** update data of the table: "form_compound_questions" */
  update_form_compound_questions?: Maybe<Form_Compound_Questions_Mutation_Response>;
  /** update single row of the table: "form_compound_questions" */
  update_form_compound_questions_by_pk?: Maybe<Form_Compound_Questions>;
  /** update data of the table: "form_default_list_options" */
  update_form_default_list_options?: Maybe<Form_Default_List_Options_Mutation_Response>;
  /** update single row of the table: "form_default_list_options" */
  update_form_default_list_options_by_pk?: Maybe<Form_Default_List_Options>;
  /** update data of the table: "form_default_lists" */
  update_form_default_lists?: Maybe<Form_Default_Lists_Mutation_Response>;
  /** update single row of the table: "form_default_lists" */
  update_form_default_lists_by_pk?: Maybe<Form_Default_Lists>;
  /** update data of the table: "form_question_list_options" */
  update_form_question_list_options?: Maybe<Form_Question_List_Options_Mutation_Response>;
  /** update single row of the table: "form_question_list_options" */
  update_form_question_list_options_by_pk?: Maybe<Form_Question_List_Options>;
  /** update data of the table: "form_question_list_types" */
  update_form_question_list_types?: Maybe<Form_Question_List_Types_Mutation_Response>;
  /** update single row of the table: "form_question_list_types" */
  update_form_question_list_types_by_pk?: Maybe<Form_Question_List_Types>;
  /** update data of the table: "form_question_lists" */
  update_form_question_lists?: Maybe<Form_Question_Lists_Mutation_Response>;
  /** update single row of the table: "form_question_lists" */
  update_form_question_lists_by_pk?: Maybe<Form_Question_Lists>;
  /** update data of the table: "form_question_types" */
  update_form_question_types?: Maybe<Form_Question_Types_Mutation_Response>;
  /** update single row of the table: "form_question_types" */
  update_form_question_types_by_pk?: Maybe<Form_Question_Types>;
  /** update data of the table: "form_questions" */
  update_form_questions?: Maybe<Form_Questions_Mutation_Response>;
  /** update single row of the table: "form_questions" */
  update_form_questions_by_pk?: Maybe<Form_Questions>;
  /** update data of the table: "forms" */
  update_forms?: Maybe<Forms_Mutation_Response>;
  /** update single row of the table: "forms" */
  update_forms_by_pk?: Maybe<Forms>;
  /** update data of the table: "organisation_users" */
  update_organisation_users?: Maybe<Organisation_Users_Mutation_Response>;
  /** update single row of the table: "organisation_users" */
  update_organisation_users_by_pk?: Maybe<Organisation_Users>;
  /** update data of the table: "organisations" */
  update_organisations?: Maybe<Organisations_Mutation_Response>;
  /** update single row of the table: "organisations" */
  update_organisations_by_pk?: Maybe<Organisations>;
  /** update data of the table: "problems" */
  update_problems?: Maybe<Problems_Mutation_Response>;
  /** update single row of the table: "problems" */
  update_problems_by_pk?: Maybe<Problems>;
  /** update data of the table: "questionnaire_answers" */
  update_questionnaire_answers?: Maybe<Questionnaire_Answers_Mutation_Response>;
  /** update single row of the table: "questionnaire_answers" */
  update_questionnaire_answers_by_pk?: Maybe<Questionnaire_Answers>;
  /** update data of the table: "questionnaire_categories" */
  update_questionnaire_categories?: Maybe<Questionnaire_Categories_Mutation_Response>;
  /** update single row of the table: "questionnaire_categories" */
  update_questionnaire_categories_by_pk?: Maybe<Questionnaire_Categories>;
  /** update data of the table: "questionnaire_question_parts" */
  update_questionnaire_question_parts?: Maybe<Questionnaire_Question_Parts_Mutation_Response>;
  /** update single row of the table: "questionnaire_question_parts" */
  update_questionnaire_question_parts_by_pk?: Maybe<Questionnaire_Question_Parts>;
  /** update data of the table: "questionnaire_questions" */
  update_questionnaire_questions?: Maybe<Questionnaire_Questions_Mutation_Response>;
  /** update single row of the table: "questionnaire_questions" */
  update_questionnaire_questions_by_pk?: Maybe<Questionnaire_Questions>;
  /** update data of the table: "questionnaire_runs" */
  update_questionnaire_runs?: Maybe<Questionnaire_Runs_Mutation_Response>;
  /** update single row of the table: "questionnaire_runs" */
  update_questionnaire_runs_by_pk?: Maybe<Questionnaire_Runs>;
  /** update data of the table: "questionnaire_users" */
  update_questionnaire_users?: Maybe<Questionnaire_Users_Mutation_Response>;
  /** update single row of the table: "questionnaire_users" */
  update_questionnaire_users_by_pk?: Maybe<Questionnaire_Users>;
  /** update data of the table: "questionnaires" */
  update_questionnaires?: Maybe<Questionnaires_Mutation_Response>;
  /** update single row of the table: "questionnaires" */
  update_questionnaires_by_pk?: Maybe<Questionnaires>;
  /** update data of the table: "stuff" */
  update_stuff?: Maybe<Stuff_Mutation_Response>;
  /** update single row of the table: "stuff" */
  update_stuff_by_pk?: Maybe<Stuff>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** update data of the table: "zeurder" */
  update_zeurder?: Maybe<Zeurder_Mutation_Response>;
  /** update single row of the table: "zeurder" */
  update_zeurder_by_pk?: Maybe<Zeurder>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BallsArgs = {
  where: Balls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Balls_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Collaboration_UsersArgs = {
  where: Collaboration_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collaboration_Users_By_PkArgs = {
  collaboration_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CollaborationsArgs = {
  where: Collaborations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collaborations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ConfigArgs = {
  where: Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Config_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Form_AnswersArgs = {
  where: Form_Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Answers_By_PkArgs = {
  form_id: Scalars['uuid'];
  form_question_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_BlueprintsArgs = {
  where: Form_Blueprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Blueprints_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_CategoriesArgs = {
  where: Form_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Compound_QuestionsArgs = {
  where: Form_Compound_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Compound_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Default_List_OptionsArgs = {
  where: Form_Default_List_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Default_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Default_ListsArgs = {
  where: Form_Default_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Default_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_List_OptionsArgs = {
  where: Form_Question_List_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_List_TypesArgs = {
  where: Form_Question_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_List_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_ListsArgs = {
  where: Form_Question_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_TypesArgs = {
  where: Form_Question_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Question_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Form_QuestionsArgs = {
  where: Form_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FormsArgs = {
  where: Forms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Forms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Organisation_UsersArgs = {
  where: Organisation_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisation_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrganisationsArgs = {
  where: Organisations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProblemsArgs = {
  where: Problems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Problems_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_AnswersArgs = {
  where: Questionnaire_Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Answers_By_PkArgs = {
  question_part_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_CategoriesArgs = {
  where: Questionnaire_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Categories_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Question_PartsArgs = {
  where: Questionnaire_Question_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Question_Parts_By_PkArgs = {
  question_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_QuestionsArgs = {
  where: Questionnaire_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Questions_By_PkArgs = {
  questionnaire_category_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_RunsArgs = {
  where: Questionnaire_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Runs_By_PkArgs = {
  id: Scalars['Int'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_UsersArgs = {
  where: Questionnaire_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_Users_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionnairesArgs = {
  where: Questionnaires_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaires_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StuffArgs = {
  where: Stuff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stuff_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ZeurderArgs = {
  where: Zeurder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Zeurder_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BallsArgs = {
  objects: Array<Balls_Insert_Input>;
  on_conflict?: Maybe<Balls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Balls_OneArgs = {
  object: Balls_Insert_Input;
  on_conflict?: Maybe<Balls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collaboration_UsersArgs = {
  objects: Array<Collaboration_Users_Insert_Input>;
  on_conflict?: Maybe<Collaboration_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collaboration_Users_OneArgs = {
  object: Collaboration_Users_Insert_Input;
  on_conflict?: Maybe<Collaboration_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollaborationsArgs = {
  objects: Array<Collaborations_Insert_Input>;
  on_conflict?: Maybe<Collaborations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collaborations_OneArgs = {
  object: Collaborations_Insert_Input;
  on_conflict?: Maybe<Collaborations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConfigArgs = {
  objects: Array<Config_Insert_Input>;
  on_conflict?: Maybe<Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Config_OneArgs = {
  object: Config_Insert_Input;
  on_conflict?: Maybe<Config_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_AnswersArgs = {
  objects: Array<Form_Answers_Insert_Input>;
  on_conflict?: Maybe<Form_Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Answers_OneArgs = {
  object: Form_Answers_Insert_Input;
  on_conflict?: Maybe<Form_Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_BlueprintsArgs = {
  objects: Array<Form_Blueprints_Insert_Input>;
  on_conflict?: Maybe<Form_Blueprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Blueprints_OneArgs = {
  object: Form_Blueprints_Insert_Input;
  on_conflict?: Maybe<Form_Blueprints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_CategoriesArgs = {
  objects: Array<Form_Categories_Insert_Input>;
  on_conflict?: Maybe<Form_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Categories_OneArgs = {
  object: Form_Categories_Insert_Input;
  on_conflict?: Maybe<Form_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Compound_QuestionsArgs = {
  objects: Array<Form_Compound_Questions_Insert_Input>;
  on_conflict?: Maybe<Form_Compound_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Compound_Questions_OneArgs = {
  object: Form_Compound_Questions_Insert_Input;
  on_conflict?: Maybe<Form_Compound_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Default_List_OptionsArgs = {
  objects: Array<Form_Default_List_Options_Insert_Input>;
  on_conflict?: Maybe<Form_Default_List_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Default_List_Options_OneArgs = {
  object: Form_Default_List_Options_Insert_Input;
  on_conflict?: Maybe<Form_Default_List_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Default_ListsArgs = {
  objects: Array<Form_Default_Lists_Insert_Input>;
  on_conflict?: Maybe<Form_Default_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Default_Lists_OneArgs = {
  object: Form_Default_Lists_Insert_Input;
  on_conflict?: Maybe<Form_Default_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_List_OptionsArgs = {
  objects: Array<Form_Question_List_Options_Insert_Input>;
  on_conflict?: Maybe<Form_Question_List_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_List_Options_OneArgs = {
  object: Form_Question_List_Options_Insert_Input;
  on_conflict?: Maybe<Form_Question_List_Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_List_TypesArgs = {
  objects: Array<Form_Question_List_Types_Insert_Input>;
  on_conflict?: Maybe<Form_Question_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_List_Types_OneArgs = {
  object: Form_Question_List_Types_Insert_Input;
  on_conflict?: Maybe<Form_Question_List_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_ListsArgs = {
  objects: Array<Form_Question_Lists_Insert_Input>;
  on_conflict?: Maybe<Form_Question_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_Lists_OneArgs = {
  object: Form_Question_Lists_Insert_Input;
  on_conflict?: Maybe<Form_Question_Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_TypesArgs = {
  objects: Array<Form_Question_Types_Insert_Input>;
  on_conflict?: Maybe<Form_Question_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Question_Types_OneArgs = {
  object: Form_Question_Types_Insert_Input;
  on_conflict?: Maybe<Form_Question_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_QuestionsArgs = {
  objects: Array<Form_Questions_Insert_Input>;
  on_conflict?: Maybe<Form_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Questions_OneArgs = {
  object: Form_Questions_Insert_Input;
  on_conflict?: Maybe<Form_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FormsArgs = {
  objects: Array<Forms_Insert_Input>;
  on_conflict?: Maybe<Forms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Forms_OneArgs = {
  object: Forms_Insert_Input;
  on_conflict?: Maybe<Forms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisation_UsersArgs = {
  objects: Array<Organisation_Users_Insert_Input>;
  on_conflict?: Maybe<Organisation_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisation_Users_OneArgs = {
  object: Organisation_Users_Insert_Input;
  on_conflict?: Maybe<Organisation_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganisationsArgs = {
  objects: Array<Organisations_Insert_Input>;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisations_OneArgs = {
  object: Organisations_Insert_Input;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProblemsArgs = {
  objects: Array<Problems_Insert_Input>;
  on_conflict?: Maybe<Problems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Problems_OneArgs = {
  object: Problems_Insert_Input;
  on_conflict?: Maybe<Problems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_AnswersArgs = {
  objects: Array<Questionnaire_Answers_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Answers_OneArgs = {
  object: Questionnaire_Answers_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_CategoriesArgs = {
  objects: Array<Questionnaire_Categories_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Categories_OneArgs = {
  object: Questionnaire_Categories_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Question_PartsArgs = {
  objects: Array<Questionnaire_Question_Parts_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Question_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Question_Parts_OneArgs = {
  object: Questionnaire_Question_Parts_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Question_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_QuestionsArgs = {
  objects: Array<Questionnaire_Questions_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Questions_OneArgs = {
  object: Questionnaire_Questions_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_RunsArgs = {
  objects: Array<Questionnaire_Runs_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Runs_OneArgs = {
  object: Questionnaire_Runs_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_UsersArgs = {
  objects: Array<Questionnaire_Users_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Users_OneArgs = {
  object: Questionnaire_Users_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionnairesArgs = {
  objects: Array<Questionnaires_Insert_Input>;
  on_conflict?: Maybe<Questionnaires_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaires_OneArgs = {
  object: Questionnaires_Insert_Input;
  on_conflict?: Maybe<Questionnaires_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StuffArgs = {
  objects: Array<Stuff_Insert_Input>;
  on_conflict?: Maybe<Stuff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stuff_OneArgs = {
  object: Stuff_Insert_Input;
  on_conflict?: Maybe<Stuff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ZeurderArgs = {
  objects: Array<Zeurder_Insert_Input>;
  on_conflict?: Maybe<Zeurder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Zeurder_OneArgs = {
  object: Zeurder_Insert_Input;
  on_conflict?: Maybe<Zeurder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BallsArgs = {
  _inc?: Maybe<Balls_Inc_Input>;
  _set?: Maybe<Balls_Set_Input>;
  where: Balls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Balls_By_PkArgs = {
  _inc?: Maybe<Balls_Inc_Input>;
  _set?: Maybe<Balls_Set_Input>;
  pk_columns: Balls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collaboration_UsersArgs = {
  _set?: Maybe<Collaboration_Users_Set_Input>;
  where: Collaboration_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collaboration_Users_By_PkArgs = {
  _set?: Maybe<Collaboration_Users_Set_Input>;
  pk_columns: Collaboration_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CollaborationsArgs = {
  _set?: Maybe<Collaborations_Set_Input>;
  where: Collaborations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collaborations_By_PkArgs = {
  _set?: Maybe<Collaborations_Set_Input>;
  pk_columns: Collaborations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigArgs = {
  _inc?: Maybe<Config_Inc_Input>;
  _set?: Maybe<Config_Set_Input>;
  where: Config_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Config_By_PkArgs = {
  _inc?: Maybe<Config_Inc_Input>;
  _set?: Maybe<Config_Set_Input>;
  pk_columns: Config_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_AnswersArgs = {
  _set?: Maybe<Form_Answers_Set_Input>;
  where: Form_Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Answers_By_PkArgs = {
  _set?: Maybe<Form_Answers_Set_Input>;
  pk_columns: Form_Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_BlueprintsArgs = {
  _set?: Maybe<Form_Blueprints_Set_Input>;
  where: Form_Blueprints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Blueprints_By_PkArgs = {
  _set?: Maybe<Form_Blueprints_Set_Input>;
  pk_columns: Form_Blueprints_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_CategoriesArgs = {
  _inc?: Maybe<Form_Categories_Inc_Input>;
  _set?: Maybe<Form_Categories_Set_Input>;
  where: Form_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Categories_By_PkArgs = {
  _inc?: Maybe<Form_Categories_Inc_Input>;
  _set?: Maybe<Form_Categories_Set_Input>;
  pk_columns: Form_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Compound_QuestionsArgs = {
  _inc?: Maybe<Form_Compound_Questions_Inc_Input>;
  _set?: Maybe<Form_Compound_Questions_Set_Input>;
  where: Form_Compound_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Compound_Questions_By_PkArgs = {
  _inc?: Maybe<Form_Compound_Questions_Inc_Input>;
  _set?: Maybe<Form_Compound_Questions_Set_Input>;
  pk_columns: Form_Compound_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Default_List_OptionsArgs = {
  _set?: Maybe<Form_Default_List_Options_Set_Input>;
  where: Form_Default_List_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Default_List_Options_By_PkArgs = {
  _set?: Maybe<Form_Default_List_Options_Set_Input>;
  pk_columns: Form_Default_List_Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Default_ListsArgs = {
  _set?: Maybe<Form_Default_Lists_Set_Input>;
  where: Form_Default_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Default_Lists_By_PkArgs = {
  _set?: Maybe<Form_Default_Lists_Set_Input>;
  pk_columns: Form_Default_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_List_OptionsArgs = {
  _inc?: Maybe<Form_Question_List_Options_Inc_Input>;
  _set?: Maybe<Form_Question_List_Options_Set_Input>;
  where: Form_Question_List_Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_List_Options_By_PkArgs = {
  _inc?: Maybe<Form_Question_List_Options_Inc_Input>;
  _set?: Maybe<Form_Question_List_Options_Set_Input>;
  pk_columns: Form_Question_List_Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_List_TypesArgs = {
  _set?: Maybe<Form_Question_List_Types_Set_Input>;
  where: Form_Question_List_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_List_Types_By_PkArgs = {
  _set?: Maybe<Form_Question_List_Types_Set_Input>;
  pk_columns: Form_Question_List_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_ListsArgs = {
  _set?: Maybe<Form_Question_Lists_Set_Input>;
  where: Form_Question_Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_Lists_By_PkArgs = {
  _set?: Maybe<Form_Question_Lists_Set_Input>;
  pk_columns: Form_Question_Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_TypesArgs = {
  _inc?: Maybe<Form_Question_Types_Inc_Input>;
  _set?: Maybe<Form_Question_Types_Set_Input>;
  where: Form_Question_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Question_Types_By_PkArgs = {
  _inc?: Maybe<Form_Question_Types_Inc_Input>;
  _set?: Maybe<Form_Question_Types_Set_Input>;
  pk_columns: Form_Question_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_QuestionsArgs = {
  _inc?: Maybe<Form_Questions_Inc_Input>;
  _set?: Maybe<Form_Questions_Set_Input>;
  where: Form_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Questions_By_PkArgs = {
  _inc?: Maybe<Form_Questions_Inc_Input>;
  _set?: Maybe<Form_Questions_Set_Input>;
  pk_columns: Form_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FormsArgs = {
  _set?: Maybe<Forms_Set_Input>;
  where: Forms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Forms_By_PkArgs = {
  _set?: Maybe<Forms_Set_Input>;
  pk_columns: Forms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_UsersArgs = {
  _set?: Maybe<Organisation_Users_Set_Input>;
  where: Organisation_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_Users_By_PkArgs = {
  _set?: Maybe<Organisation_Users_Set_Input>;
  pk_columns: Organisation_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganisationsArgs = {
  _set?: Maybe<Organisations_Set_Input>;
  where: Organisations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisations_By_PkArgs = {
  _set?: Maybe<Organisations_Set_Input>;
  pk_columns: Organisations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProblemsArgs = {
  _set?: Maybe<Problems_Set_Input>;
  where: Problems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Problems_By_PkArgs = {
  _set?: Maybe<Problems_Set_Input>;
  pk_columns: Problems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_AnswersArgs = {
  _set?: Maybe<Questionnaire_Answers_Set_Input>;
  where: Questionnaire_Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Answers_By_PkArgs = {
  _set?: Maybe<Questionnaire_Answers_Set_Input>;
  pk_columns: Questionnaire_Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_CategoriesArgs = {
  _inc?: Maybe<Questionnaire_Categories_Inc_Input>;
  _set?: Maybe<Questionnaire_Categories_Set_Input>;
  where: Questionnaire_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Categories_By_PkArgs = {
  _inc?: Maybe<Questionnaire_Categories_Inc_Input>;
  _set?: Maybe<Questionnaire_Categories_Set_Input>;
  pk_columns: Questionnaire_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Question_PartsArgs = {
  _inc?: Maybe<Questionnaire_Question_Parts_Inc_Input>;
  _set?: Maybe<Questionnaire_Question_Parts_Set_Input>;
  where: Questionnaire_Question_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Question_Parts_By_PkArgs = {
  _inc?: Maybe<Questionnaire_Question_Parts_Inc_Input>;
  _set?: Maybe<Questionnaire_Question_Parts_Set_Input>;
  pk_columns: Questionnaire_Question_Parts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_QuestionsArgs = {
  _inc?: Maybe<Questionnaire_Questions_Inc_Input>;
  _set?: Maybe<Questionnaire_Questions_Set_Input>;
  where: Questionnaire_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Questions_By_PkArgs = {
  _inc?: Maybe<Questionnaire_Questions_Inc_Input>;
  _set?: Maybe<Questionnaire_Questions_Set_Input>;
  pk_columns: Questionnaire_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_RunsArgs = {
  _inc?: Maybe<Questionnaire_Runs_Inc_Input>;
  _set?: Maybe<Questionnaire_Runs_Set_Input>;
  where: Questionnaire_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Runs_By_PkArgs = {
  _inc?: Maybe<Questionnaire_Runs_Inc_Input>;
  _set?: Maybe<Questionnaire_Runs_Set_Input>;
  pk_columns: Questionnaire_Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_UsersArgs = {
  _set?: Maybe<Questionnaire_Users_Set_Input>;
  where: Questionnaire_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Users_By_PkArgs = {
  _set?: Maybe<Questionnaire_Users_Set_Input>;
  pk_columns: Questionnaire_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionnairesArgs = {
  _set?: Maybe<Questionnaires_Set_Input>;
  where: Questionnaires_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaires_By_PkArgs = {
  _set?: Maybe<Questionnaires_Set_Input>;
  pk_columns: Questionnaires_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StuffArgs = {
  _inc?: Maybe<Stuff_Inc_Input>;
  _set?: Maybe<Stuff_Set_Input>;
  where: Stuff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stuff_By_PkArgs = {
  _inc?: Maybe<Stuff_Inc_Input>;
  _set?: Maybe<Stuff_Set_Input>;
  pk_columns: Stuff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ZeurderArgs = {
  _set?: Maybe<Zeurder_Set_Input>;
  where: Zeurder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Zeurder_By_PkArgs = {
  _set?: Maybe<Zeurder_Set_Input>;
  pk_columns: Zeurder_Pk_Columns_Input;
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

/** columns and relationships of "organisation_users" */
export type Organisation_Users = {
  __typename?: 'organisation_users';
  axxdmin: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  organisation: Organisations;
  organisationAdmin: Scalars['Boolean'];
  organisation_id: Scalars['uuid'];
  otisAdmin: Scalars['Boolean'];
  otisUser: Scalars['Boolean'];
  qollaborAdmin: Scalars['Boolean'];
  qollaborUser: Scalars['Boolean'];
  questionnaireAdmin: Scalars['Boolean'];
  questionnaireUser: Scalars['Boolean'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "organisation_users" */
export type Organisation_Users_Aggregate = {
  __typename?: 'organisation_users_aggregate';
  aggregate?: Maybe<Organisation_Users_Aggregate_Fields>;
  nodes: Array<Organisation_Users>;
};

/** aggregate fields of "organisation_users" */
export type Organisation_Users_Aggregate_Fields = {
  __typename?: 'organisation_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organisation_Users_Max_Fields>;
  min?: Maybe<Organisation_Users_Min_Fields>;
};


/** aggregate fields of "organisation_users" */
export type Organisation_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisation_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organisation_users" */
export type Organisation_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Organisation_Users_Max_Order_By>;
  min?: Maybe<Organisation_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organisation_users" */
export type Organisation_Users_Arr_Rel_Insert_Input = {
  data: Array<Organisation_Users_Insert_Input>;
  on_conflict?: Maybe<Organisation_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organisation_users". All fields are combined with a logical 'AND'. */
export type Organisation_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisation_Users_Bool_Exp>>>;
  _not?: Maybe<Organisation_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisation_Users_Bool_Exp>>>;
  axxdmin?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  organisation?: Maybe<Organisations_Bool_Exp>;
  organisationAdmin?: Maybe<Boolean_Comparison_Exp>;
  organisation_id?: Maybe<Uuid_Comparison_Exp>;
  otisAdmin?: Maybe<Boolean_Comparison_Exp>;
  otisUser?: Maybe<Boolean_Comparison_Exp>;
  qollaborAdmin?: Maybe<Boolean_Comparison_Exp>;
  qollaborUser?: Maybe<Boolean_Comparison_Exp>;
  questionnaireAdmin?: Maybe<Boolean_Comparison_Exp>;
  questionnaireUser?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organisation_users" */
export enum Organisation_Users_Constraint {
  /** unique or primary key constraint */
  OrganisationUsersPkey = 'organisation_users_pkey'
}

/** input type for inserting data into table "organisation_users" */
export type Organisation_Users_Insert_Input = {
  axxdmin?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  organisation?: Maybe<Organisations_Obj_Rel_Insert_Input>;
  organisationAdmin?: Maybe<Scalars['Boolean']>;
  organisation_id?: Maybe<Scalars['uuid']>;
  otisAdmin?: Maybe<Scalars['Boolean']>;
  otisUser?: Maybe<Scalars['Boolean']>;
  qollaborAdmin?: Maybe<Scalars['Boolean']>;
  qollaborUser?: Maybe<Scalars['Boolean']>;
  questionnaireAdmin?: Maybe<Scalars['Boolean']>;
  questionnaireUser?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Organisation_Users_Max_Fields = {
  __typename?: 'organisation_users_max_fields';
  id?: Maybe<Scalars['uuid']>;
  organisation_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "organisation_users" */
export type Organisation_Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisation_Users_Min_Fields = {
  __typename?: 'organisation_users_min_fields';
  id?: Maybe<Scalars['uuid']>;
  organisation_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "organisation_users" */
export type Organisation_Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisation_users" */
export type Organisation_Users_Mutation_Response = {
  __typename?: 'organisation_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organisation_Users>;
};

/** input type for inserting object relation for remote table "organisation_users" */
export type Organisation_Users_Obj_Rel_Insert_Input = {
  data: Organisation_Users_Insert_Input;
  on_conflict?: Maybe<Organisation_Users_On_Conflict>;
};

/** on conflict condition type for table "organisation_users" */
export type Organisation_Users_On_Conflict = {
  constraint: Organisation_Users_Constraint;
  update_columns: Array<Organisation_Users_Update_Column>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};

/** ordering options when selecting data from "organisation_users" */
export type Organisation_Users_Order_By = {
  axxdmin?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation?: Maybe<Organisations_Order_By>;
  organisationAdmin?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  otisAdmin?: Maybe<Order_By>;
  otisUser?: Maybe<Order_By>;
  qollaborAdmin?: Maybe<Order_By>;
  qollaborUser?: Maybe<Order_By>;
  questionnaireAdmin?: Maybe<Order_By>;
  questionnaireUser?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "organisation_users" */
export type Organisation_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organisation_users" */
export enum Organisation_Users_Select_Column {
  /** column name */
  Axxdmin = 'axxdmin',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationAdmin = 'organisationAdmin',
  /** column name */
  OrganisationId = 'organisation_id',
  /** column name */
  OtisAdmin = 'otisAdmin',
  /** column name */
  OtisUser = 'otisUser',
  /** column name */
  QollaborAdmin = 'qollaborAdmin',
  /** column name */
  QollaborUser = 'qollaborUser',
  /** column name */
  QuestionnaireAdmin = 'questionnaireAdmin',
  /** column name */
  QuestionnaireUser = 'questionnaireUser',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organisation_users" */
export type Organisation_Users_Set_Input = {
  axxdmin?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  organisationAdmin?: Maybe<Scalars['Boolean']>;
  organisation_id?: Maybe<Scalars['uuid']>;
  otisAdmin?: Maybe<Scalars['Boolean']>;
  otisUser?: Maybe<Scalars['Boolean']>;
  qollaborAdmin?: Maybe<Scalars['Boolean']>;
  qollaborUser?: Maybe<Scalars['Boolean']>;
  questionnaireAdmin?: Maybe<Scalars['Boolean']>;
  questionnaireUser?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "organisation_users" */
export enum Organisation_Users_Update_Column {
  /** column name */
  Axxdmin = 'axxdmin',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationAdmin = 'organisationAdmin',
  /** column name */
  OrganisationId = 'organisation_id',
  /** column name */
  OtisAdmin = 'otisAdmin',
  /** column name */
  OtisUser = 'otisUser',
  /** column name */
  QollaborAdmin = 'qollaborAdmin',
  /** column name */
  QollaborUser = 'qollaborUser',
  /** column name */
  QuestionnaireAdmin = 'questionnaireAdmin',
  /** column name */
  QuestionnaireUser = 'questionnaireUser',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "organisations" */
export type Organisations = {
  __typename?: 'organisations';
  /** An array relationship */
  forms: Array<Forms>;
  /** An aggregated array relationship */
  forms_aggregate: Forms_Aggregate;
  hasOtisPlan: Scalars['Boolean'];
  hasQollaborPlan: Scalars['Boolean'];
  hasQuestionnairePlan: Scalars['Boolean'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<Organisation_Users>;
  /** An aggregated array relationship */
  users_aggregate: Organisation_Users_Aggregate;
};


/** columns and relationships of "organisations" */
export type OrganisationsFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** columns and relationships of "organisations" */
export type OrganisationsForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** columns and relationships of "organisations" */
export type OrganisationsUsersArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** columns and relationships of "organisations" */
export type OrganisationsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};

/** aggregated selection of "organisations" */
export type Organisations_Aggregate = {
  __typename?: 'organisations_aggregate';
  aggregate?: Maybe<Organisations_Aggregate_Fields>;
  nodes: Array<Organisations>;
};

/** aggregate fields of "organisations" */
export type Organisations_Aggregate_Fields = {
  __typename?: 'organisations_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organisations_Max_Fields>;
  min?: Maybe<Organisations_Min_Fields>;
};


/** aggregate fields of "organisations" */
export type Organisations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organisations" */
export type Organisations_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Organisations_Max_Order_By>;
  min?: Maybe<Organisations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organisations" */
export type Organisations_Arr_Rel_Insert_Input = {
  data: Array<Organisations_Insert_Input>;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organisations". All fields are combined with a logical 'AND'. */
export type Organisations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisations_Bool_Exp>>>;
  _not?: Maybe<Organisations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisations_Bool_Exp>>>;
  forms?: Maybe<Forms_Bool_Exp>;
  hasOtisPlan?: Maybe<Boolean_Comparison_Exp>;
  hasQollaborPlan?: Maybe<Boolean_Comparison_Exp>;
  hasQuestionnairePlan?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  users?: Maybe<Organisation_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "organisations" */
export enum Organisations_Constraint {
  /** unique or primary key constraint */
  OrganisationsIdKey = 'organisations_id_key',
  /** unique or primary key constraint */
  OrganisationsPkey = 'organisations_pkey'
}

/** input type for inserting data into table "organisations" */
export type Organisations_Insert_Input = {
  forms?: Maybe<Forms_Arr_Rel_Insert_Input>;
  hasOtisPlan?: Maybe<Scalars['Boolean']>;
  hasQollaborPlan?: Maybe<Scalars['Boolean']>;
  hasQuestionnairePlan?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Organisation_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organisations_Max_Fields = {
  __typename?: 'organisations_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "organisations" */
export type Organisations_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisations_Min_Fields = {
  __typename?: 'organisations_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "organisations" */
export type Organisations_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisations" */
export type Organisations_Mutation_Response = {
  __typename?: 'organisations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organisations>;
};

/** input type for inserting object relation for remote table "organisations" */
export type Organisations_Obj_Rel_Insert_Input = {
  data: Organisations_Insert_Input;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};

/** on conflict condition type for table "organisations" */
export type Organisations_On_Conflict = {
  constraint: Organisations_Constraint;
  update_columns: Array<Organisations_Update_Column>;
  where?: Maybe<Organisations_Bool_Exp>;
};

/** ordering options when selecting data from "organisations" */
export type Organisations_Order_By = {
  forms_aggregate?: Maybe<Forms_Aggregate_Order_By>;
  hasOtisPlan?: Maybe<Order_By>;
  hasQollaborPlan?: Maybe<Order_By>;
  hasQuestionnairePlan?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  users_aggregate?: Maybe<Organisation_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "organisations" */
export type Organisations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organisations" */
export enum Organisations_Select_Column {
  /** column name */
  HasOtisPlan = 'hasOtisPlan',
  /** column name */
  HasQollaborPlan = 'hasQollaborPlan',
  /** column name */
  HasQuestionnairePlan = 'hasQuestionnairePlan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "organisations" */
export type Organisations_Set_Input = {
  hasOtisPlan?: Maybe<Scalars['Boolean']>;
  hasQollaborPlan?: Maybe<Scalars['Boolean']>;
  hasQuestionnairePlan?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "organisations" */
export enum Organisations_Update_Column {
  /** column name */
  HasOtisPlan = 'hasOtisPlan',
  /** column name */
  HasQollaborPlan = 'hasQollaborPlan',
  /** column name */
  HasQuestionnairePlan = 'hasQuestionnairePlan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "problems" */
export type Problems = {
  __typename?: 'problems';
  id: Scalars['uuid'];
  name: Scalars['String'];
  nature: Scalars['String'];
};

/** aggregated selection of "problems" */
export type Problems_Aggregate = {
  __typename?: 'problems_aggregate';
  aggregate?: Maybe<Problems_Aggregate_Fields>;
  nodes: Array<Problems>;
};

/** aggregate fields of "problems" */
export type Problems_Aggregate_Fields = {
  __typename?: 'problems_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Problems_Max_Fields>;
  min?: Maybe<Problems_Min_Fields>;
};


/** aggregate fields of "problems" */
export type Problems_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Problems_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "problems" */
export type Problems_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Problems_Max_Order_By>;
  min?: Maybe<Problems_Min_Order_By>;
};

/** input type for inserting array relation for remote table "problems" */
export type Problems_Arr_Rel_Insert_Input = {
  data: Array<Problems_Insert_Input>;
  on_conflict?: Maybe<Problems_On_Conflict>;
};

/** Boolean expression to filter rows from the table "problems". All fields are combined with a logical 'AND'. */
export type Problems_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Problems_Bool_Exp>>>;
  _not?: Maybe<Problems_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Problems_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nature?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "problems" */
export enum Problems_Constraint {
  /** unique or primary key constraint */
  ProblemsPkey = 'problems_pkey'
}

/** input type for inserting data into table "problems" */
export type Problems_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Problems_Max_Fields = {
  __typename?: 'problems_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "problems" */
export type Problems_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nature?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Problems_Min_Fields = {
  __typename?: 'problems_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "problems" */
export type Problems_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nature?: Maybe<Order_By>;
};

/** response of any mutation on the table "problems" */
export type Problems_Mutation_Response = {
  __typename?: 'problems_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Problems>;
};

/** input type for inserting object relation for remote table "problems" */
export type Problems_Obj_Rel_Insert_Input = {
  data: Problems_Insert_Input;
  on_conflict?: Maybe<Problems_On_Conflict>;
};

/** on conflict condition type for table "problems" */
export type Problems_On_Conflict = {
  constraint: Problems_Constraint;
  update_columns: Array<Problems_Update_Column>;
  where?: Maybe<Problems_Bool_Exp>;
};

/** ordering options when selecting data from "problems" */
export type Problems_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nature?: Maybe<Order_By>;
};

/** primary key columns input for table: "problems" */
export type Problems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "problems" */
export enum Problems_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nature = 'nature'
}

/** input type for updating data in table "problems" */
export type Problems_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
};

/** update columns of table "problems" */
export enum Problems_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nature = 'nature'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "balls" */
  balls: Array<Balls>;
  /** fetch aggregated fields from the table: "balls" */
  balls_aggregate: Balls_Aggregate;
  /** fetch data from the table: "balls" using primary key columns */
  balls_by_pk?: Maybe<Balls>;
  /** fetch data from the table: "collaboration_users" */
  collaboration_users: Array<Collaboration_Users>;
  /** fetch aggregated fields from the table: "collaboration_users" */
  collaboration_users_aggregate: Collaboration_Users_Aggregate;
  /** fetch data from the table: "collaboration_users" using primary key columns */
  collaboration_users_by_pk?: Maybe<Collaboration_Users>;
  /** fetch data from the table: "collaborations" */
  collaborations: Array<Collaborations>;
  /** fetch aggregated fields from the table: "collaborations" */
  collaborations_aggregate: Collaborations_Aggregate;
  /** fetch data from the table: "collaborations" using primary key columns */
  collaborations_by_pk?: Maybe<Collaborations>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
  /** fetch data from the table: "form_answers" */
  form_answers: Array<Form_Answers>;
  /** fetch aggregated fields from the table: "form_answers" */
  form_answers_aggregate: Form_Answers_Aggregate;
  /** fetch data from the table: "form_answers" using primary key columns */
  form_answers_by_pk?: Maybe<Form_Answers>;
  /** fetch data from the table: "form_blueprints" */
  form_blueprints: Array<Form_Blueprints>;
  /** fetch aggregated fields from the table: "form_blueprints" */
  form_blueprints_aggregate: Form_Blueprints_Aggregate;
  /** fetch data from the table: "form_blueprints" using primary key columns */
  form_blueprints_by_pk?: Maybe<Form_Blueprints>;
  /** fetch data from the table: "form_categories" */
  form_categories: Array<Form_Categories>;
  /** fetch aggregated fields from the table: "form_categories" */
  form_categories_aggregate: Form_Categories_Aggregate;
  /** fetch data from the table: "form_categories" using primary key columns */
  form_categories_by_pk?: Maybe<Form_Categories>;
  /** fetch data from the table: "form_compound_questions" */
  form_compound_questions: Array<Form_Compound_Questions>;
  /** fetch aggregated fields from the table: "form_compound_questions" */
  form_compound_questions_aggregate: Form_Compound_Questions_Aggregate;
  /** fetch data from the table: "form_compound_questions" using primary key columns */
  form_compound_questions_by_pk?: Maybe<Form_Compound_Questions>;
  /** fetch data from the table: "form_default_list_options" */
  form_default_list_options: Array<Form_Default_List_Options>;
  /** fetch aggregated fields from the table: "form_default_list_options" */
  form_default_list_options_aggregate: Form_Default_List_Options_Aggregate;
  /** fetch data from the table: "form_default_list_options" using primary key columns */
  form_default_list_options_by_pk?: Maybe<Form_Default_List_Options>;
  /** fetch data from the table: "form_default_lists" */
  form_default_lists: Array<Form_Default_Lists>;
  /** fetch aggregated fields from the table: "form_default_lists" */
  form_default_lists_aggregate: Form_Default_Lists_Aggregate;
  /** fetch data from the table: "form_default_lists" using primary key columns */
  form_default_lists_by_pk?: Maybe<Form_Default_Lists>;
  /** fetch data from the table: "form_question_list_options" */
  form_question_list_options: Array<Form_Question_List_Options>;
  /** fetch aggregated fields from the table: "form_question_list_options" */
  form_question_list_options_aggregate: Form_Question_List_Options_Aggregate;
  /** fetch data from the table: "form_question_list_options" using primary key columns */
  form_question_list_options_by_pk?: Maybe<Form_Question_List_Options>;
  /** fetch data from the table: "form_question_list_types" */
  form_question_list_types: Array<Form_Question_List_Types>;
  /** fetch aggregated fields from the table: "form_question_list_types" */
  form_question_list_types_aggregate: Form_Question_List_Types_Aggregate;
  /** fetch data from the table: "form_question_list_types" using primary key columns */
  form_question_list_types_by_pk?: Maybe<Form_Question_List_Types>;
  /** fetch data from the table: "form_question_lists" */
  form_question_lists: Array<Form_Question_Lists>;
  /** fetch aggregated fields from the table: "form_question_lists" */
  form_question_lists_aggregate: Form_Question_Lists_Aggregate;
  /** fetch data from the table: "form_question_lists" using primary key columns */
  form_question_lists_by_pk?: Maybe<Form_Question_Lists>;
  /** fetch data from the table: "form_question_types" */
  form_question_types: Array<Form_Question_Types>;
  /** fetch aggregated fields from the table: "form_question_types" */
  form_question_types_aggregate: Form_Question_Types_Aggregate;
  /** fetch data from the table: "form_question_types" using primary key columns */
  form_question_types_by_pk?: Maybe<Form_Question_Types>;
  /** fetch data from the table: "form_questions" */
  form_questions: Array<Form_Questions>;
  /** fetch aggregated fields from the table: "form_questions" */
  form_questions_aggregate: Form_Questions_Aggregate;
  /** fetch data from the table: "form_questions" using primary key columns */
  form_questions_by_pk?: Maybe<Form_Questions>;
  /** fetch data from the table: "forms" */
  forms: Array<Forms>;
  /** fetch aggregated fields from the table: "forms" */
  forms_aggregate: Forms_Aggregate;
  /** fetch data from the table: "forms" using primary key columns */
  forms_by_pk?: Maybe<Forms>;
  /** fetch data from the table: "organisation_users" */
  organisation_users: Array<Organisation_Users>;
  /** fetch aggregated fields from the table: "organisation_users" */
  organisation_users_aggregate: Organisation_Users_Aggregate;
  /** fetch data from the table: "organisation_users" using primary key columns */
  organisation_users_by_pk?: Maybe<Organisation_Users>;
  /** fetch data from the table: "organisations" */
  organisations: Array<Organisations>;
  /** fetch aggregated fields from the table: "organisations" */
  organisations_aggregate: Organisations_Aggregate;
  /** fetch data from the table: "organisations" using primary key columns */
  organisations_by_pk?: Maybe<Organisations>;
  /** fetch data from the table: "problems" */
  problems: Array<Problems>;
  /** fetch aggregated fields from the table: "problems" */
  problems_aggregate: Problems_Aggregate;
  /** fetch data from the table: "problems" using primary key columns */
  problems_by_pk?: Maybe<Problems>;
  /** fetch data from the table: "questionnaire_answers" */
  questionnaire_answers: Array<Questionnaire_Answers>;
  /** fetch aggregated fields from the table: "questionnaire_answers" */
  questionnaire_answers_aggregate: Questionnaire_Answers_Aggregate;
  /** fetch data from the table: "questionnaire_answers" using primary key columns */
  questionnaire_answers_by_pk?: Maybe<Questionnaire_Answers>;
  /** fetch data from the table: "questionnaire_categories" */
  questionnaire_categories: Array<Questionnaire_Categories>;
  /** fetch aggregated fields from the table: "questionnaire_categories" */
  questionnaire_categories_aggregate: Questionnaire_Categories_Aggregate;
  /** fetch data from the table: "questionnaire_categories" using primary key columns */
  questionnaire_categories_by_pk?: Maybe<Questionnaire_Categories>;
  /** fetch data from the table: "questionnaire_question_parts" */
  questionnaire_question_parts: Array<Questionnaire_Question_Parts>;
  /** fetch aggregated fields from the table: "questionnaire_question_parts" */
  questionnaire_question_parts_aggregate: Questionnaire_Question_Parts_Aggregate;
  /** fetch data from the table: "questionnaire_question_parts" using primary key columns */
  questionnaire_question_parts_by_pk?: Maybe<Questionnaire_Question_Parts>;
  /** fetch data from the table: "questionnaire_questions" */
  questionnaire_questions: Array<Questionnaire_Questions>;
  /** fetch aggregated fields from the table: "questionnaire_questions" */
  questionnaire_questions_aggregate: Questionnaire_Questions_Aggregate;
  /** fetch data from the table: "questionnaire_questions" using primary key columns */
  questionnaire_questions_by_pk?: Maybe<Questionnaire_Questions>;
  /** fetch data from the table: "questionnaire_runs" */
  questionnaire_runs: Array<Questionnaire_Runs>;
  /** fetch aggregated fields from the table: "questionnaire_runs" */
  questionnaire_runs_aggregate: Questionnaire_Runs_Aggregate;
  /** fetch data from the table: "questionnaire_runs" using primary key columns */
  questionnaire_runs_by_pk?: Maybe<Questionnaire_Runs>;
  /** fetch data from the table: "questionnaire_users" */
  questionnaire_users: Array<Questionnaire_Users>;
  /** fetch aggregated fields from the table: "questionnaire_users" */
  questionnaire_users_aggregate: Questionnaire_Users_Aggregate;
  /** fetch data from the table: "questionnaire_users" using primary key columns */
  questionnaire_users_by_pk?: Maybe<Questionnaire_Users>;
  /** fetch data from the table: "questionnaires" */
  questionnaires: Array<Questionnaires>;
  /** fetch aggregated fields from the table: "questionnaires" */
  questionnaires_aggregate: Questionnaires_Aggregate;
  /** fetch data from the table: "questionnaires" using primary key columns */
  questionnaires_by_pk?: Maybe<Questionnaires>;
  /** fetch data from the table: "stuff" */
  stuff: Array<Stuff>;
  /** fetch aggregated fields from the table: "stuff" */
  stuff_aggregate: Stuff_Aggregate;
  /** fetch data from the table: "stuff" using primary key columns */
  stuff_by_pk?: Maybe<Stuff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** fetch data from the table: "zeurder" */
  zeurder: Array<Zeurder>;
  /** fetch aggregated fields from the table: "zeurder" */
  zeurder_aggregate: Zeurder_Aggregate;
  /** fetch data from the table: "zeurder" using primary key columns */
  zeurder_by_pk?: Maybe<Zeurder>;
};


/** query root */
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootBallsArgs = {
  distinct_on?: Maybe<Array<Balls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Balls_Order_By>>;
  where?: Maybe<Balls_Bool_Exp>;
};


/** query root */
export type Query_RootBalls_AggregateArgs = {
  distinct_on?: Maybe<Array<Balls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Balls_Order_By>>;
  where?: Maybe<Balls_Bool_Exp>;
};


/** query root */
export type Query_RootBalls_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCollaboration_UsersArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** query root */
export type Query_RootCollaboration_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** query root */
export type Query_RootCollaboration_Users_By_PkArgs = {
  collaboration_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootCollaborationsArgs = {
  distinct_on?: Maybe<Array<Collaborations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborations_Order_By>>;
  where?: Maybe<Collaborations_Bool_Exp>;
};


/** query root */
export type Query_RootCollaborations_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborations_Order_By>>;
  where?: Maybe<Collaborations_Bool_Exp>;
};


/** query root */
export type Query_RootCollaborations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


/** query root */
export type Query_RootConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


/** query root */
export type Query_RootConfig_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootForm_AnswersArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Answers_By_PkArgs = {
  form_id: Scalars['uuid'];
  form_question_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_BlueprintsArgs = {
  distinct_on?: Maybe<Array<Form_Blueprints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Blueprints_Order_By>>;
  where?: Maybe<Form_Blueprints_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Blueprints_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Blueprints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Blueprints_Order_By>>;
  where?: Maybe<Form_Blueprints_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Blueprints_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_CategoriesArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Compound_QuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Compound_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Compound_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Default_List_OptionsArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Default_List_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Default_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Default_ListsArgs = {
  distinct_on?: Maybe<Array<Form_Default_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_Lists_Order_By>>;
  where?: Maybe<Form_Default_Lists_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Default_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Default_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_Lists_Order_By>>;
  where?: Maybe<Form_Default_Lists_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Default_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Question_List_OptionsArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_List_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Question_List_TypesArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Types_Order_By>>;
  where?: Maybe<Form_Question_List_Types_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_List_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Types_Order_By>>;
  where?: Maybe<Form_Question_List_Types_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_List_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootForm_Question_ListsArgs = {
  distinct_on?: Maybe<Array<Form_Question_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Lists_Order_By>>;
  where?: Maybe<Form_Question_Lists_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Lists_Order_By>>;
  where?: Maybe<Form_Question_Lists_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootForm_Question_TypesArgs = {
  distinct_on?: Maybe<Array<Form_Question_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Types_Order_By>>;
  where?: Maybe<Form_Question_Types_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Types_Order_By>>;
  where?: Maybe<Form_Question_Types_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Question_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootForm_QuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootForm_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** query root */
export type Query_RootForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** query root */
export type Query_RootForms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOrganisation_UsersArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisation_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisation_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOrganisationsArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProblemsArgs = {
  distinct_on?: Maybe<Array<Problems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Problems_Order_By>>;
  where?: Maybe<Problems_Bool_Exp>;
};


/** query root */
export type Query_RootProblems_AggregateArgs = {
  distinct_on?: Maybe<Array<Problems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Problems_Order_By>>;
  where?: Maybe<Problems_Bool_Exp>;
};


/** query root */
export type Query_RootProblems_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_AnswersArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Answers_Order_By>>;
  where?: Maybe<Questionnaire_Answers_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Answers_Order_By>>;
  where?: Maybe<Questionnaire_Answers_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Answers_By_PkArgs = {
  question_part_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_CategoriesArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Categories_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_Question_PartsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Question_Parts_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Question_Parts_By_PkArgs = {
  question_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_QuestionsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Questions_By_PkArgs = {
  questionnaire_category_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_RunsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Runs_Order_By>>;
  where?: Maybe<Questionnaire_Runs_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Runs_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Runs_Order_By>>;
  where?: Maybe<Questionnaire_Runs_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Runs_By_PkArgs = {
  id: Scalars['Int'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnaire_UsersArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Users_Order_By>>;
  where?: Maybe<Questionnaire_Users_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Users_Order_By>>;
  where?: Maybe<Questionnaire_Users_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaire_Users_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionnairesArgs = {
  distinct_on?: Maybe<Array<Questionnaires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaires_Order_By>>;
  where?: Maybe<Questionnaires_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaires_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaires_Order_By>>;
  where?: Maybe<Questionnaires_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionnaires_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootStuffArgs = {
  distinct_on?: Maybe<Array<Stuff_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stuff_Order_By>>;
  where?: Maybe<Stuff_Bool_Exp>;
};


/** query root */
export type Query_RootStuff_AggregateArgs = {
  distinct_on?: Maybe<Array<Stuff_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stuff_Order_By>>;
  where?: Maybe<Stuff_Bool_Exp>;
};


/** query root */
export type Query_RootStuff_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** query root */
export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootZeurderArgs = {
  distinct_on?: Maybe<Array<Zeurder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Zeurder_Order_By>>;
  where?: Maybe<Zeurder_Bool_Exp>;
};


/** query root */
export type Query_RootZeurder_AggregateArgs = {
  distinct_on?: Maybe<Array<Zeurder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Zeurder_Order_By>>;
  where?: Maybe<Zeurder_Bool_Exp>;
};


/** query root */
export type Query_RootZeurder_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** columns and relationships of "questionnaire_answers" */
export type Questionnaire_Answers = {
  __typename?: 'questionnaire_answers';
  answer: Scalars['String'];
  question_part_uuid: Scalars['uuid'];
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "questionnaire_answers" */
export type Questionnaire_Answers_Aggregate = {
  __typename?: 'questionnaire_answers_aggregate';
  aggregate?: Maybe<Questionnaire_Answers_Aggregate_Fields>;
  nodes: Array<Questionnaire_Answers>;
};

/** aggregate fields of "questionnaire_answers" */
export type Questionnaire_Answers_Aggregate_Fields = {
  __typename?: 'questionnaire_answers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Answers_Max_Fields>;
  min?: Maybe<Questionnaire_Answers_Min_Fields>;
};


/** aggregate fields of "questionnaire_answers" */
export type Questionnaire_Answers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Answers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_answers" */
export type Questionnaire_Answers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Answers_Max_Order_By>;
  min?: Maybe<Questionnaire_Answers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_answers" */
export type Questionnaire_Answers_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Answers_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Answers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "questionnaire_answers". All fields are combined with a logical 'AND'. */
export type Questionnaire_Answers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Answers_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Answers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Answers_Bool_Exp>>>;
  answer?: Maybe<String_Comparison_Exp>;
  question_part_uuid?: Maybe<Uuid_Comparison_Exp>;
  questionnaire_uuid?: Maybe<Uuid_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_answers" */
export enum Questionnaire_Answers_Constraint {
  /** unique or primary key constraint */
  QuestionnaireAnswersPkey = 'questionnaire_answers_pkey'
}

/** input type for inserting data into table "questionnaire_answers" */
export type Questionnaire_Answers_Insert_Input = {
  answer?: Maybe<Scalars['String']>;
  question_part_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Answers_Max_Fields = {
  __typename?: 'questionnaire_answers_max_fields';
  answer?: Maybe<Scalars['String']>;
  question_part_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_answers" */
export type Questionnaire_Answers_Max_Order_By = {
  answer?: Maybe<Order_By>;
  question_part_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Answers_Min_Fields = {
  __typename?: 'questionnaire_answers_min_fields';
  answer?: Maybe<Scalars['String']>;
  question_part_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_answers" */
export type Questionnaire_Answers_Min_Order_By = {
  answer?: Maybe<Order_By>;
  question_part_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_answers" */
export type Questionnaire_Answers_Mutation_Response = {
  __typename?: 'questionnaire_answers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Answers>;
};

/** input type for inserting object relation for remote table "questionnaire_answers" */
export type Questionnaire_Answers_Obj_Rel_Insert_Input = {
  data: Questionnaire_Answers_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Answers_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_answers" */
export type Questionnaire_Answers_On_Conflict = {
  constraint: Questionnaire_Answers_Constraint;
  update_columns: Array<Questionnaire_Answers_Update_Column>;
  where?: Maybe<Questionnaire_Answers_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_answers" */
export type Questionnaire_Answers_Order_By = {
  answer?: Maybe<Order_By>;
  question_part_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_answers" */
export type Questionnaire_Answers_Pk_Columns_Input = {
  question_part_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_answers" */
export enum Questionnaire_Answers_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  QuestionPartUuid = 'question_part_uuid',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_answers" */
export type Questionnaire_Answers_Set_Input = {
  answer?: Maybe<Scalars['String']>;
  question_part_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "questionnaire_answers" */
export enum Questionnaire_Answers_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  QuestionPartUuid = 'question_part_uuid',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "questionnaire_categories" */
export type Questionnaire_Categories = {
  __typename?: 'questionnaire_categories';
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  questionnaire: Questionnaires;
  questionnaire_uuid: Scalars['uuid'];
  /** An array relationship */
  questions: Array<Questionnaire_Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questionnaire_Questions_Aggregate;
  sortIndex: Scalars['Int'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "questionnaire_categories" */
export type Questionnaire_CategoriesQuestionsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};


/** columns and relationships of "questionnaire_categories" */
export type Questionnaire_CategoriesQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};

/** aggregated selection of "questionnaire_categories" */
export type Questionnaire_Categories_Aggregate = {
  __typename?: 'questionnaire_categories_aggregate';
  aggregate?: Maybe<Questionnaire_Categories_Aggregate_Fields>;
  nodes: Array<Questionnaire_Categories>;
};

/** aggregate fields of "questionnaire_categories" */
export type Questionnaire_Categories_Aggregate_Fields = {
  __typename?: 'questionnaire_categories_aggregate_fields';
  avg?: Maybe<Questionnaire_Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Categories_Max_Fields>;
  min?: Maybe<Questionnaire_Categories_Min_Fields>;
  stddev?: Maybe<Questionnaire_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Categories_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Categories_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Categories_Variance_Fields>;
};


/** aggregate fields of "questionnaire_categories" */
export type Questionnaire_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_categories" */
export type Questionnaire_Categories_Aggregate_Order_By = {
  avg?: Maybe<Questionnaire_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Categories_Max_Order_By>;
  min?: Maybe<Questionnaire_Categories_Min_Order_By>;
  stddev?: Maybe<Questionnaire_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Questionnaire_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questionnaire_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Questionnaire_Categories_Sum_Order_By>;
  var_pop?: Maybe<Questionnaire_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Questionnaire_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Questionnaire_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_categories" */
export type Questionnaire_Categories_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Categories_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionnaire_Categories_Avg_Fields = {
  __typename?: 'questionnaire_categories_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionnaire_categories". All fields are combined with a logical 'AND'. */
export type Questionnaire_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Categories_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Categories_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  questionnaire?: Maybe<Questionnaires_Bool_Exp>;
  questionnaire_uuid?: Maybe<Uuid_Comparison_Exp>;
  questions?: Maybe<Questionnaire_Questions_Bool_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_categories" */
export enum Questionnaire_Categories_Constraint {
  /** unique or primary key constraint */
  QuestionCategoriesPkey = 'question_categories_pkey',
  /** unique or primary key constraint */
  QuestionCategoriesUuidKey = 'question_categories_uuid_key'
}

/** input type for incrementing integer column in table "questionnaire_categories" */
export type Questionnaire_Categories_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questionnaire_categories" */
export type Questionnaire_Categories_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  questionnaire?: Maybe<Questionnaires_Obj_Rel_Insert_Input>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  questions?: Maybe<Questionnaire_Questions_Arr_Rel_Insert_Input>;
  sortIndex?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Categories_Max_Fields = {
  __typename?: 'questionnaire_categories_max_fields';
  name?: Maybe<Scalars['String']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Max_Order_By = {
  name?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Categories_Min_Fields = {
  __typename?: 'questionnaire_categories_min_fields';
  name?: Maybe<Scalars['String']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Min_Order_By = {
  name?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_categories" */
export type Questionnaire_Categories_Mutation_Response = {
  __typename?: 'questionnaire_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Categories>;
};

/** input type for inserting object relation for remote table "questionnaire_categories" */
export type Questionnaire_Categories_Obj_Rel_Insert_Input = {
  data: Questionnaire_Categories_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Categories_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_categories" */
export type Questionnaire_Categories_On_Conflict = {
  constraint: Questionnaire_Categories_Constraint;
  update_columns: Array<Questionnaire_Categories_Update_Column>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_categories" */
export type Questionnaire_Categories_Order_By = {
  name?: Maybe<Order_By>;
  questionnaire?: Maybe<Questionnaires_Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Questionnaire_Questions_Aggregate_Order_By>;
  sortIndex?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_categories" */
export type Questionnaire_Categories_Pk_Columns_Input = {
  questionnaire_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_categories" */
export enum Questionnaire_Categories_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_categories" */
export type Questionnaire_Categories_Set_Input = {
  name?: Maybe<Scalars['String']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Categories_Stddev_Fields = {
  __typename?: 'questionnaire_categories_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Categories_Stddev_Pop_Fields = {
  __typename?: 'questionnaire_categories_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Categories_Stddev_Samp_Fields = {
  __typename?: 'questionnaire_categories_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questionnaire_Categories_Sum_Fields = {
  __typename?: 'questionnaire_categories_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "questionnaire_categories" */
export enum Questionnaire_Categories_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Questionnaire_Categories_Var_Pop_Fields = {
  __typename?: 'questionnaire_categories_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Categories_Var_Samp_Fields = {
  __typename?: 'questionnaire_categories_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionnaire_Categories_Variance_Fields = {
  __typename?: 'questionnaire_categories_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questionnaire_categories" */
export type Questionnaire_Categories_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "questionnaire_question_parts" */
export type Questionnaire_Question_Parts = {
  __typename?: 'questionnaire_question_parts';
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  question: Questionnaire_Questions;
  question_uuid: Scalars['uuid'];
  sortIndex: Scalars['Int'];
  type: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Aggregate = {
  __typename?: 'questionnaire_question_parts_aggregate';
  aggregate?: Maybe<Questionnaire_Question_Parts_Aggregate_Fields>;
  nodes: Array<Questionnaire_Question_Parts>;
};

/** aggregate fields of "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Aggregate_Fields = {
  __typename?: 'questionnaire_question_parts_aggregate_fields';
  avg?: Maybe<Questionnaire_Question_Parts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Question_Parts_Max_Fields>;
  min?: Maybe<Questionnaire_Question_Parts_Min_Fields>;
  stddev?: Maybe<Questionnaire_Question_Parts_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Question_Parts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Question_Parts_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Question_Parts_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Question_Parts_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Question_Parts_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Question_Parts_Variance_Fields>;
};


/** aggregate fields of "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Aggregate_Order_By = {
  avg?: Maybe<Questionnaire_Question_Parts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Question_Parts_Max_Order_By>;
  min?: Maybe<Questionnaire_Question_Parts_Min_Order_By>;
  stddev?: Maybe<Questionnaire_Question_Parts_Stddev_Order_By>;
  stddev_pop?: Maybe<Questionnaire_Question_Parts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questionnaire_Question_Parts_Stddev_Samp_Order_By>;
  sum?: Maybe<Questionnaire_Question_Parts_Sum_Order_By>;
  var_pop?: Maybe<Questionnaire_Question_Parts_Var_Pop_Order_By>;
  var_samp?: Maybe<Questionnaire_Question_Parts_Var_Samp_Order_By>;
  variance?: Maybe<Questionnaire_Question_Parts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Question_Parts_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Question_Parts_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionnaire_Question_Parts_Avg_Fields = {
  __typename?: 'questionnaire_question_parts_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionnaire_question_parts". All fields are combined with a logical 'AND'. */
export type Questionnaire_Question_Parts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Question_Parts_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Question_Parts_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  question?: Maybe<Questionnaire_Questions_Bool_Exp>;
  question_uuid?: Maybe<Uuid_Comparison_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_question_parts" */
export enum Questionnaire_Question_Parts_Constraint {
  /** unique or primary key constraint */
  QuestionPartsPkey = 'question_parts_pkey',
  /** unique or primary key constraint */
  QuestionPartsUuidKey = 'question_parts_uuid_key'
}

/** input type for incrementing integer column in table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  question?: Maybe<Questionnaire_Questions_Obj_Rel_Insert_Input>;
  question_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Question_Parts_Max_Fields = {
  __typename?: 'questionnaire_question_parts_max_fields';
  name?: Maybe<Scalars['String']>;
  question_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Max_Order_By = {
  name?: Maybe<Order_By>;
  question_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Question_Parts_Min_Fields = {
  __typename?: 'questionnaire_question_parts_min_fields';
  name?: Maybe<Scalars['String']>;
  question_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Min_Order_By = {
  name?: Maybe<Order_By>;
  question_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Mutation_Response = {
  __typename?: 'questionnaire_question_parts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Question_Parts>;
};

/** input type for inserting object relation for remote table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Obj_Rel_Insert_Input = {
  data: Questionnaire_Question_Parts_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Question_Parts_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_On_Conflict = {
  constraint: Questionnaire_Question_Parts_Constraint;
  update_columns: Array<Questionnaire_Question_Parts_Update_Column>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Order_By = {
  name?: Maybe<Order_By>;
  question?: Maybe<Questionnaire_Questions_Order_By>;
  question_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Pk_Columns_Input = {
  question_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_question_parts" */
export enum Questionnaire_Question_Parts_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionUuid = 'question_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Set_Input = {
  name?: Maybe<Scalars['String']>;
  question_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Question_Parts_Stddev_Fields = {
  __typename?: 'questionnaire_question_parts_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Question_Parts_Stddev_Pop_Fields = {
  __typename?: 'questionnaire_question_parts_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Question_Parts_Stddev_Samp_Fields = {
  __typename?: 'questionnaire_question_parts_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questionnaire_Question_Parts_Sum_Fields = {
  __typename?: 'questionnaire_question_parts_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "questionnaire_question_parts" */
export enum Questionnaire_Question_Parts_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionUuid = 'question_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Questionnaire_Question_Parts_Var_Pop_Fields = {
  __typename?: 'questionnaire_question_parts_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Question_Parts_Var_Samp_Fields = {
  __typename?: 'questionnaire_question_parts_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionnaire_Question_Parts_Variance_Fields = {
  __typename?: 'questionnaire_question_parts_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questionnaire_question_parts" */
export type Questionnaire_Question_Parts_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "questionnaire_questions" */
export type Questionnaire_Questions = {
  __typename?: 'questionnaire_questions';
  /** An object relationship */
  category: Questionnaire_Categories;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  parts: Array<Questionnaire_Question_Parts>;
  /** An aggregated array relationship */
  parts_aggregate: Questionnaire_Question_Parts_Aggregate;
  questionnaire_category_uuid: Scalars['uuid'];
  sortIndex: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "questionnaire_questions" */
export type Questionnaire_QuestionsPartsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};


/** columns and relationships of "questionnaire_questions" */
export type Questionnaire_QuestionsParts_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};

/** aggregated selection of "questionnaire_questions" */
export type Questionnaire_Questions_Aggregate = {
  __typename?: 'questionnaire_questions_aggregate';
  aggregate?: Maybe<Questionnaire_Questions_Aggregate_Fields>;
  nodes: Array<Questionnaire_Questions>;
};

/** aggregate fields of "questionnaire_questions" */
export type Questionnaire_Questions_Aggregate_Fields = {
  __typename?: 'questionnaire_questions_aggregate_fields';
  avg?: Maybe<Questionnaire_Questions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Questions_Max_Fields>;
  min?: Maybe<Questionnaire_Questions_Min_Fields>;
  stddev?: Maybe<Questionnaire_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Questions_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Questions_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Questions_Variance_Fields>;
};


/** aggregate fields of "questionnaire_questions" */
export type Questionnaire_Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_questions" */
export type Questionnaire_Questions_Aggregate_Order_By = {
  avg?: Maybe<Questionnaire_Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Questions_Max_Order_By>;
  min?: Maybe<Questionnaire_Questions_Min_Order_By>;
  stddev?: Maybe<Questionnaire_Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Questionnaire_Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questionnaire_Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Questionnaire_Questions_Sum_Order_By>;
  var_pop?: Maybe<Questionnaire_Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Questionnaire_Questions_Var_Samp_Order_By>;
  variance?: Maybe<Questionnaire_Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_questions" */
export type Questionnaire_Questions_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Questions_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionnaire_Questions_Avg_Fields = {
  __typename?: 'questionnaire_questions_avg_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Avg_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionnaire_questions". All fields are combined with a logical 'AND'. */
export type Questionnaire_Questions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Questions_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Questions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Questions_Bool_Exp>>>;
  category?: Maybe<Questionnaire_Categories_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parts?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
  questionnaire_category_uuid?: Maybe<Uuid_Comparison_Exp>;
  sortIndex?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_questions" */
export enum Questionnaire_Questions_Constraint {
  /** unique or primary key constraint */
  QuestionnaireQuestionsPkey = 'questionnaire_questions_pkey',
  /** unique or primary key constraint */
  QuestionnaireQuestionsUuidKey = 'questionnaire_questions_uuid_key'
}

/** input type for incrementing integer column in table "questionnaire_questions" */
export type Questionnaire_Questions_Inc_Input = {
  sortIndex?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questionnaire_questions" */
export type Questionnaire_Questions_Insert_Input = {
  category?: Maybe<Questionnaire_Categories_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  parts?: Maybe<Questionnaire_Question_Parts_Arr_Rel_Insert_Input>;
  questionnaire_category_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Questions_Max_Fields = {
  __typename?: 'questionnaire_questions_max_fields';
  name?: Maybe<Scalars['String']>;
  questionnaire_category_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Max_Order_By = {
  name?: Maybe<Order_By>;
  questionnaire_category_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Questions_Min_Fields = {
  __typename?: 'questionnaire_questions_min_fields';
  name?: Maybe<Scalars['String']>;
  questionnaire_category_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Min_Order_By = {
  name?: Maybe<Order_By>;
  questionnaire_category_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_questions" */
export type Questionnaire_Questions_Mutation_Response = {
  __typename?: 'questionnaire_questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Questions>;
};

/** input type for inserting object relation for remote table "questionnaire_questions" */
export type Questionnaire_Questions_Obj_Rel_Insert_Input = {
  data: Questionnaire_Questions_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Questions_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_questions" */
export type Questionnaire_Questions_On_Conflict = {
  constraint: Questionnaire_Questions_Constraint;
  update_columns: Array<Questionnaire_Questions_Update_Column>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_questions" */
export type Questionnaire_Questions_Order_By = {
  category?: Maybe<Questionnaire_Categories_Order_By>;
  name?: Maybe<Order_By>;
  parts_aggregate?: Maybe<Questionnaire_Question_Parts_Aggregate_Order_By>;
  questionnaire_category_uuid?: Maybe<Order_By>;
  sortIndex?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_questions" */
export type Questionnaire_Questions_Pk_Columns_Input = {
  questionnaire_category_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_questions" */
export enum Questionnaire_Questions_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionnaireCategoryUuid = 'questionnaire_category_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_questions" */
export type Questionnaire_Questions_Set_Input = {
  name?: Maybe<Scalars['String']>;
  questionnaire_category_uuid?: Maybe<Scalars['uuid']>;
  sortIndex?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Questions_Stddev_Fields = {
  __typename?: 'questionnaire_questions_stddev_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Stddev_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Questions_Stddev_Pop_Fields = {
  __typename?: 'questionnaire_questions_stddev_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Stddev_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Questions_Stddev_Samp_Fields = {
  __typename?: 'questionnaire_questions_stddev_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Stddev_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questionnaire_Questions_Sum_Fields = {
  __typename?: 'questionnaire_questions_sum_fields';
  sortIndex?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Sum_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** update columns of table "questionnaire_questions" */
export enum Questionnaire_Questions_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  QuestionnaireCategoryUuid = 'questionnaire_category_uuid',
  /** column name */
  SortIndex = 'sortIndex',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Questionnaire_Questions_Var_Pop_Fields = {
  __typename?: 'questionnaire_questions_var_pop_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Var_Pop_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Questions_Var_Samp_Fields = {
  __typename?: 'questionnaire_questions_var_samp_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Var_Samp_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionnaire_Questions_Variance_Fields = {
  __typename?: 'questionnaire_questions_variance_fields';
  sortIndex?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questionnaire_questions" */
export type Questionnaire_Questions_Variance_Order_By = {
  sortIndex?: Maybe<Order_By>;
};

/** columns and relationships of "questionnaire_runs" */
export type Questionnaire_Runs = {
  __typename?: 'questionnaire_runs';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  organisation_uuid: Scalars['uuid'];
  questionnaire_uuid: Scalars['uuid'];
  start_date?: Maybe<Scalars['timestamptz']>;
  status: Scalars['questionnairestatus'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "questionnaire_runs" */
export type Questionnaire_Runs_Aggregate = {
  __typename?: 'questionnaire_runs_aggregate';
  aggregate?: Maybe<Questionnaire_Runs_Aggregate_Fields>;
  nodes: Array<Questionnaire_Runs>;
};

/** aggregate fields of "questionnaire_runs" */
export type Questionnaire_Runs_Aggregate_Fields = {
  __typename?: 'questionnaire_runs_aggregate_fields';
  avg?: Maybe<Questionnaire_Runs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Runs_Max_Fields>;
  min?: Maybe<Questionnaire_Runs_Min_Fields>;
  stddev?: Maybe<Questionnaire_Runs_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Runs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Runs_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Runs_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Runs_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Runs_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Runs_Variance_Fields>;
};


/** aggregate fields of "questionnaire_runs" */
export type Questionnaire_Runs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Runs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_runs" */
export type Questionnaire_Runs_Aggregate_Order_By = {
  avg?: Maybe<Questionnaire_Runs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Runs_Max_Order_By>;
  min?: Maybe<Questionnaire_Runs_Min_Order_By>;
  stddev?: Maybe<Questionnaire_Runs_Stddev_Order_By>;
  stddev_pop?: Maybe<Questionnaire_Runs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questionnaire_Runs_Stddev_Samp_Order_By>;
  sum?: Maybe<Questionnaire_Runs_Sum_Order_By>;
  var_pop?: Maybe<Questionnaire_Runs_Var_Pop_Order_By>;
  var_samp?: Maybe<Questionnaire_Runs_Var_Samp_Order_By>;
  variance?: Maybe<Questionnaire_Runs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_runs" */
export type Questionnaire_Runs_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Runs_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Runs_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionnaire_Runs_Avg_Fields = {
  __typename?: 'questionnaire_runs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionnaire_runs". All fields are combined with a logical 'AND'. */
export type Questionnaire_Runs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Runs_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Runs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Runs_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organisation_uuid?: Maybe<Uuid_Comparison_Exp>;
  questionnaire_uuid?: Maybe<Uuid_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<Questionnairestatus_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_runs" */
export enum Questionnaire_Runs_Constraint {
  /** unique or primary key constraint */
  QuestionnairesPkey = 'questionnaires_pkey',
  /** unique or primary key constraint */
  QuestionnairesUuidKey = 'questionnaires_uuid_key'
}

/** input type for incrementing integer column in table "questionnaire_runs" */
export type Questionnaire_Runs_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questionnaire_runs" */
export type Questionnaire_Runs_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['questionnairestatus']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Runs_Max_Fields = {
  __typename?: 'questionnaire_runs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Runs_Min_Fields = {
  __typename?: 'questionnaire_runs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_runs" */
export type Questionnaire_Runs_Mutation_Response = {
  __typename?: 'questionnaire_runs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Runs>;
};

/** input type for inserting object relation for remote table "questionnaire_runs" */
export type Questionnaire_Runs_Obj_Rel_Insert_Input = {
  data: Questionnaire_Runs_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Runs_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_runs" */
export type Questionnaire_Runs_On_Conflict = {
  constraint: Questionnaire_Runs_Constraint;
  update_columns: Array<Questionnaire_Runs_Update_Column>;
  where?: Maybe<Questionnaire_Runs_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_runs" */
export type Questionnaire_Runs_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_uuid?: Maybe<Order_By>;
  questionnaire_uuid?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_runs" */
export type Questionnaire_Runs_Pk_Columns_Input = {
  id: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_runs" */
export enum Questionnaire_Runs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationUuid = 'organisation_uuid',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_runs" */
export type Questionnaire_Runs_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_uuid?: Maybe<Scalars['uuid']>;
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['questionnairestatus']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Runs_Stddev_Fields = {
  __typename?: 'questionnaire_runs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Runs_Stddev_Pop_Fields = {
  __typename?: 'questionnaire_runs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Runs_Stddev_Samp_Fields = {
  __typename?: 'questionnaire_runs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questionnaire_Runs_Sum_Fields = {
  __typename?: 'questionnaire_runs_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "questionnaire_runs" */
export enum Questionnaire_Runs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationUuid = 'organisation_uuid',
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Questionnaire_Runs_Var_Pop_Fields = {
  __typename?: 'questionnaire_runs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Runs_Var_Samp_Fields = {
  __typename?: 'questionnaire_runs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionnaire_Runs_Variance_Fields = {
  __typename?: 'questionnaire_runs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questionnaire_runs" */
export type Questionnaire_Runs_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "questionnaire_users" */
export type Questionnaire_Users = {
  __typename?: 'questionnaire_users';
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "questionnaire_users" */
export type Questionnaire_Users_Aggregate = {
  __typename?: 'questionnaire_users_aggregate';
  aggregate?: Maybe<Questionnaire_Users_Aggregate_Fields>;
  nodes: Array<Questionnaire_Users>;
};

/** aggregate fields of "questionnaire_users" */
export type Questionnaire_Users_Aggregate_Fields = {
  __typename?: 'questionnaire_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaire_Users_Max_Fields>;
  min?: Maybe<Questionnaire_Users_Min_Fields>;
};


/** aggregate fields of "questionnaire_users" */
export type Questionnaire_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaire_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaire_users" */
export type Questionnaire_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaire_Users_Max_Order_By>;
  min?: Maybe<Questionnaire_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire_users" */
export type Questionnaire_Users_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Users_Insert_Input>;
  on_conflict?: Maybe<Questionnaire_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "questionnaire_users". All fields are combined with a logical 'AND'. */
export type Questionnaire_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaire_Users_Bool_Exp>>>;
  _not?: Maybe<Questionnaire_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaire_Users_Bool_Exp>>>;
  questionnaire_uuid?: Maybe<Uuid_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire_users" */
export enum Questionnaire_Users_Constraint {
  /** unique or primary key constraint */
  QuestionnaireUsersPkey = 'questionnaire_users_pkey',
  /** unique or primary key constraint */
  QuestionnaireUsersUuidKey = 'questionnaire_users_uuid_key'
}

/** input type for inserting data into table "questionnaire_users" */
export type Questionnaire_Users_Insert_Input = {
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaire_Users_Max_Fields = {
  __typename?: 'questionnaire_users_max_fields';
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaire_users" */
export type Questionnaire_Users_Max_Order_By = {
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Users_Min_Fields = {
  __typename?: 'questionnaire_users_min_fields';
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaire_users" */
export type Questionnaire_Users_Min_Order_By = {
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaire_users" */
export type Questionnaire_Users_Mutation_Response = {
  __typename?: 'questionnaire_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaire_Users>;
};

/** input type for inserting object relation for remote table "questionnaire_users" */
export type Questionnaire_Users_Obj_Rel_Insert_Input = {
  data: Questionnaire_Users_Insert_Input;
  on_conflict?: Maybe<Questionnaire_Users_On_Conflict>;
};

/** on conflict condition type for table "questionnaire_users" */
export type Questionnaire_Users_On_Conflict = {
  constraint: Questionnaire_Users_Constraint;
  update_columns: Array<Questionnaire_Users_Update_Column>;
  where?: Maybe<Questionnaire_Users_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaire_users" */
export type Questionnaire_Users_Order_By = {
  questionnaire_uuid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaire_users" */
export type Questionnaire_Users_Pk_Columns_Input = {
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaire_users" */
export enum Questionnaire_Users_Select_Column {
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaire_users" */
export type Questionnaire_Users_Set_Input = {
  questionnaire_uuid?: Maybe<Scalars['uuid']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "questionnaire_users" */
export enum Questionnaire_Users_Update_Column {
  /** column name */
  QuestionnaireUuid = 'questionnaire_uuid',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "questionnaires" */
export type Questionnaires = {
  __typename?: 'questionnaires';
  /** An array relationship */
  categories: Array<Questionnaire_Categories>;
  /** An aggregated array relationship */
  categories_aggregate: Questionnaire_Categories_Aggregate;
  delete_date?: Maybe<Scalars['timestamptz']>;
  deleted: Scalars['Boolean'];
  id?: Maybe<Scalars['uuid']>;
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "questionnaires" */
export type QuestionnairesCategoriesArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};


/** columns and relationships of "questionnaires" */
export type QuestionnairesCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};

/** aggregated selection of "questionnaires" */
export type Questionnaires_Aggregate = {
  __typename?: 'questionnaires_aggregate';
  aggregate?: Maybe<Questionnaires_Aggregate_Fields>;
  nodes: Array<Questionnaires>;
};

/** aggregate fields of "questionnaires" */
export type Questionnaires_Aggregate_Fields = {
  __typename?: 'questionnaires_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questionnaires_Max_Fields>;
  min?: Maybe<Questionnaires_Min_Fields>;
};


/** aggregate fields of "questionnaires" */
export type Questionnaires_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questionnaires_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questionnaires" */
export type Questionnaires_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Questionnaires_Max_Order_By>;
  min?: Maybe<Questionnaires_Min_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaires" */
export type Questionnaires_Arr_Rel_Insert_Input = {
  data: Array<Questionnaires_Insert_Input>;
  on_conflict?: Maybe<Questionnaires_On_Conflict>;
};

/** Boolean expression to filter rows from the table "questionnaires". All fields are combined with a logical 'AND'. */
export type Questionnaires_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questionnaires_Bool_Exp>>>;
  _not?: Maybe<Questionnaires_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questionnaires_Bool_Exp>>>;
  categories?: Maybe<Questionnaire_Categories_Bool_Exp>;
  delete_date?: Maybe<Timestamptz_Comparison_Exp>;
  deleted?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaires" */
export enum Questionnaires_Constraint {
  /** unique or primary key constraint */
  QuestionnaireBlueprintsPkey = 'questionnaire_blueprints_pkey'
}

/** input type for inserting data into table "questionnaires" */
export type Questionnaires_Insert_Input = {
  categories?: Maybe<Questionnaire_Categories_Arr_Rel_Insert_Input>;
  delete_date?: Maybe<Scalars['timestamptz']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Questionnaires_Max_Fields = {
  __typename?: 'questionnaires_max_fields';
  delete_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "questionnaires" */
export type Questionnaires_Max_Order_By = {
  delete_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaires_Min_Fields = {
  __typename?: 'questionnaires_min_fields';
  delete_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "questionnaires" */
export type Questionnaires_Min_Order_By = {
  delete_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "questionnaires" */
export type Questionnaires_Mutation_Response = {
  __typename?: 'questionnaires_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questionnaires>;
};

/** input type for inserting object relation for remote table "questionnaires" */
export type Questionnaires_Obj_Rel_Insert_Input = {
  data: Questionnaires_Insert_Input;
  on_conflict?: Maybe<Questionnaires_On_Conflict>;
};

/** on conflict condition type for table "questionnaires" */
export type Questionnaires_On_Conflict = {
  constraint: Questionnaires_Constraint;
  update_columns: Array<Questionnaires_Update_Column>;
  where?: Maybe<Questionnaires_Bool_Exp>;
};

/** ordering options when selecting data from "questionnaires" */
export type Questionnaires_Order_By = {
  categories_aggregate?: Maybe<Questionnaire_Categories_Aggregate_Order_By>;
  delete_date?: Maybe<Order_By>;
  deleted?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "questionnaires" */
export type Questionnaires_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "questionnaires" */
export enum Questionnaires_Select_Column {
  /** column name */
  DeleteDate = 'delete_date',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "questionnaires" */
export type Questionnaires_Set_Input = {
  delete_date?: Maybe<Scalars['timestamptz']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "questionnaires" */
export enum Questionnaires_Update_Column {
  /** column name */
  DeleteDate = 'delete_date',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}


/** expression to compare columns of type questionnairestatus. All fields are combined with logical 'AND'. */
export type Questionnairestatus_Comparison_Exp = {
  _eq?: Maybe<Scalars['questionnairestatus']>;
  _gt?: Maybe<Scalars['questionnairestatus']>;
  _gte?: Maybe<Scalars['questionnairestatus']>;
  _in?: Maybe<Array<Scalars['questionnairestatus']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['questionnairestatus']>;
  _lte?: Maybe<Scalars['questionnairestatus']>;
  _neq?: Maybe<Scalars['questionnairestatus']>;
  _nin?: Maybe<Array<Scalars['questionnairestatus']>>;
};

/** columns and relationships of "stuff" */
export type Stuff = {
  __typename?: 'stuff';
  grade: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "stuff" */
export type Stuff_Aggregate = {
  __typename?: 'stuff_aggregate';
  aggregate?: Maybe<Stuff_Aggregate_Fields>;
  nodes: Array<Stuff>;
};

/** aggregate fields of "stuff" */
export type Stuff_Aggregate_Fields = {
  __typename?: 'stuff_aggregate_fields';
  avg?: Maybe<Stuff_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stuff_Max_Fields>;
  min?: Maybe<Stuff_Min_Fields>;
  stddev?: Maybe<Stuff_Stddev_Fields>;
  stddev_pop?: Maybe<Stuff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stuff_Stddev_Samp_Fields>;
  sum?: Maybe<Stuff_Sum_Fields>;
  var_pop?: Maybe<Stuff_Var_Pop_Fields>;
  var_samp?: Maybe<Stuff_Var_Samp_Fields>;
  variance?: Maybe<Stuff_Variance_Fields>;
};


/** aggregate fields of "stuff" */
export type Stuff_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stuff_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stuff" */
export type Stuff_Aggregate_Order_By = {
  avg?: Maybe<Stuff_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stuff_Max_Order_By>;
  min?: Maybe<Stuff_Min_Order_By>;
  stddev?: Maybe<Stuff_Stddev_Order_By>;
  stddev_pop?: Maybe<Stuff_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stuff_Stddev_Samp_Order_By>;
  sum?: Maybe<Stuff_Sum_Order_By>;
  var_pop?: Maybe<Stuff_Var_Pop_Order_By>;
  var_samp?: Maybe<Stuff_Var_Samp_Order_By>;
  variance?: Maybe<Stuff_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stuff" */
export type Stuff_Arr_Rel_Insert_Input = {
  data: Array<Stuff_Insert_Input>;
  on_conflict?: Maybe<Stuff_On_Conflict>;
};

/** aggregate avg on columns */
export type Stuff_Avg_Fields = {
  __typename?: 'stuff_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stuff" */
export type Stuff_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stuff". All fields are combined with a logical 'AND'. */
export type Stuff_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stuff_Bool_Exp>>>;
  _not?: Maybe<Stuff_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stuff_Bool_Exp>>>;
  grade?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stuff" */
export enum Stuff_Constraint {
  /** unique or primary key constraint */
  StuffPkey = 'stuff_pkey'
}

/** input type for incrementing integer column in table "stuff" */
export type Stuff_Inc_Input = {
  grade?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "stuff" */
export type Stuff_Insert_Input = {
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stuff_Max_Fields = {
  __typename?: 'stuff_max_fields';
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stuff" */
export type Stuff_Max_Order_By = {
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stuff_Min_Fields = {
  __typename?: 'stuff_min_fields';
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stuff" */
export type Stuff_Min_Order_By = {
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stuff" */
export type Stuff_Mutation_Response = {
  __typename?: 'stuff_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stuff>;
};

/** input type for inserting object relation for remote table "stuff" */
export type Stuff_Obj_Rel_Insert_Input = {
  data: Stuff_Insert_Input;
  on_conflict?: Maybe<Stuff_On_Conflict>;
};

/** on conflict condition type for table "stuff" */
export type Stuff_On_Conflict = {
  constraint: Stuff_Constraint;
  update_columns: Array<Stuff_Update_Column>;
  where?: Maybe<Stuff_Bool_Exp>;
};

/** ordering options when selecting data from "stuff" */
export type Stuff_Order_By = {
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "stuff" */
export type Stuff_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "stuff" */
export enum Stuff_Select_Column {
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "stuff" */
export type Stuff_Set_Input = {
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Stuff_Stddev_Fields = {
  __typename?: 'stuff_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stuff" */
export type Stuff_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stuff_Stddev_Pop_Fields = {
  __typename?: 'stuff_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stuff" */
export type Stuff_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stuff_Stddev_Samp_Fields = {
  __typename?: 'stuff_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stuff" */
export type Stuff_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stuff_Sum_Fields = {
  __typename?: 'stuff_sum_fields';
  grade?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stuff" */
export type Stuff_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "stuff" */
export enum Stuff_Update_Column {
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Stuff_Var_Pop_Fields = {
  __typename?: 'stuff_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stuff" */
export type Stuff_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stuff_Var_Samp_Fields = {
  __typename?: 'stuff_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stuff" */
export type Stuff_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stuff_Variance_Fields = {
  __typename?: 'stuff_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stuff" */
export type Stuff_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "balls" */
  balls: Array<Balls>;
  /** fetch aggregated fields from the table: "balls" */
  balls_aggregate: Balls_Aggregate;
  /** fetch data from the table: "balls" using primary key columns */
  balls_by_pk?: Maybe<Balls>;
  /** fetch data from the table: "collaboration_users" */
  collaboration_users: Array<Collaboration_Users>;
  /** fetch aggregated fields from the table: "collaboration_users" */
  collaboration_users_aggregate: Collaboration_Users_Aggregate;
  /** fetch data from the table: "collaboration_users" using primary key columns */
  collaboration_users_by_pk?: Maybe<Collaboration_Users>;
  /** fetch data from the table: "collaborations" */
  collaborations: Array<Collaborations>;
  /** fetch aggregated fields from the table: "collaborations" */
  collaborations_aggregate: Collaborations_Aggregate;
  /** fetch data from the table: "collaborations" using primary key columns */
  collaborations_by_pk?: Maybe<Collaborations>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
  /** fetch data from the table: "form_answers" */
  form_answers: Array<Form_Answers>;
  /** fetch aggregated fields from the table: "form_answers" */
  form_answers_aggregate: Form_Answers_Aggregate;
  /** fetch data from the table: "form_answers" using primary key columns */
  form_answers_by_pk?: Maybe<Form_Answers>;
  /** fetch data from the table: "form_blueprints" */
  form_blueprints: Array<Form_Blueprints>;
  /** fetch aggregated fields from the table: "form_blueprints" */
  form_blueprints_aggregate: Form_Blueprints_Aggregate;
  /** fetch data from the table: "form_blueprints" using primary key columns */
  form_blueprints_by_pk?: Maybe<Form_Blueprints>;
  /** fetch data from the table: "form_categories" */
  form_categories: Array<Form_Categories>;
  /** fetch aggregated fields from the table: "form_categories" */
  form_categories_aggregate: Form_Categories_Aggregate;
  /** fetch data from the table: "form_categories" using primary key columns */
  form_categories_by_pk?: Maybe<Form_Categories>;
  /** fetch data from the table: "form_compound_questions" */
  form_compound_questions: Array<Form_Compound_Questions>;
  /** fetch aggregated fields from the table: "form_compound_questions" */
  form_compound_questions_aggregate: Form_Compound_Questions_Aggregate;
  /** fetch data from the table: "form_compound_questions" using primary key columns */
  form_compound_questions_by_pk?: Maybe<Form_Compound_Questions>;
  /** fetch data from the table: "form_default_list_options" */
  form_default_list_options: Array<Form_Default_List_Options>;
  /** fetch aggregated fields from the table: "form_default_list_options" */
  form_default_list_options_aggregate: Form_Default_List_Options_Aggregate;
  /** fetch data from the table: "form_default_list_options" using primary key columns */
  form_default_list_options_by_pk?: Maybe<Form_Default_List_Options>;
  /** fetch data from the table: "form_default_lists" */
  form_default_lists: Array<Form_Default_Lists>;
  /** fetch aggregated fields from the table: "form_default_lists" */
  form_default_lists_aggregate: Form_Default_Lists_Aggregate;
  /** fetch data from the table: "form_default_lists" using primary key columns */
  form_default_lists_by_pk?: Maybe<Form_Default_Lists>;
  /** fetch data from the table: "form_question_list_options" */
  form_question_list_options: Array<Form_Question_List_Options>;
  /** fetch aggregated fields from the table: "form_question_list_options" */
  form_question_list_options_aggregate: Form_Question_List_Options_Aggregate;
  /** fetch data from the table: "form_question_list_options" using primary key columns */
  form_question_list_options_by_pk?: Maybe<Form_Question_List_Options>;
  /** fetch data from the table: "form_question_list_types" */
  form_question_list_types: Array<Form_Question_List_Types>;
  /** fetch aggregated fields from the table: "form_question_list_types" */
  form_question_list_types_aggregate: Form_Question_List_Types_Aggregate;
  /** fetch data from the table: "form_question_list_types" using primary key columns */
  form_question_list_types_by_pk?: Maybe<Form_Question_List_Types>;
  /** fetch data from the table: "form_question_lists" */
  form_question_lists: Array<Form_Question_Lists>;
  /** fetch aggregated fields from the table: "form_question_lists" */
  form_question_lists_aggregate: Form_Question_Lists_Aggregate;
  /** fetch data from the table: "form_question_lists" using primary key columns */
  form_question_lists_by_pk?: Maybe<Form_Question_Lists>;
  /** fetch data from the table: "form_question_types" */
  form_question_types: Array<Form_Question_Types>;
  /** fetch aggregated fields from the table: "form_question_types" */
  form_question_types_aggregate: Form_Question_Types_Aggregate;
  /** fetch data from the table: "form_question_types" using primary key columns */
  form_question_types_by_pk?: Maybe<Form_Question_Types>;
  /** fetch data from the table: "form_questions" */
  form_questions: Array<Form_Questions>;
  /** fetch aggregated fields from the table: "form_questions" */
  form_questions_aggregate: Form_Questions_Aggregate;
  /** fetch data from the table: "form_questions" using primary key columns */
  form_questions_by_pk?: Maybe<Form_Questions>;
  /** fetch data from the table: "forms" */
  forms: Array<Forms>;
  /** fetch aggregated fields from the table: "forms" */
  forms_aggregate: Forms_Aggregate;
  /** fetch data from the table: "forms" using primary key columns */
  forms_by_pk?: Maybe<Forms>;
  /** fetch data from the table: "organisation_users" */
  organisation_users: Array<Organisation_Users>;
  /** fetch aggregated fields from the table: "organisation_users" */
  organisation_users_aggregate: Organisation_Users_Aggregate;
  /** fetch data from the table: "organisation_users" using primary key columns */
  organisation_users_by_pk?: Maybe<Organisation_Users>;
  /** fetch data from the table: "organisations" */
  organisations: Array<Organisations>;
  /** fetch aggregated fields from the table: "organisations" */
  organisations_aggregate: Organisations_Aggregate;
  /** fetch data from the table: "organisations" using primary key columns */
  organisations_by_pk?: Maybe<Organisations>;
  /** fetch data from the table: "problems" */
  problems: Array<Problems>;
  /** fetch aggregated fields from the table: "problems" */
  problems_aggregate: Problems_Aggregate;
  /** fetch data from the table: "problems" using primary key columns */
  problems_by_pk?: Maybe<Problems>;
  /** fetch data from the table: "questionnaire_answers" */
  questionnaire_answers: Array<Questionnaire_Answers>;
  /** fetch aggregated fields from the table: "questionnaire_answers" */
  questionnaire_answers_aggregate: Questionnaire_Answers_Aggregate;
  /** fetch data from the table: "questionnaire_answers" using primary key columns */
  questionnaire_answers_by_pk?: Maybe<Questionnaire_Answers>;
  /** fetch data from the table: "questionnaire_categories" */
  questionnaire_categories: Array<Questionnaire_Categories>;
  /** fetch aggregated fields from the table: "questionnaire_categories" */
  questionnaire_categories_aggregate: Questionnaire_Categories_Aggregate;
  /** fetch data from the table: "questionnaire_categories" using primary key columns */
  questionnaire_categories_by_pk?: Maybe<Questionnaire_Categories>;
  /** fetch data from the table: "questionnaire_question_parts" */
  questionnaire_question_parts: Array<Questionnaire_Question_Parts>;
  /** fetch aggregated fields from the table: "questionnaire_question_parts" */
  questionnaire_question_parts_aggregate: Questionnaire_Question_Parts_Aggregate;
  /** fetch data from the table: "questionnaire_question_parts" using primary key columns */
  questionnaire_question_parts_by_pk?: Maybe<Questionnaire_Question_Parts>;
  /** fetch data from the table: "questionnaire_questions" */
  questionnaire_questions: Array<Questionnaire_Questions>;
  /** fetch aggregated fields from the table: "questionnaire_questions" */
  questionnaire_questions_aggregate: Questionnaire_Questions_Aggregate;
  /** fetch data from the table: "questionnaire_questions" using primary key columns */
  questionnaire_questions_by_pk?: Maybe<Questionnaire_Questions>;
  /** fetch data from the table: "questionnaire_runs" */
  questionnaire_runs: Array<Questionnaire_Runs>;
  /** fetch aggregated fields from the table: "questionnaire_runs" */
  questionnaire_runs_aggregate: Questionnaire_Runs_Aggregate;
  /** fetch data from the table: "questionnaire_runs" using primary key columns */
  questionnaire_runs_by_pk?: Maybe<Questionnaire_Runs>;
  /** fetch data from the table: "questionnaire_users" */
  questionnaire_users: Array<Questionnaire_Users>;
  /** fetch aggregated fields from the table: "questionnaire_users" */
  questionnaire_users_aggregate: Questionnaire_Users_Aggregate;
  /** fetch data from the table: "questionnaire_users" using primary key columns */
  questionnaire_users_by_pk?: Maybe<Questionnaire_Users>;
  /** fetch data from the table: "questionnaires" */
  questionnaires: Array<Questionnaires>;
  /** fetch aggregated fields from the table: "questionnaires" */
  questionnaires_aggregate: Questionnaires_Aggregate;
  /** fetch data from the table: "questionnaires" using primary key columns */
  questionnaires_by_pk?: Maybe<Questionnaires>;
  /** fetch data from the table: "stuff" */
  stuff: Array<Stuff>;
  /** fetch aggregated fields from the table: "stuff" */
  stuff_aggregate: Stuff_Aggregate;
  /** fetch data from the table: "stuff" using primary key columns */
  stuff_by_pk?: Maybe<Stuff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** fetch data from the table: "zeurder" */
  zeurder: Array<Zeurder>;
  /** fetch aggregated fields from the table: "zeurder" */
  zeurder_aggregate: Zeurder_Aggregate;
  /** fetch data from the table: "zeurder" using primary key columns */
  zeurder_by_pk?: Maybe<Zeurder>;
};


/** subscription root */
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootBallsArgs = {
  distinct_on?: Maybe<Array<Balls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Balls_Order_By>>;
  where?: Maybe<Balls_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBalls_AggregateArgs = {
  distinct_on?: Maybe<Array<Balls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Balls_Order_By>>;
  where?: Maybe<Balls_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBalls_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCollaboration_UsersArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaboration_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaboration_Users_By_PkArgs = {
  collaboration_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCollaborationsArgs = {
  distinct_on?: Maybe<Array<Collaborations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborations_Order_By>>;
  where?: Maybe<Collaborations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaborations_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborations_Order_By>>;
  where?: Maybe<Collaborations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaborations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConfig_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootForm_AnswersArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Answers_Order_By>>;
  where?: Maybe<Form_Answers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Answers_By_PkArgs = {
  form_id: Scalars['uuid'];
  form_question_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_BlueprintsArgs = {
  distinct_on?: Maybe<Array<Form_Blueprints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Blueprints_Order_By>>;
  where?: Maybe<Form_Blueprints_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Blueprints_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Blueprints_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Blueprints_Order_By>>;
  where?: Maybe<Form_Blueprints_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Blueprints_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_CategoriesArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Categories_Order_By>>;
  where?: Maybe<Form_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Compound_QuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Compound_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Compound_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Compound_Questions_Order_By>>;
  where?: Maybe<Form_Compound_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Compound_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Default_List_OptionsArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Default_List_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Default_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_List_Options_Order_By>>;
  where?: Maybe<Form_Default_List_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Default_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Default_ListsArgs = {
  distinct_on?: Maybe<Array<Form_Default_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_Lists_Order_By>>;
  where?: Maybe<Form_Default_Lists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Default_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Default_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Default_Lists_Order_By>>;
  where?: Maybe<Form_Default_Lists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Default_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Question_List_OptionsArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_List_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Options_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Options_Order_By>>;
  where?: Maybe<Form_Question_List_Options_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_List_Options_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Question_List_TypesArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Types_Order_By>>;
  where?: Maybe<Form_Question_List_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_List_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_List_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_List_Types_Order_By>>;
  where?: Maybe<Form_Question_List_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_List_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootForm_Question_ListsArgs = {
  distinct_on?: Maybe<Array<Form_Question_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Lists_Order_By>>;
  where?: Maybe<Form_Question_Lists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Lists_Order_By>>;
  where?: Maybe<Form_Question_Lists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootForm_Question_TypesArgs = {
  distinct_on?: Maybe<Array<Form_Question_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Types_Order_By>>;
  where?: Maybe<Form_Question_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Question_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Question_Types_Order_By>>;
  where?: Maybe<Form_Question_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Question_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootForm_QuestionsArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Form_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Form_Questions_Order_By>>;
  where?: Maybe<Form_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForm_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOrganisation_UsersArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisation_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisation_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOrganisationsArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProblemsArgs = {
  distinct_on?: Maybe<Array<Problems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Problems_Order_By>>;
  where?: Maybe<Problems_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProblems_AggregateArgs = {
  distinct_on?: Maybe<Array<Problems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Problems_Order_By>>;
  where?: Maybe<Problems_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProblems_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_AnswersArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Answers_Order_By>>;
  where?: Maybe<Questionnaire_Answers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Answers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Answers_Order_By>>;
  where?: Maybe<Questionnaire_Answers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Answers_By_PkArgs = {
  question_part_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_CategoriesArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Categories_Order_By>>;
  where?: Maybe<Questionnaire_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Categories_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_Question_PartsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Question_Parts_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Question_Parts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Question_Parts_Order_By>>;
  where?: Maybe<Questionnaire_Question_Parts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Question_Parts_By_PkArgs = {
  question_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_QuestionsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Questions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Questions_Order_By>>;
  where?: Maybe<Questionnaire_Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Questions_By_PkArgs = {
  questionnaire_category_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_RunsArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Runs_Order_By>>;
  where?: Maybe<Questionnaire_Runs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Runs_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Runs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Runs_Order_By>>;
  where?: Maybe<Questionnaire_Runs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Runs_By_PkArgs = {
  id: Scalars['Int'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnaire_UsersArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Users_Order_By>>;
  where?: Maybe<Questionnaire_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaire_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaire_Users_Order_By>>;
  where?: Maybe<Questionnaire_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaire_Users_By_PkArgs = {
  questionnaire_uuid: Scalars['uuid'];
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionnairesArgs = {
  distinct_on?: Maybe<Array<Questionnaires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaires_Order_By>>;
  where?: Maybe<Questionnaires_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaires_AggregateArgs = {
  distinct_on?: Maybe<Array<Questionnaires_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questionnaires_Order_By>>;
  where?: Maybe<Questionnaires_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionnaires_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStuffArgs = {
  distinct_on?: Maybe<Array<Stuff_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stuff_Order_By>>;
  where?: Maybe<Stuff_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStuff_AggregateArgs = {
  distinct_on?: Maybe<Array<Stuff_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stuff_Order_By>>;
  where?: Maybe<Stuff_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStuff_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootZeurderArgs = {
  distinct_on?: Maybe<Array<Zeurder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Zeurder_Order_By>>;
  where?: Maybe<Zeurder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootZeurder_AggregateArgs = {
  distinct_on?: Maybe<Array<Zeurder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Zeurder_Order_By>>;
  where?: Maybe<Zeurder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootZeurder_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregated array relationship */
  accounts_aggregate: Accounts_Aggregate;
  admin: Scalars['Boolean'];
  /** An array relationship */
  collaborations: Array<Collaboration_Users>;
  /** An aggregated array relationship */
  collaborations_aggregate: Collaboration_Users_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['timestamptz']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  has_logged_in: Scalars['Boolean'];
  id: Scalars['uuid'];
  maxOrganisations: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  organisations: Array<Organisation_Users>;
  /** An aggregated array relationship */
  organisations_aggregate: Organisation_Users_Aggregate;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCollaborationsArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCollaborations_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaboration_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaboration_Users_Order_By>>;
  where?: Maybe<Collaboration_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrganisationsArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrganisations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Users_Order_By>>;
  where?: Maybe<Organisation_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  accounts?: Maybe<Accounts_Bool_Exp>;
  admin?: Maybe<Boolean_Comparison_Exp>;
  collaborations?: Maybe<Collaboration_Users_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  familyName?: Maybe<String_Comparison_Exp>;
  givenName?: Maybe<String_Comparison_Exp>;
  has_logged_in?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  maxOrganisations?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organisations?: Maybe<Organisation_Users_Bool_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  maxOrganisations?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: Maybe<Accounts_Arr_Rel_Insert_Input>;
  admin?: Maybe<Scalars['Boolean']>;
  collaborations?: Maybe<Collaboration_Users_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  has_logged_in?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  maxOrganisations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organisations?: Maybe<Organisation_Users_Arr_Rel_Insert_Input>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  maxOrganisations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  familyName?: Maybe<Order_By>;
  givenName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  maxOrganisations?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  maxOrganisations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  familyName?: Maybe<Order_By>;
  givenName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  maxOrganisations?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  accounts_aggregate?: Maybe<Accounts_Aggregate_Order_By>;
  admin?: Maybe<Order_By>;
  collaborations_aggregate?: Maybe<Collaboration_Users_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  familyName?: Maybe<Order_By>;
  givenName?: Maybe<Order_By>;
  has_logged_in?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  maxOrganisations?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organisations_aggregate?: Maybe<Organisation_Users_Aggregate_Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FamilyName = 'familyName',
  /** column name */
  GivenName = 'givenName',
  /** column name */
  HasLoggedIn = 'has_logged_in',
  /** column name */
  Id = 'id',
  /** column name */
  MaxOrganisations = 'maxOrganisations',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  has_logged_in?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  maxOrganisations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  maxOrganisations?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FamilyName = 'familyName',
  /** column name */
  GivenName = 'givenName',
  /** column name */
  HasLoggedIn = 'has_logged_in',
  /** column name */
  Id = 'id',
  /** column name */
  MaxOrganisations = 'maxOrganisations',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  maxOrganisations?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  maxOrganisations?: Maybe<Order_By>;
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

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};


/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "verification_requests" */
export type Verification_Requests_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Verification_Requests_Max_Order_By>;
  min?: Maybe<Verification_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verification_requests" */
export type Verification_Requests_Arr_Rel_Insert_Input = {
  data: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Verification_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey',
  /** unique or primary key constraint */
  VerificationRequestsTokenKey = 'verification_requests_token_key'
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "verification_requests" */
export type Verification_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "verification_requests" */
export type Verification_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Verification_Requests>;
};

/** input type for inserting object relation for remote table "verification_requests" */
export type Verification_Requests_Obj_Rel_Insert_Input = {
  data: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "verification_requests" */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "verification_requests" */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "zeurder" */
export type Zeurder = {
  __typename?: 'zeurder';
  blaat: Scalars['String'];
  poepies?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "zeurder" */
export type Zeurder_Aggregate = {
  __typename?: 'zeurder_aggregate';
  aggregate?: Maybe<Zeurder_Aggregate_Fields>;
  nodes: Array<Zeurder>;
};

/** aggregate fields of "zeurder" */
export type Zeurder_Aggregate_Fields = {
  __typename?: 'zeurder_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Zeurder_Max_Fields>;
  min?: Maybe<Zeurder_Min_Fields>;
};


/** aggregate fields of "zeurder" */
export type Zeurder_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Zeurder_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "zeurder" */
export type Zeurder_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Zeurder_Max_Order_By>;
  min?: Maybe<Zeurder_Min_Order_By>;
};

/** input type for inserting array relation for remote table "zeurder" */
export type Zeurder_Arr_Rel_Insert_Input = {
  data: Array<Zeurder_Insert_Input>;
  on_conflict?: Maybe<Zeurder_On_Conflict>;
};

/** Boolean expression to filter rows from the table "zeurder". All fields are combined with a logical 'AND'. */
export type Zeurder_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Zeurder_Bool_Exp>>>;
  _not?: Maybe<Zeurder_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Zeurder_Bool_Exp>>>;
  blaat?: Maybe<String_Comparison_Exp>;
  poepies?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "zeurder" */
export enum Zeurder_Constraint {
  /** unique or primary key constraint */
  MekkerPkey = 'mekker_pkey'
}

/** input type for inserting data into table "zeurder" */
export type Zeurder_Insert_Input = {
  blaat?: Maybe<Scalars['String']>;
  poepies?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Zeurder_Max_Fields = {
  __typename?: 'zeurder_max_fields';
  blaat?: Maybe<Scalars['String']>;
  poepies?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "zeurder" */
export type Zeurder_Max_Order_By = {
  blaat?: Maybe<Order_By>;
  poepies?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Zeurder_Min_Fields = {
  __typename?: 'zeurder_min_fields';
  blaat?: Maybe<Scalars['String']>;
  poepies?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "zeurder" */
export type Zeurder_Min_Order_By = {
  blaat?: Maybe<Order_By>;
  poepies?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "zeurder" */
export type Zeurder_Mutation_Response = {
  __typename?: 'zeurder_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Zeurder>;
};

/** input type for inserting object relation for remote table "zeurder" */
export type Zeurder_Obj_Rel_Insert_Input = {
  data: Zeurder_Insert_Input;
  on_conflict?: Maybe<Zeurder_On_Conflict>;
};

/** on conflict condition type for table "zeurder" */
export type Zeurder_On_Conflict = {
  constraint: Zeurder_Constraint;
  update_columns: Array<Zeurder_Update_Column>;
  where?: Maybe<Zeurder_Bool_Exp>;
};

/** ordering options when selecting data from "zeurder" */
export type Zeurder_Order_By = {
  blaat?: Maybe<Order_By>;
  poepies?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "zeurder" */
export type Zeurder_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "zeurder" */
export enum Zeurder_Select_Column {
  /** column name */
  Blaat = 'blaat',
  /** column name */
  Poepies = 'poepies',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "zeurder" */
export type Zeurder_Set_Input = {
  blaat?: Maybe<Scalars['String']>;
  poepies?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "zeurder" */
export enum Zeurder_Update_Column {
  /** column name */
  Blaat = 'blaat',
  /** column name */
  Poepies = 'poepies',
  /** column name */
  Uuid = 'uuid'
}

export type NextAuthUserFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'name' | 'email' | 'admin'>
  & { image: Users['picture'] }
  & { organisations: Array<(
    { __typename?: 'organisation_users' }
    & CtaOrganisationUsersFragment
  )> }
);

export type CtaOrganisationUsersFragment = (
  { __typename?: 'organisation_users' }
  & Pick<Organisation_Users, 'organisationAdmin' | 'questionnaireAdmin' | 'questionnaireUser' | 'otisAdmin' | 'otisUser' | 'qollaborUser' | 'qollaborAdmin'>
  & { organisation: (
    { __typename?: 'organisations' }
    & Pick<Organisations, 'id' | 'name'>
  ) }
);

export type NextAuthAccountFragment = (
  { __typename?: 'accounts' }
  & Pick<Accounts, 'id'>
  & { userId: Accounts['user_id'], providerId: Accounts['provider_id'], providerType: Accounts['provider_type'], providerAccountId: Accounts['provider_account_id'], refreshToken: Accounts['refresh_token'], accessToken: Accounts['access_token'], accessTokenExpires: Accounts['access_token_expires'], compoundId: Accounts['compound_id'] }
);

export type GetAnyUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetAnyUserByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export type GetUserByEmailAndNameAndImageQueryVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
}>;


export type GetUserByEmailAndNameAndImageQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export type GetUserProviderByAccountIdQueryVariables = Exact<{
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
}>;


export type GetUserProviderByAccountIdQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export type CreateAccountMutationVariables = Exact<{
  userId: Scalars['uuid'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['timestamptz']>;
  compoundId: Scalars['String'];
}>;


export type CreateAccountMutation = (
  { __typename?: 'mutation_root' }
  & { insert_accounts_one?: Maybe<(
    { __typename?: 'accounts' }
    & NextAuthAccountFragment
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & NextAuthUserFragment
  )> }
);

export const CtaOrganisationUsersFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export const NextAuthUserFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export const NextAuthAccountFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"accounts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"userId"},"name":{"kind":"Name","value":"user_id"}},{"kind":"Field","alias":{"kind":"Name","value":"providerId"},"name":{"kind":"Name","value":"provider_id"}},{"kind":"Field","alias":{"kind":"Name","value":"providerType"},"name":{"kind":"Name","value":"provider_type"}},{"kind":"Field","alias":{"kind":"Name","value":"providerAccountId"},"name":{"kind":"Name","value":"provider_account_id"}},{"kind":"Field","alias":{"kind":"Name","value":"refreshToken"},"name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","alias":{"kind":"Name","value":"accessToken"},"name":{"kind":"Name","value":"access_token"}},{"kind":"Field","alias":{"kind":"Name","value":"accessTokenExpires"},"name":{"kind":"Name","value":"access_token_expires"}},{"kind":"Field","alias":{"kind":"Name","value":"compoundId"},"name":{"kind":"Name","value":"compound_id"}}]}}]};
export const GetAnyUserByEmailDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAnyUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useGetAnyUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetAnyUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnyUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnyUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAnyUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetAnyUserByEmailQuery, GetAnyUserByEmailQueryVariables>) {
        return Apollo.useQuery<GetAnyUserByEmailQuery, GetAnyUserByEmailQueryVariables>(GetAnyUserByEmailDocument, baseOptions);
      }
export function useGetAnyUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnyUserByEmailQuery, GetAnyUserByEmailQueryVariables>) {
          return Apollo.useLazyQuery<GetAnyUserByEmailQuery, GetAnyUserByEmailQueryVariables>(GetAnyUserByEmailDocument, baseOptions);
        }
export type GetAnyUserByEmailQueryHookResult = ReturnType<typeof useGetAnyUserByEmailQuery>;
export type GetAnyUserByEmailLazyQueryHookResult = ReturnType<typeof useGetAnyUserByEmailLazyQuery>;
export type GetAnyUserByEmailQueryResult = Apollo.QueryResult<GetAnyUserByEmailQuery, GetAnyUserByEmailQueryVariables>;
export const GetUserByEmailDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"has_logged_in"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
        return Apollo.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
      }
export function useGetUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
        }
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>;
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>;
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const GetUserByEmailAndNameAndImageDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserByEmailAndNameAndImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"has_logged_in"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"picture"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useGetUserByEmailAndNameAndImageQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailAndNameAndImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailAndNameAndImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailAndNameAndImageQuery({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useGetUserByEmailAndNameAndImageQuery(baseOptions: Apollo.QueryHookOptions<GetUserByEmailAndNameAndImageQuery, GetUserByEmailAndNameAndImageQueryVariables>) {
        return Apollo.useQuery<GetUserByEmailAndNameAndImageQuery, GetUserByEmailAndNameAndImageQueryVariables>(GetUserByEmailAndNameAndImageDocument, baseOptions);
      }
export function useGetUserByEmailAndNameAndImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailAndNameAndImageQuery, GetUserByEmailAndNameAndImageQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByEmailAndNameAndImageQuery, GetUserByEmailAndNameAndImageQueryVariables>(GetUserByEmailAndNameAndImageDocument, baseOptions);
        }
export type GetUserByEmailAndNameAndImageQueryHookResult = ReturnType<typeof useGetUserByEmailAndNameAndImageQuery>;
export type GetUserByEmailAndNameAndImageLazyQueryHookResult = ReturnType<typeof useGetUserByEmailAndNameAndImageLazyQuery>;
export type GetUserByEmailAndNameAndImageQueryResult = Apollo.QueryResult<GetUserByEmailAndNameAndImageQuery, GetUserByEmailAndNameAndImageQueryVariables>;
export const GetUserProviderByAccountIdDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserProviderByAccountId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerAccountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"has_logged_in"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"accounts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"provider_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"provider_account_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerAccountId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useGetUserProviderByAccountIdQuery__
 *
 * To run a query within a React component, call `useGetUserProviderByAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProviderByAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProviderByAccountIdQuery({
 *   variables: {
 *      providerId: // value for 'providerId'
 *      providerAccountId: // value for 'providerAccountId'
 *   },
 * });
 */
export function useGetUserProviderByAccountIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserProviderByAccountIdQuery, GetUserProviderByAccountIdQueryVariables>) {
        return Apollo.useQuery<GetUserProviderByAccountIdQuery, GetUserProviderByAccountIdQueryVariables>(GetUserProviderByAccountIdDocument, baseOptions);
      }
export function useGetUserProviderByAccountIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProviderByAccountIdQuery, GetUserProviderByAccountIdQueryVariables>) {
          return Apollo.useLazyQuery<GetUserProviderByAccountIdQuery, GetUserProviderByAccountIdQueryVariables>(GetUserProviderByAccountIdDocument, baseOptions);
        }
export type GetUserProviderByAccountIdQueryHookResult = ReturnType<typeof useGetUserProviderByAccountIdQuery>;
export type GetUserProviderByAccountIdLazyQueryHookResult = ReturnType<typeof useGetUserProviderByAccountIdLazyQuery>;
export type GetUserProviderByAccountIdQueryResult = Apollo.QueryResult<GetUserProviderByAccountIdQuery, GetUserProviderByAccountIdQueryVariables>;
export const CreateUserDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"picture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"has_logged_in"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"users_email_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"},{"kind":"EnumValue","value":"picture"},{"kind":"EnumValue","value":"has_logged_in"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateAccountDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerAccountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessTokenExpires"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"compoundId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_accounts_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"provider_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"provider_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"provider_account_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerAccountId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"refresh_token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"access_token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"access_token_expires"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessTokenExpires"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"compound_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"compoundId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"accounts_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"access_token"},{"kind":"EnumValue","value":"access_token_expires"},{"kind":"EnumValue","value":"refresh_token"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthAccount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"accounts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"userId"},"name":{"kind":"Name","value":"user_id"}},{"kind":"Field","alias":{"kind":"Name","value":"providerId"},"name":{"kind":"Name","value":"provider_id"}},{"kind":"Field","alias":{"kind":"Name","value":"providerType"},"name":{"kind":"Name","value":"provider_type"}},{"kind":"Field","alias":{"kind":"Name","value":"providerAccountId"},"name":{"kind":"Name","value":"provider_account_id"}},{"kind":"Field","alias":{"kind":"Name","value":"refreshToken"},"name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","alias":{"kind":"Name","value":"accessToken"},"name":{"kind":"Name","value":"access_token"}},{"kind":"Field","alias":{"kind":"Name","value":"accessTokenExpires"},"name":{"kind":"Name","value":"access_token_expires"}},{"kind":"Field","alias":{"kind":"Name","value":"compoundId"},"name":{"kind":"Name","value":"compound_id"}}]}}]};
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      providerId: // value for 'providerId'
 *      providerType: // value for 'providerType'
 *      providerAccountId: // value for 'providerAccountId'
 *      refreshToken: // value for 'refreshToken'
 *      accessToken: // value for 'accessToken'
 *      accessTokenExpires: // value for 'accessTokenExpires'
 *      compoundId: // value for 'compoundId'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, baseOptions);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const GetUsersDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NextAuthUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NextAuthUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"organisations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAOrganisationUsers"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAOrganisationUsers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"organisation_users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organisationAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaireUser"}},{"kind":"Field","name":{"kind":"Name","value":"otisAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"otisUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborUser"}},{"kind":"Field","name":{"kind":"Name","value":"qollaborAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"organisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]};

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    