import React, { FC, useEffect } from 'react'
import { DataGrid, GridColDef, GridFooterContainer, GridPagination } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';
import { PageSizeOptions } from '@/constant';
import { useRootContext } from '@/context/RootContext';
import { useGetExpenses } from '@/service/fe-task.service';
import MainUtils from '@/utils/main';
import { IExpenseData } from '@/endpoints/dtos';
import ShowDate from '@/components/show-date/ShowDate';


type ExpensesProps = {}


const Expenses: FC<ExpensesProps> = () => {

    const { expenses, setExpenses, filter } = useRootContext()
    const { data: expensesData, isLoading: isExpensesLoading } = useGetExpenses()


    useEffect(() => {
        if (!MainUtils.isEmptyValue(expensesData?.expenses)) {
            setExpenses(expensesData?.expenses ?? [])
        }
    }, [expensesData])


    const tableOptions: any = {
        sortable: false,
        minWidth: 300,
        filterable: false,
        align: 'center',
        headerAlign: 'center',
        resizable: false,
    }


    const columns: GridColDef<IExpenseData>[] = [
        {
            field: 'id',
            headerName: 'ID',
            ...tableOptions
        },
        {
            field: 'createdAt',
            headerName: 'Date',
            renderCell: ({ value }) => {
                return <ShowDate date={value} />
            },
            ...tableOptions
        },
        {
            field: 'description',
            headerName: 'Description',
            ...tableOptions
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            ...tableOptions
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            ...tableOptions
        },
    ];

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                loading={isExpensesLoading}
                rows={filter.length > 0 ? filter : expenses ?? []}
                columns={columns}
                rowSelection={false}
                pagination={true}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10 }, rowCount: expenses?.length ?? 0,
                    },
                }}
                pageSizeOptions={PageSizeOptions}
                sx={{ border: 0 }}
                slots={{
                    footer() {
                        return (
                            <GridFooterContainer>
                                <Typography variant="body1" sx={{ ml: 2 }}>
                                    Total Expenses: {expenses?.length}
                                </Typography>
                                <GridPagination />
                            </GridFooterContainer>
                        )
                    }
                }}
            />
        </Paper>
    )
}

export default Expenses