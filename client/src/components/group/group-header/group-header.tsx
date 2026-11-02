"use client";
import { Button, CardMedia, Stack, Typography } from "@mui/material";
import styles from "./group-header.module.css";
import { BaseUser } from "@/type/user.type";
import { useAppSelector } from "@/features/store";

interface GroupHeader {
  imageUrl?: string;
  title: string;
  Owner: BaseUser;
}

const placeholder =
  "https://t3.ftcdn.net/jpg/20/67/68/02/240_F_2067680238_J9xDNQQH4P0AX1VDfPTSU7N0GknjZmqD.jpg";
export default function GroupHeader({ header }: { header: GroupHeader }) {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <Stack className={styles.container} direction='row'>
      <Stack className={styles.section1} direction="row" spacing={2}>
        <CardMedia
          component={"img"}
          image={placeholder}
          className={styles.image}
          alt="groupImage"
        />
        <Stack>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            {header.title}
          </Typography>
          <Typography variant="body1" color="text.Secondary">
            Created By
            <b>
              {header?.Owner?.id === user?.id ? "You" : header.Owner.username}
            </b>
          </Typography>
        </Stack>
      </Stack>
      <Button color="success" variant="outlined">
        + Add Expense
      </Button>
    </Stack>
  );
}
