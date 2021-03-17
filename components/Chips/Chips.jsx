import { Chip } from '@material-ui/core'
import React from 'react'



const Chips = ({ nombre }) => {
    return (
        <Chip
            style={{ margin:2 }}
            label={nombre}
            color="primary"
            clickeable
            size="small"
        />
    )
}

export default Chips
