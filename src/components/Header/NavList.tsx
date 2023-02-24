import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { getToken } from "../../utils/tokenUtils";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/reducers/commonSlice";

const NavList = () => {

  const token = useAppSelector((state) => state.common.token);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const listWithAuth = [
    {
      text: 'Home',
      image: HomeIcon,
      onClick: () => navigate('/')
    },
    {
      text: 'Profile',
      image: AccountBoxIcon,
      onClick: () => navigate('/profile')
    },
    {
      text: 'Logout',
      image: LogoutIcon,
      onClick: () => {
        localStorage.removeItem('app_token')
        dispatch(setToken(null))
        navigate('/login')
      }
    }
  ];

  const listWithoutAuth = [
    {
      text: 'Login',
      image: LoginIcon,
      onClick: () => navigate('/login')
    },
    {
      text: 'Sing Up',
      image: AppRegistrationIcon,
      onClick: () => navigate('/sing-up')
    },
  ];

  return ( 
    <Box sx={{ overflow: 'hidden' }}>
          <List>
            {(getToken() ? listWithAuth : listWithoutAuth).map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>
                    <item.image />
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ display: { sm: 'flex', xs: 'none'}}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
   );
}
 
export default NavList;