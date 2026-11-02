'use client'
import { Box, Button, Paper, Stack } from "@mui/material";
import styles from './group-main.module.css'
import { useState } from "react";
import GroupAddMember from "./group-add-member/group-add-member";

const menu = ['Expenses', 'Members', 'Settings']

export default function GroupMain() {
    const [option , setOption] = useState<string>('expenses')
    return(
        <Box>
            <Stack direction='row' useFlexGap spacing={2} sx={{p: '1rem 3rem'}}>
                {
                    menu.map((item) => (
                        <Button  color="secondary" variant={option === item ?  'contained' : 'outlined'} key={item} className={styles.menu} onClick={() => setOption(item)}>
                            {item}
                        </Button>
                    ))
                }

            </Stack>

            {
                option === 'Members' && <GroupAddMember/>
            }
        </Box>
    )
}