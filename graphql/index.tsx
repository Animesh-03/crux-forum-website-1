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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateEventInputType = {
  name: Scalars['String'];
  date: Scalars['String'];
  venue: Scalars['String'];
  meetLink: Scalars['String'];
};

export type CreateNoticeInputType = {
  title: Scalars['String'];
  body: Scalars['String'];
  time: Scalars['String'];
  topics?: Maybe<Array<Scalars['String']>>;
  attachedImages?: Maybe<Array<Scalars['String']>>;
  attachedFiles?: Maybe<Array<Scalars['String']>>;
  isEvent: Scalars['Boolean'];
};

export type CreateTestType = {
  name: Scalars['String'];
};


export type EditProfileInputType = {
  bio?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<EditProfilePreferencesType>;
};

export type EditProfilePreferencesType = {
  darkmode: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
  roundup: Scalars['Boolean'];
};

export type EventType = {
  __typename?: 'EventType';
  _id: Scalars['ID'];
  name: Scalars['String'];
  date: Scalars['String'];
  venue: Scalars['String'];
  linkedNotice: NoticeType;
  meetLink: Scalars['String'];
  reportedBy?: Maybe<Array<UserType>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteSingleReply: Scalars['Boolean'];
  deleteSingleTest: Scalars['Boolean'];
  createTest: Scalars['Boolean'];
  deleteSingleTopic: Scalars['Boolean'];
  deleteSingleEvent: Scalars['Boolean'];
  reportEvent: Scalars['Boolean'];
  deleteSingleUser: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  subscribeTopic: Scalars['Boolean'];
  unsubscribeTopic: Scalars['Boolean'];
  subscribeEvent: Scalars['Boolean'];
  unsubscribeEvent: Scalars['Boolean'];
  deleteSingleNotice: Scalars['Boolean'];
  like: Scalars['Boolean'];
  dislike: Scalars['Boolean'];
  share: Scalars['Boolean'];
  report: Scalars['Boolean'];
  createNotice: Scalars['Boolean'];
  GoogleLogin: Scalars['Boolean'];
  logout: Scalars['Boolean'];
};


export type MutationDeleteSingleReplyArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleTestArgs = {
  id: Scalars['String'];
};


export type MutationCreateTestArgs = {
  input: CreateTestType;
};


export type MutationDeleteSingleTopicArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleEventArgs = {
  id: Scalars['String'];
};


export type MutationReportEventArgs = {
  eventId: Scalars['String'];
};


export type MutationDeleteSingleUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: EditProfileInputType;
};


export type MutationSubscribeTopicArgs = {
  topicID: Scalars['String'];
};


export type MutationUnsubscribeTopicArgs = {
  topicID: Scalars['String'];
};


export type MutationSubscribeEventArgs = {
  eventId: Scalars['String'];
};


export type MutationUnsubscribeEventArgs = {
  eventId: Scalars['String'];
};


export type MutationDeleteSingleNoticeArgs = {
  noticeId: Scalars['String'];
};


export type MutationLikeArgs = {
  noticeId: Scalars['String'];
};


export type MutationDislikeArgs = {
  noticeId: Scalars['String'];
};


export type MutationShareArgs = {
  noticeId: Scalars['String'];
};


export type MutationReportArgs = {
  noticeId: Scalars['String'];
};


export type MutationCreateNoticeArgs = {
  events: Array<CreateEventInputType>;
  notice: CreateNoticeInputType;
};


export type MutationGoogleLoginArgs = {
  input: SocialAuthInput;
};

export type NoticeType = {
  __typename?: 'NoticeType';
  _id: Scalars['ID'];
  postedBy: UserType;
  title: Scalars['String'];
  body: Scalars['String'];
  time: Scalars['String'];
  topics?: Maybe<Array<TopicType>>;
  likedBy?: Maybe<Array<UserType>>;
  dislikedBy?: Maybe<Array<UserType>>;
  sharedBy?: Maybe<Array<UserType>>;
  reportedBy?: Maybe<Array<UserType>>;
  attachedImages?: Maybe<Array<Scalars['String']>>;
  attachedFiles?: Maybe<Array<Scalars['String']>>;
  isEvent: Scalars['Boolean'];
  linkedEvents: Array<EventType>;
  replies?: Maybe<Array<ReplyType>>;
  likeCount: Scalars['Float'];
  dislikeCount: Scalars['Float'];
  shareCount: Scalars['Float'];
  reportCount: Scalars['Float'];
  userReaction: Scalars['Float'];
};

