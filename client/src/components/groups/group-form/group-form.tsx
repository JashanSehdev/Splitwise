"use client";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import styles from "./group-form.module.css";
import EditIcon from "@mui/icons-material/Edit";
import { GroupInput, groupSchema } from "./group-form.type";
import ControlField from "@/components/form/controller-field/control-field";
import CloudinaryUploadController from "@/components/form/upload-widget/upload-widget";
import { useAppDispatch } from "@/features/store";
import { createGroupAsync } from "@/features/group/handle-group/group.action";
import { zodResolver } from "@hookform/resolvers/zod";

type GropuFormProp = {
  onClose?: () => void;
};
export default function GroupForm({ onClose }: GropuFormProp) {
  const { control, handleSubmit, reset } = useForm<GroupInput>({
    resolver: zodResolver(groupSchema),
    defaultValues : {
      title :'',
      description : ''
    }
  });
  const dispatch = useAppDispatch()

  const handleClose = () => {
    reset();
    if (onClose) onClose();
  };

  const onSubmit: SubmitHandler<GroupInput> = (data) => {
    dispatch(createGroupAsync(data))
    handleClose()
  }


  //image
  const dummyImage =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  const imageUrl = useWatch({
    control,
    name : 'imageUrl'
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} className={styles.container}>
        <Box className={styles.edit_image}>
          <Box
            component="img"
            className={styles.image}
            src={imageUrl ?? dummyImage}
          />
          <CloudinaryUploadController control={control} name="imageUrl">
            <IconButton className={styles.editButton}>
              <EditIcon />
            </IconButton>
          </CloudinaryUploadController>
        </Box>

        <ControlField
          name="title"
          type="text"
          label="Group Name"
          placeholder="eg : Manali Trip"
          control={control}
        />

        <ControlField
          name="description"
          type="text"
          label="description"
          placeholder="eg : Boys Trip"
          control={control}
        />

        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained">
            Create
          </Button>

          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
