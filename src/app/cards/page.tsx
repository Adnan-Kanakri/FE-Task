import React from 'react'
import { NextPage } from 'next'
import CardsHome from './_components/home/CardsHome'
type CardsProps = {}

const Cards: NextPage<CardsProps> = () => {

    return (
        <div className='fullContent'>
            <CardsHome />
        </div>
    )
}

export default Cards