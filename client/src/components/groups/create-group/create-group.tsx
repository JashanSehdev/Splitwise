'use client'

import ModalWrapper from "@/components/modal/modal"
import { Box, Button } from "@mui/material"
import { useState } from "react"
import GroupForm from "../group-form/group-form"


export default function CreateGroup() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Box>
        <Button onClick={() => setOpen(true)} variant="contained">
            + Create Group
        </Button>

        <ModalWrapper
            open={open}
            setOpen={setOpen}
        >
            <GroupForm onClose={() => setOpen(false)}/>
        </ModalWrapper>
        </Box>
        
        

    )
}

