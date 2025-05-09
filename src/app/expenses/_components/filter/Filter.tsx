import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import React, { FC, useState } from 'react'
import { ExpenseStatusOption } from '../../_constant'
import classes from './style.module.css'
import { useRootContext } from '@/context/RootContext'
import DeleteIcon from '@mui/icons-material/Delete';

type FilterProps = {}

const Filter: FC<FilterProps> = () => {
    const { expenses, setFilter } = useRootContext()
    const [status, setStatus] = useState<string>("")

    const handleChange = (event: SelectChangeEvent<typeof status>) => {
        setStatus(event.target.value)
        const filteredExpenses = expenses.filter((expense) => expense.status === event.target.value)
        setFilter(filteredExpenses)
    }


    const handleClear = () => {
        setStatus("");
        setFilter([])
    };


    return (
        <div className='fullContent endPosition'>
            <Stack spacing={1} direction='row' className={classes.select} >
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="demo-simple-select-label" className={classes.selectLabel}>Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        value={status || ""}
                        onChange={handleChange}
                        className={"fullContent"}
                        size='small'
                        label="Status"
                    >
                        {ExpenseStatusOption.map((name) => (
                            <MenuItem
                                key={name.value}
                                value={name.value}
                            >
                                {name.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="outlined" onClick={handleClear}>
                    <DeleteIcon className={classes.clearIcon} />
                </Button>
            </Stack>
        </div>
    )
}

export default Filter