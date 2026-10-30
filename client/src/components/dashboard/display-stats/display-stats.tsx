import { Stack } from "@mui/material";
import StatCard from "../stat-card/stat-card";
import styles from './display-stats.module.css'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function DisplayStats() {
  return (
    <Stack>
      <Stack
        direction={"row"}
        useFlexGap
        className={styles.container}
        spacing={2}
      >
        <StatCard
          stat={{
            title: "Total Balance",
            amount: 500,
            caption: "this is the caption",
            Icon: AttachMoneyIcon,
            currency: "₹",
          }}
        />

        <StatCard
          stat={{
            title: "You Owe",
            amount: 500,
            caption: "this is the        caption",
            Icon: TrendingDownIcon,
            currency: "₹",
            color: "error",
          }}
        />

        <StatCard
          stat={{
            title: "You'r Owed",
            amount: 500,
            caption: "this is the caption",
            Icon: MovingIcon,
            currency: "₹",
            color: "success",
          }}
        />
      </Stack>
    </Stack>
  );
}
