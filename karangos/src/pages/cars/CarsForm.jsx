import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { parseISO } from 'date-fns'
import { feedbackWait, feedbackNotify, feedbackConfirm } from '../../ui/Feedback'
import { useNavigate, useParams } from 'react-router-dom'
import { useMask } from '@react-input/mask'
import { Checkbox, FormControlLabel } from '@mui/material'

export default function CarsForm() {

  const colors = [
    { value: 'Preto', label: 'Preto' },
    { value: 'Branco', label: 'Branco' },
    { value: 'Azul', label: 'Azul' },
    { value: 'Prata', label: 'Prata' },
    { value: 'Cinza', label: 'Cinza' },
    { value: 'Vermelho', label: 'Vermelho' },
    { value: 'Amarelo', label: 'Amarelo' },
  ]
  //Mascara para o campo de placa do carro
  const platesRef = useMask({
    mask: "AAA-9$99",
    replacement: {
      'A': /[A-Z]/, // letra maiúscula
      '9': /[0-9]/, // somente dígitos
      '$': /[A-J0-9]/ // dígito de 0 a 9 ou uma letra de A a J.

    },
    showMask: false
  })

  const formDefaults = {
    brand: '',
    model: '',
    color: '',
    year_manufacture: '',
    imported: '',
    plates: '',
    selling_price: '',
    selling_date: null
  }

  // Preenche a lista de anos de fabricação disponíveis
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1951; year--) {
    years.push({ value: year, label: year.toString() });
  }

  // Navegação e parâmetros de URL
  const navigate = useNavigate()
  const params = useParams()

  // Variáveis de estado
  const [state, setState] = React.useState({
    car: { ...formDefaults },
    formModified: false
  })
  const { car, formModified } = state

  // Se estivermos editando um carro, precisamos buscar os seus dados
  // no servidor assim que o componente for carregado
  React.useEffect(() => {
    // Sabemos que estamos editando (e não cadastrando um novo) 
    // quando a rota ativa contiver um parâmetro chamado id
    if (params.id) loadData()
  }, [])

  // Função para carregar os dados do carro quando estiver editando
  async function loadData() {
    feedbackWait(true)
    try {
      const response = await fetch(
        import.meta.env.VITE_API_BASE + `/cars/${params.id}`)
      const result = await response.json()

      // Converte o formato de data armazenado no banco de dados
      // para o formato reconhecido pelo componente DatePicker
      if (result.selling_date) result.selling_date = parseISO(result.selling_date)

      // Armazena os dados obtidos na variável de estado
      setState({ ...state, car: result })
    }
    catch (error) {
      console.error(error)
      feedbackNotify('ERRO: ' + error.message)
    }
    finally {
      feedbackWait(false)
    }
  }
  /* Preenche o campo do objeto "cars" conforme o campo correspondente do formulário for modificado */
  function handleFieldChange(event) {
    console.log('CAMPO MODIFICADO:', {
      name: event.target.name,
      value: event.target.value
    })

    // Tira uma cópia da variável de estado "cars"
    const carCopy = { ...car }
    // Altera em carsCopy apenas o campo da vez
    carCopy[event.target.name] = event.target.value
    // Atualiza a variável de estado, substituindo o objeto "cars"
    // por sua cópia atualizada
    setState({ ...state, car: carCopy, formModified: true })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()    // Impede o recarregamento da página
    feedbackWait(true)
    try {
      /// Prepara as opções para o fetch
      const reqOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      }

      // Se houver parâmetro na rota, significa que estamos alterando
      // um registro existente. Portanto, fetch() precisa ser chamado
      // com o verbo PUT
      if (params.id) {
        await fetch(
          import.meta.env.VITE_API_BASE + `/cars/${params.id}`,
          { ...reqOptions, method: 'PUT' }
        )
      }
      // Senão, envia com o método POST para criar um novo registro
      else {
        await fetch(
          import.meta.env.VITE_API_BASE + `/cars`,
          { ...reqOptions, method: 'POST' }
        )
      }

      feedbackNotify('Item salvo com sucesso.', 'success', 2500, () => {
        // Retorna para a página de listagem
        navigate('..', { relative: 'path', replace: true })
      })
    }
    catch (error) {
      console.error(error)
      feedbackNotify('ERRO: ' + error.message, 'error')
    }
    finally {
      feedbackWait(false)
    }
  }

  async function handleBackButtonClick() {
    if (
      formModified &&
      ! await feedbackConfirm('Há informações não salvas. Deseja realmente sair?')
    ) return  // Sai da função sem fazer nada

    // Aqui o usuário respondeu que quer voltar e perder os dados
    navigate('..', { relative: 'path', replace: true })
  }

  return <>
    <Typography variant="h1" gutterBottom>
      Cadastro de Veiculos
    </Typography>

    <Box className="form-fields">
      <form onSubmit={handleFormSubmit}>

        {/* autoFocus ~> foco do teclado no primeiro campo */}
        <TextField
          variant="outlined"
          name="brand"
          label="Marca"
          fullWidth
          required
          autoFocus
          value={car.brand}
          onChange={handleFieldChange}
        />

        <TextField
          variant="outlined"
          name="model"
          label="Modelo"
          fullWidth
          required
          value={car.model}
          onChange={handleFieldChange}
        />

        <TextField
          variant="outlined"
          name="color"
          label="Cor"
          fullWidth
          required
          select
          value={car.color}
          onChange={handleFieldChange}
        >
          {colors.sort((a, b) => a.label.localeCompare(b.label)).map((color) => (
            <MenuItem key={color.value} value={color.value}>
              {color.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          variant="outlined"
          name="year_manufacture"
          label="Ano de fabricação"
          fullWidth
          required
          value={car.year_manufacture}
          onChange={handleFieldChange}
        >
          {years.map(item => (
            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
          ))}
        </TextField>

        <div className="MuiFormControl-root">
          <FormControlLabel
            control={
              <Checkbox
                checked={car.imported === 1}
                onChange={(event) => {
                  const carCopy = { ...car }
                  carCopy.imported = event.target.checked ? 1 : 0
                  setState({ ...state, car: carCopy, formModified: true })
                }}
              />
            }
            label="É Importado?"
          />
        </div>

        <TextField
          inputRef={platesRef}
          variant="outlined"
          name="plates"
          label="Placa"
          fullWidth
          required
          value={car.plates}
          onChange={handleFieldChange}
        />

        <TextField
          variant="outlined"
          name="selling_price"
          label="Preço de venda"
          type="number"
          fullWidth
          value={car.selling_price}
          onChange={handleFieldChange}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DatePicker
            label="Data de venda"
            value={car.selling_date}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true
              }
            }}
            onChange={date => {
              const event = { target: { name: 'selling_date', value: date } }
              handleFieldChange(event)
            }}
          />
        </LocalizationProvider>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%'
        }}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
          >
            Salvar
          </Button>
          <Button
            variant="outlined"
            onClick={handleBackButtonClick}
          >
            Voltar
          </Button>
        </Box>

        <Box sx={{
          fontFamily: 'monospace',
          display: 'flex',
          flexDirection: 'column',
          width: '100vw'
        }} >
          {JSON.stringify(car, null, '')}
        </Box>

      </form>
    </Box>
  </>
}
