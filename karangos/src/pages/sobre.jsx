import React from 'react'
import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

export default function Sobre() {

    const [info, setInfo] = useState('');

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_BASE}/sobre/1`)
            .then((res) => res.json())
            .then((data) => {

                setInfo(data.info);
            })
            .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <>
            <Typography variant="h4" component="h1">
                Sobre o Projeto Karangos
            </Typography>
            <Box sx={{ marginTop: 2 }}>
                {info}
            </Box>
        </>
    );
}

