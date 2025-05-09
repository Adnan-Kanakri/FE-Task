import FormInput from '@/components/form-component/form-input/FormInput'
import Form from '@/components/form/Form'
import { Button, Typography } from '@mui/material'
import React, { FC } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import classes from './style.module.css'
import FormSelect from '@/components/form-component/form-select/FormSelect'
import { CardStatusOption, } from '../../_constant'
import { useRootContext } from '@/context/RootContext'
import { ICardData } from '@/endpoints/dtos'

type AddExpensesProps = {
    onCancel: () => void
}

const AddExpenses: FC<AddExpensesProps> = ({ onCancel }) => {
    const { setCards } = useRootContext()


    const handleSubmitForm = async (data: ICardData) => {
        try {
            setCards((prev: ICardData[]) => [{
                ...data,
                id: String(prev.length + 1),
                issuedAt: new Date().toISOString()
            }, ...prev])
            toast.success("Card was created successfully")
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
                cardholderName: yup.string().required("Cardholder Name is required"),
                last4Digits: yup.string().required("Last 4 Digits is required").max(4, "Last 4 Digits must be 4 digits"),
                status: yup.string().required("Status is required"),
            })}
            formClassName='fullContent fullHeight'
        >
            {
                ({ }) => {
                    return (
                        <div className='fullContent fullHeight'>
                            <div className={classes.formHeader}>
                                <Typography variant='h6'>Add Card</Typography>
                            </div>
                            <div className={classes.formContainer}>
                                <div className={classes.formInputs}>
                                    <FormInput name='cardholderName' label='Cardholder Name' />
                                    <FormInput name='last4Digits' label='Last 4 Digits' />
                                    <FormSelect name='status' label='Status' options={CardStatusOption} />
                                </div>
                                <div className={classes.buttonContainer}>
                                    <Button variant='outlined' onClick={onCancel}>
                                        Cancel
                                    </Button>
                                    <Button variant='contained' type='submit'>
                                        Add Card
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