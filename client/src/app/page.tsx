import { Box } from "@mui/material";
import styles from './page.module.css'

export default function app() {
  return <Box>
    <Box
      component={'img'}
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtHEU46pyQ0GdDhakGVGH8lk5ZAa8Mli_G_1YcJeJsA&s=50'}
      className={styles.image}
    />
  </Box>;
}
