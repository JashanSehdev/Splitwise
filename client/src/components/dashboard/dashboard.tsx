import { Stack } from "@mui/material";

import styles from "./dashboard.module.css";
import DisplayStats from "./display-stats/display-stats";
import DisplayGroups from "./display-groups/display-group";
export default function Dashboard() {
  return (
    <Stack className={styles.container}>
        <DisplayStats/>
        <DisplayGroups/>
    </Stack>
  )
}
