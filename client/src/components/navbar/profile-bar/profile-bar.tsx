"use client";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { Avatar, Button, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useRouter } from "next/navigation";
import { logoutMeAsync } from "@/features/auth/handle-auth/auth.action";
import { enqueueSnackbar } from "notistack";
import { getErrorMessage } from "@/api/api";

export default function ProfileBar() {
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter()
  const dispatch = useAppDispatch()


  async function logout() {
    try{
      await dispatch(logoutMeAsync()).unwrap()
      enqueueSnackbar('Logout Successful', {variant : 'success'})
      router.replace("/")
    } catch (error) {
      enqueueSnackbar(getErrorMessage(error))
    }
  }

  if (!user) {
    return (
      <ListItem  onClick ={() => router.push("/login")}>
        <ListItemIcon>
          <PowerSettingsNewIcon sx={{ fontSize: "large" }} />
        </ListItemIcon>
        <ListItemText>SignUp</ListItemText>
      </ListItem>
    );
  }
  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction={'row'} sx={{alignItems:'center'}}>
        <ListItemIcon>
            <Avatar sizes="small">{user.username.charAt(0)}</Avatar>
        </ListItemIcon>
        

        <ListItemText>{user.username}</ListItemText>
      </Stack>
      <Button variant="contained" sx={{borderRadius:'1rem'}} color='success' onClick={logout}>
        Logout
      </Button>
    </Stack>
  );
}
