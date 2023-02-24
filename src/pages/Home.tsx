import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddTweetForm from "../components/AddTweetForm/AddTweetForm";
import TweetList from "../components/TweetList/TweetList";
import { useAppSelector } from "../store/hooks";

const Home = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.common.token)

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [token, navigate])

  return (
    <>
      <AddTweetForm />
      <TweetList />
    </>
  );
}

export default Home;