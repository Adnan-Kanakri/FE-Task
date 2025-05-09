"use client"

import { Box, Button, Container, Stack, SwipeableDrawer, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import Expenses from '../expenses/Expenses'
import Filter from '../filter/Filter'
import AddExpenses from '../add-expenses/AddExpenses'
type ExpensesHomeProps = {}

const ExpensesHome: FC<ExpensesHomeProps> = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    console.log({

    });


    return (
        <Container maxWidth="xl" className='fullContent'>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h4">Expenses</Typography>
                        <Button variant="contained" color="primary" onClick={handleOpen}>Add Expense</Button>
                    </Stack>
                    <Filter />
                    <Expenses />
                </Stack>
            </Box>
            <SwipeableDrawer
                anchor={"right"}
                ModalProps={{
                    keepMounted: true,
                    onClose: handleClose,
                }}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
            >
                <AddExpenses onCancel={handleClose} />
            </SwipeableDrawer>
        </Container>
    )
}

export default ExpensesHome