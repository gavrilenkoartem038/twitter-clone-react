export interface IUser {
  tweets: string[];
  likedTweets: string[];
  subscriptions: string[];
  followers: string[];
  blocked: boolean;
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}