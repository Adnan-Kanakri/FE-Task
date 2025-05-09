import FormInput from '@/components/form-component/form-input/FormInput'
import Form from '@/components/form/Form'
import { Button, Typography } from '@mui/material'
import React, { FC } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import classes from './style.module.css'
import FormSelect from '@/components/form-component/form-select/FormSelect'
import { ExpenseStatusOption } from '../../_constant'
import { useRootContext } from '@/context/RootContext'
import { IExpenseData } from '@/endpoints/dtos'

type AddExpensesProps = {
    onCancel: () => void
}

const AddExpenses: FC<AddExpensesProps> = ({ onCancel }) => {
    const { setExpenses } = useRootContext()

    const handleSubmitForm = async (data: IExpenseData) => {
        try {
            setExpenses((prev: IExpenseData[]) => [{
                amount: data.amount,
                description: data.description,
                status: data.status,
                id: String(prev.length + 1),
                createdAt: new Date().toISOString()
            }, ...prev])
            toast.success("Expense was created successfully")
            onCancel()
        } catch (error) {
            console.error(error);
            toast.error("Expense creation failed")
        }
    }


    return (
        <Form
            defaultValues={{}}
            onSubmit={handleSubmitForm} schema={yup.object({
                description: yup.string().required("Description is required"),
                amount: yup.number().required("Amount is required"),
                status: yup.string().required("Status is required"),
            })}
            formClassName='fullContent fullHeight'
        >
            {
                ({ formState: { errors }, watch }) => {

                    console.log({
                        errors,
                        watch: watch()
                    });


                    return (
                        <div className='fullContent fullHeight'>
                            <div className={classes.formHeader}>
                                <Typography variant='h6'>Add Expense</Typography>
                            </div>
                            <div className={classes.formContainer}>
                                <div className={classes.formInputs}>
                                    <FormInput name='description' label='Description' multiline rows={3} />
                                    <FormInput name='amount' label='Amount' />
                                    <FormSelect name='status' label='Status' options={ExpenseStatusOption} />
                                </div>
                                <div className={classes.buttonContainer}>
                                    <Button variant='outlined' onClick={onCancel}>
                                        Cancel
                                    </Button>
                                    <Button variant='contained' type='submit'>
                                        Add Expense
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </Form>
    )
}

export default AddExpenses