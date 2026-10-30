import { Stack, Typography } from '@mui/material'
import styles from './stat-card-content.module.css'
import {StatCardContentType } from './stat-card-content.type';


type StatCardContentProp = {
    content : StatCardContentType
}
export default function StatCardContent({
    content 
} : StatCardContentProp) {

    const {Icon, title, caption, amount, currency, color} = content
    return (
        <Stack spacing={0.5} className={styles.container}>
            <Stack direction='row' className={styles.section1}>
                <Typography variant='body2' className={styles.title}>{title}</Typography>
                <Icon className={styles.icon} color={color}/>
            </Stack>

            <Stack spacing={0.02}>
                <Typography color={color ?? 'textPrimary'} className={styles.amount}>{currency ?? '$'}{amount ?? `$0.00`}</Typography>
                <Typography variant="caption" className={styles.caption} color='text.secondary'>{caption}</Typography>
            </Stack>
        </Stack>
    )
}