'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'

const content = () => {
    const [ pokemon, setPokemon ] = useState<any>()

    const axios = require('axios');

    useEffect(() => {
        let config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
            headers: { }
        };
    
        axios.request(config)
        .then((response: { data: any; }) => {
            // console.log(JSON.stringify(response));
            setPokemon(response.data)
        })
        .catch((error: any) => {
            console.log(error);
        });
    })

  return (
    <div style={{ backgroundColor: 'white'}}>
        {
            // pokemon.results.map((item: any) => {
            //     {
            //         return (
            //             <>
            //                 <Typography>1</Typography>
            //             </>
            //         )
            //     }
            // })
        }
    </div>
  )
}

export default content