import React, { FC } from 'react'
import dayjs from 'dayjs';
import { Chip } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


type ShowDateProps = {
    date: Date
}

const ShowDate: FC<ShowDateProps> = ({ date }) => {
    return (
        <Chip icon={<CalendarMonthIcon />} label={dayjs(date).format('DD/MM/YYYY')} variant="outlined" />
    )
}

export default ShowDate