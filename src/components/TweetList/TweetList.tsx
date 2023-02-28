import { List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useGetAllTweetsQuery } from "../../redux/twitterApi";
import Tweet from "../Tweet/Tweet";

const TweetList = () => {

  const { data } = useGetAllTweetsQuery();

  const userId = localStorage.getItem('user_id')

  return (
    <List>
      {data && data.tweets.map((el) => {
        return (
          <ListItem key={el._id}>
            <Tweet tweet={el} isLiked={el.likes.find((user) => user._id === userId) ? true : false}/>
          </ListItem>
        )
      })}
    </List>
  );
}

export default TweetList;