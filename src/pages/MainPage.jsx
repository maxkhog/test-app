import React from 'react'

import { Container } from 'components/container'

export const MainPage = ({match: { params }}) => {
    return <div>
        {params.filter}
        <Container />
    </div>
}