import { ITweet } from "./Tweet.types";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getTweetTime } from "../../utils/utils";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useAddLikeMutation, useDeleteTweetMutation, useRemoveLikeMutation } from "../../redux/twitterApi";

interface Props {
  tweet: ITweet;
  isLiked: boolean
}

const Tweet = ({ tweet, isLiked }: Props) => {
  const [deleteTweet, response] = useDeleteTweetMutation();
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();

  const { user, date, text, likes, image, _id: id } = tweet;

  const [activeLike, setActiveLike] = useState(isLiked);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteTweet(id);
  }

  const toggleLike = async () => {
    const userId = localStorage.getItem('user_id') as string;
    console.log(likes, userId);
    if (likes.find((user) => user._id === userId)) {
      await removeLike(id);
    } else {
      await addLike(id);
    }
  }

  return (
    <Card sx={{ maxWidth: 700, width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.username.slice(0, 1).toLocaleUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={`${user.firstName} ${user.lastName}`}
        subheader={getTweetTime(date)}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      {image && <CardMedia
        component="img"
        image={image}
        alt="image"
        sx={{ width: 'auto', margin: '0 auto', maxWidth: '100%', maxHeight: '500px' }}
      />}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleLike}>
          {isLiked ?
            <FavoriteIcon htmlColor="#f44336" />
            :
            <FavoriteBorderIcon />
          }
          <div>{likes.length}</div>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Tweet;
