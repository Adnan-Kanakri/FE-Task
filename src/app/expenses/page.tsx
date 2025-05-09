import React from 'react'
import { NextPage } from 'next'
import ExpensesHome from './_components/home/ExpensesHome'
type ExpensesProps = {}

const Expenses: NextPage<ExpensesProps> = () => {

    return (
        <div className='fullContent'>
            <ExpensesHome />
        </div>
    )
}

export default Expenses