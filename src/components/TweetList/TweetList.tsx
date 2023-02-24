import { List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useGetAllTweetsQuery } from "../../redux/twitterApi";
import Tweet from "../Tweet/Tweet";

const TweetList = () => {

  const { data } = useGetAllTweetsQuery();

  return (
    <List>
      {data && data.tweets.map((el) => {
        return (
          <ListItem key={el._id}>
            <Tweet tweet={el}/>
          </ListItem>
        )
      })}
    </List>
  );
}

export default TweetList;