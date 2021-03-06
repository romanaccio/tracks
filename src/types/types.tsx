export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type TabStackParamList = {
  ListDetail: ListDetailStackParamList;
  Account: undefined;
  TrackCreate: undefined;
};

export type ListDetailStackParamList = {
  TrackList: undefined;
  TrackDetail: { _id: string } | undefined;
};

export type MainStackParamList = {
  Auth: AuthStackParamList;
  Tab: TabStackParamList;
};
