import React, { FC, useEffect } from 'react'
import { DataGrid, GridColDef, GridFooterContainer, GridPagination } from '@mui/x-data-grid';
import { Chip, Paper, Typography } from '@mui/material';
import { PageSizeOptions } from '@/constant';
import { useRootContext } from '@/context/RootContext';
import { useGetCards } from '@/service/fe-task.service';
import MainUtils from '@/utils/main';
import { ICardData } from '@/endpoints/dtos';
import ShowDate from '@/components/show-date/ShowDate';
import { CardStatus } from '../../_constant';


type ExpensesProps = {}


const Cards: FC<ExpensesProps> = () => {

    const { cards, setCards } = useRootContext()
    const { data: cardsData, isLoading: isCardsLoading } = useGetCards()


    useEffect(() => {
        if (!MainUtils.isEmptyValue(cardsData?.cards)) {
            setCards(cardsData?.cards ?? [])
        }
    }, [cardsData])


    const tableOptions: any = {
        sortable: false,
        minWidth: 300,
        filterable: false,
        align: 'center',
        headerAlign: 'center',
        resizable: false,
    }


    const columns: GridColDef<ICardData>[] = [
        {
            field: 'id',
            headerName: 'ID',
            ...tableOptions
        },

        {
            field: 'cardholderName',
            headerName: 'Cardholder Name',
            ...tableOptions
        },
        {
            field: 'last4Digits',
            headerName: 'Last 4 Digits',
            ...tableOptions
        },
        {
            field: 'status',
            headerName: 'Status',
            renderCell: ({ value }) => {
                return <Chip label={value} color={value === CardStatus.ACTIVE ? "success" : "error"} variant="filled" />

            },
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
    ];

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                loading={isCardsLoading}
                rows={cards ?? []}
                columns={columns}
                rowSelection={false}
                pagination={true}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10 }, rowCount: cards?.length ?? 0,
                    },
                }}
                pageSizeOptions={PageSizeOptions}
                sx={{ border: 0 }}
                slots={{
                    footer() {
                        return (
                            <GridFooterContainer>
                                <Typography variant="body1" sx={{ ml: 2 }}>
                                    Total Cards: {cards?.length}
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

export default Cards