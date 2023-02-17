export interface ITweet {
  tweets: string[];
  likedTweets: string[];
  _id: string;
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  },
  text: string;
  image?: string;
  date: Date;
  _v: number
}