import { Paper } from "@mui/material";
import { ReactNode } from "react";
import styles from './card.module.css'

type CardProp = {
    children : ReactNode
}
export default function Card({children} : CardProp) {

    return (
        <Paper className={styles.container}>
            {children}
        </Paper>
    )
}