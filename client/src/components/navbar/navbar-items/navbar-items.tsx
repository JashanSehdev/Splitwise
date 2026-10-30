'use client'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import styles from "./navbar-items.module.css";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { usePathname } from "next/navigation";

const navItems = [
  {
    icon : < HomeIcon/>,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon : <AssignmentIcon/>,
    label : "Group",
    href : '/group'
  },

];
export default function NavbarItems() {
  const pathname = usePathname()
  console.log(pathname)
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };
  return (
    <Stack spacing={0.5}>
      
        {navItems.map((item) => {
          const active = isActive(item.href)
          return (
          <Link key={item.label} href={item.href} className={`${styles.link}`}>
            <ListItem className={` ${active ? styles.selected : ""}`}
            >
              <ListItemIcon className={active ? styles.icon : ""}>
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          </Link>
        )})}
    </Stack>
  );
}
