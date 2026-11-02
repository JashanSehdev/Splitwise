import { Chip, Stack, Typography } from "@mui/material";
import styles from './group-content.module.css'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { BaseGroup } from "@/type/group.type";


interface GroupContentProp {
    group : BaseGroup
    
} 
export default function GroupContent ({
    group

} : GroupContentProp) {
    const {title , memberCount, description, createdAt, expenses} = group
    return (
        <Stack className={styles.container} spacing={2}>
            <Stack direction='row' className={styles.heading}>
                <Typography variant="h6"  sx={{fontWeight: '700'}}>{title}</Typography>
                <Chip icon={<PeopleAltOutlinedIcon/>} label={memberCount}/>
            </Stack>
            <Typography variant="subtitle1" color="text.secondary">{description}</Typography>

            <Stack>
                <Stack direction={'row'} className={styles.dataLine}>
                    <Typography variant='subtitle1'>
                        Your Balanace
                    </Typography>
                    <Typography>
                        Balance Pending
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
                        {createdAt}
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}