export interface ITweet {
  tweets: string[];
  likes: User[];
  _id: string;
  user: User;
  text: string;
  image?: string;
  date: string;
  _v: number
}

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}