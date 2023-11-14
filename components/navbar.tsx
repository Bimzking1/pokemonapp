import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Pokemon from '/assets/pokemon.png'

const navbar = () => {
  return (
    <div>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '1280px',
                backgroundColor: 'white'
            }}
        >
            <Typography>
                <Image
                    src={Pokemon}
                    width={100}
                />
            </Typography>
            <Typography>
                Bimo
            </Typography>
        </Box>
    </div>
  )
}

export default navbar