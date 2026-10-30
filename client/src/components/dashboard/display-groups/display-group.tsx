'use client'
import { Stack, Typography } from "@mui/material";
import styles from './display-group.module.css'
import CreateGroup from "@/components/groups/create-group/create-group";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/features/store";
import GroupCard from "./group-card/group-card";
import { fetchUserGroup } from "@/features/group/handle-group/group.action";

export default function DisplayGroups () {
    const dispatch = useAppDispatch()
    const groups = useAppSelector((state) => state.group.groups)


    useState(() => {
        dispatch(fetchUserGroup())
    })

    return (
        <Stack className={styles.container}>
            <Stack direction='row' className={styles.section1}>
                <Typography variant="h6" sx={{fontWeight:'700'}}>
                    Your Groups
                </Typography>
                <CreateGroup/>
            </Stack>

            <Stack direction={'row'} spacing={2} useFlexGap className={styles.section2}>
                {/* <GroupCard/>
                <GroupCard/>
                <GroupCard/> */}
                {
                    groups.length === 0 ? <Typography>No Group Yet</Typography> : (
                        groups.map((item) => <GroupCard key={item.id} group={item} />)
                    )
                }
            </Stack>

        </Stack>
    )
}