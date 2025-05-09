"use client"

import { Box, Button, Container, Modal, Stack, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import AddCard from '../add-card/AddCard'
import Cards from '../cards/Cards'
type CardsHomeProps = {}

const CardsHome: FC<CardsHomeProps> = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100dvh",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Container maxWidth="xl" className='fullContent'>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h4">Cards</Typography>
                        <Button variant="contained" color="primary" onClick={handleOpen}>Add Card</Button>
                    </Stack>
                    <Cards />
                </Stack>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <AddCard onCancel={handleClose} />
                </Box>
            </Modal>
        </Container>
    )
}

export default CardsHome