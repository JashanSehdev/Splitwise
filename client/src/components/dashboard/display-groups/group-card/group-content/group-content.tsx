import { Chip, Stack, Typography } from "@mui/material";
import styles from './group-content.module.css'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { GroupContentType } from "./group-content.type";


interface GroupContentProp {
    group : GroupContentType
    
} 
export default function GroupContent ({
    group

} : GroupContentProp) {
    const {title , description, members, expenses, balance} = group
    return (
        <Stack className={styles.container} spacing={2}>
            <Stack direction='row' className={styles.heading}>
                <Typography variant="h6"  sx={{fontWeight: '700'}}>{title}</Typography>
                <Chip icon={<PeopleAltOutlinedIcon/>} label={members}/>
            </Stack>
            <Typography variant="subtitle1" color="text.secondary">{description}</Typography>

            <Stack>
                <Stack direction={'row'} className={styles.dataLine}>
                    <Typography variant='subtitle1'>
                        Your Balanace
                    </Typography>
                    <Typography>
                        {balance}
                    </Typography>
                </Stack>

                <Stack direction={'row'}  className={styles.dataLine}>
                    <Typography variant='subtitle1'>
                        Total Expenses
                    </Typography>
                    <Typography color="error">
                        {expenses}
                    </Typography>
                </Stack>

                <Stack direction={'row'}  className={styles.dataLine}>
                    <Typography variant='subtitle1'>
                        Last Activity
                    </Typography>
                    <Typography>
                        2 days Ago
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}