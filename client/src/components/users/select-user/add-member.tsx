"use client";
import { MultiAutocompleteController } from "@/components/form/controller-autocomplete/control-autocomplete";
import { useAppDispatch } from "@/features/store";
import { fetchOtherUserAsync } from "@/features/user/handle-users/user.action";
import { BaseUser } from "@/type/user.type";
import { Box, Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./add-member.module.css";

type User = {
  id: number;
  username: string;
  email: string;
};

type AddMembersForm = {
  members: User[];
};
export default function SelectUsers() {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<AddMembersForm>({
    defaultValues: {
      members: [],
    },
  });

  const loadUsers = useCallback(
    async (search: string): Promise<BaseUser[]> => {
      const response = await dispatch(
        fetchOtherUserAsync({ page: 1, limit: 10, search: search }),
      ).unwrap();

      return response.data;
    },
    [dispatch],
  );


  const onSubmit : SubmitHandler<AddMembersForm>= (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={2} className={styles.section1}>
        <Box className={styles.input}>
          <MultiAutocompleteController
            name="members"
            control={control}
            label="Add Members"
            placeholder="Search users..."
            loadOptions={loadUsers}
            getOptionLabel={(user) => user.username}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
        </Box>

        <Button type="submit" variant="contained">
          Add Members
        </Button>
      </Stack>
    </form>
  );
}