export type PaginatedResponseOfEventType = {
  __typename?: 'PaginatedResponseOfEventType';
  data: Array<EventType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfNoticeType = {
  __typename?: 'PaginatedResponseOfNoticeType';
  data: Array<NoticeType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfReplyType = {
  __typename?: 'PaginatedResponseOfReplyType';
  data: Array<ReplyType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfTestType = {
  __typename?: 'PaginatedResponseOfTestType';
  data: Array<TestType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfTopicType = {
  __typename?: 'PaginatedResponseOfTopicType';
  data: Array<TopicType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfUserType = {
  __typename?: 'PaginatedResponseOfUserType';
  data: Array<UserType>;
  count: Scalars['Int'];
  hasNext: Scalars['Boolean'];
};

export type PreferencesType = {
  __typename?: 'PreferencesType';
  darkmode?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<Scalars['Boolean']>;
  roundup?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getSingleReply: ReplyType;
  getAllReplies: PaginatedResponseOfReplyType;
  getSingleTest: TestType;
  getAllTests: PaginatedResponseOfTestType;
  getSingleTopic: TopicType;
  getAllTopics: PaginatedResponseOfTopicType;
  getSingleEvent: EventType;
  getAllEvents: PaginatedResponseOfEventType;
  getSingleUser: UserType;
  getAllUsers: PaginatedResponseOfUserType;
  getSubscribedTopics: Array<TopicType>;
  getNotSubscribedTopics: Array<TopicType>;
  getSingleNotice: NoticeType;
  getAllNotices: PaginatedResponseOfNoticeType;
  getNoticesByTopic: Array<Maybe<NoticeType>>;
  getUser?: Maybe<UserType>;
  GoogleAuthUrl: Scalars['String'];
  getFileURL: Array<Scalars['String']>;
};


export type QueryGetSingleReplyArgs = {
  id: Scalars['String'];
};


export type QueryGetAllRepliesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetSingleTestArgs = {
  id: Scalars['String'];
};


export type QueryGetAllTestsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetSingleTopicArgs = {
  id: Scalars['String'];
};


export type QueryGetAllTopicsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetSingleEventArgs = {
  id: Scalars['String'];
};


export type QueryGetAllEventsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetSingleUserArgs = {
  id: Scalars['String'];
};


export type QueryGetAllUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetSingleNoticeArgs = {
  id: Scalars['String'];
};


export type QueryGetAllNoticesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGetNoticesByTopicArgs = {
  topicId: Scalars['String'];
};


export type QueryGetFileUrlArgs = {
  filenames: Array<Scalars['String']>;
};

export type ReplyType = {
  __typename?: 'ReplyType';
  _id: Scalars['ID'];
  commentedBy: UserType;
  time: Scalars['DateTime'];
  replies?: Maybe<Array<ReplyType>>;
  repliedTo: UserType;
};

export type SocialAuthInput = {
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type TestType = {
  __typename?: 'TestType';
  _id: Scalars['ID'];
  name: Scalars['String'];
  topics?: Maybe<Array<TopicType>>;
};

export type TopicType = {
  __typename?: 'TopicType';
  _id: Scalars['ID'];
  name: Scalars['String'];
  about: Scalars['String'];
  image: Scalars['String'];
  color: Scalars['String'];
  subscribedToTopic: Scalars['Boolean'];
};

export type UserType = {
  __typename?: 'UserType';
  _id: Scalars['ID'];
  name: Scalars['String'];
  batch: Scalars['Int'];
  email: Scalars['String'];
  phone: Scalars['String'];
  discord: Scalars['String'];
  bio: Scalars['String'];
  subscriptions?: Maybe<Array<TopicType>>;
  role: Scalars['String'];
  profilePicture: Scalars['String'];
  subscribedEvents?: Maybe<Array<EventType>>;
  preferences: PreferencesType;
  posted?: Maybe<Array<NoticeType>>;
  banned?: Maybe<Scalars['Boolean']>;
};

export type GoogleAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleAuthUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'GoogleAuthUrl'>
);

export type GoogleLoginMutationVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GoogleLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'GoogleLogin'>
);

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, '_id' | 'email' | 'name'>
  )> }
);


export const GoogleAuthUrlDocument = gql`
    query GoogleAuthUrl {
  GoogleAuthUrl
}
    `;

/**
 * __useGoogleAuthUrlQuery__
 *
 * To run a query within a React component, call `useGoogleAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, options);
      }
export function useGoogleAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, options);
        }
export type GoogleAuthUrlQueryHookResult = ReturnType<typeof useGoogleAuthUrlQuery>;
export type GoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGoogleAuthUrlLazyQuery>;
export type GoogleAuthUrlQueryResult = Apollo.QueryResult<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>;
export const GoogleLoginDocument = gql`
    mutation GoogleLogin($input: SocialAuthInput!) {
  GoogleLogin(input: $input)
}
    `;
export type GoogleLoginMutationFn = Apollo.MutationFunction<GoogleLoginMutation, GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLoginMutation, GoogleLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument, options);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<GoogleLoginMutation, GoogleLoginMutationVariables>;
export const GetUserDocument = gql`
    query GetUser {
  getUser {
    _id
    email
    name
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;