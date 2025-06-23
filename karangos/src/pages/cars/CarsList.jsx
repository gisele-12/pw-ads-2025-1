import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { feedbackWait, feedbackConfirm, feedbackNotify } from '../../ui/Feedback'

export default function CarsList() {
  const [state, setState] = React.useState({
    cars: []
  })
  const {cars} = state;

  const columns = [
    { 
      field: 'id', 
      headerName: 'Cód.', 
      width: 90 
    },
    {
      field: 'brand',
      headerName: 'Marca/Modelo',
      width: 200,
      renderCell: (params) => params.row.brand + '/' + params.row.model 
    },
    {
      field: 'model',
      headerName: 'Modelo',
      width: 150,
    },
    {
      field: 'color',
      headerName: 'Cor do veiculo',
      width: 100,
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de Fabricação',
      width: 100,
    },
    {
      field: 'imported', 
      headerName: 'É Importado?', 
      width: 120,
      renderCell: (value) => (value.row.imported ? 'SIM' : ''),
    },
    {
      field: 'plates',
      headerName: 'Placa',
      width: 130,
    }, 
    {
      field: 'selling_price',
      headerName: 'Preço de venda (R$)',
      width: 130,
      renderCell: (params) =>
        params.row.selling_date ? new Date(params.row.selling_date).toLocaleDateString('pt-BR') : '',
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      width: 120,
      renderCell: (params) =>
        params.row.selling_price?.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
    },
      {
      field: '_actions',
      headerName: 'Ações',
      width: 150,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: params => {
        return <>
          <Link to={'./' + params.id} >
            <IconButton aria-label="Editar">
              <EditIcon />
            </IconButton>
          </Link>
                 
          <IconButton aria-label="Excluir" 
            onClick={() => handleDeleteButtonClick(params.id)}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </>
      }
    } 
  ];

  
  // useEffect() que será executado apenas quando o componente for carregado
  React.useEffect(() => {
    loadData()
  }, [])

  // Função que é chamada pelo useEffect() para carregar os dados
  // do back-end quando o componente for exibido
  async function loadData() {
    feedbackWait(true)
    try {
      const response = await fetch(import.meta.env.VITE_API_BASE + '/cars')
      const data = await response.json()
      
      // Atualiza a variável de estado com os dados obtidos
      setState({ ...state, cars: data })
    }
    catch(error) {
      console.error(error)
      feedbackNotify(error.message, 'error')
    }
    finally {
      feedbackWait(false)
    }
  }
  

  async function handleDeleteButtonClick(id) {
    if(await feedbackConfirm('Deseja realmente excluir este item?')) {
      feedbackWait(true)
      try {
        // Envia a requisição para a exclusão do registro
        await fetch(import.meta.env.VITE_API_BASE + `/cars/${id}`,
          { method: 'DELETE' }
        )
        // Atualiza os dados do datagrid
        loadData()
        feedbackNotify('Exclusão efetuada com sucesso.')
      }
      catch(error) {
        console.error(error)
        feedbackNotify('ERRO: ' + error.message, 'error')
      }
      finally {
        feedbackWait(false)
      }
    }
  }

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de Carros
    </Typography>

    <Box 
      sx={{
      display: 'flex',
      justifyContent: 'right',    // Conteúdo alinhado à direita
      mb: 2                       // Margem inferior (margin-bottom)
    }}>
      <Link to={'./new'}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          startIcon={ <AddCircleIcon /> }
        >
          Novo Veiculo
        </Button>
      </Link>
    </Box>

    <Paper sx={{ height: 400, width: '100%' }} elevation={10}>
      <DataGrid
        rows={cars}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Paper>
  </>
}