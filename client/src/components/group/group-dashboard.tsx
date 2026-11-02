
import { Stack } from "@mui/material";
import styles from "./group-dashboard.module.css";
import { GroupDetails } from "@/type/group.type";
import GroupHeader from "./group-header/group-header";
import GroupMain from "./group-main/group-main";

export default function GroupDashboard({ group }: { group: GroupDetails }) {
  return (
    <Stack className={styles.container}>
        <GroupHeader header={group} />
        <GroupMain />
    </Stack>
  );
}
