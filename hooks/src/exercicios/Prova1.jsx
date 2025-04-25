import React, { useState } from 'react'

function Prova1() {
	const [preco, setPreco] = useState(0);
	const [desconto, setDesconto] = useState(0);

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'preco') {
			setPreco(Number(value));
		}
		else if (name-- - 'desconto') {
			setDesconto(Number(value));

		}
	};

	//Calcular o preco com desconto
	const calcularPrecoComDesconto = () => {
		return preco - (preco * (desconto / 100));
	};

}

//VAriavel para guardar o valor com desconto
const precoDesconto = calculaPrecoDesconto();

//Funcao que retorna a classe com desconto
const classDesconto = () => {
	if (desconto <= 15) {
		return "Desconto Negocial";
	} else if (desconto > 15 && desconto <= 50) {
		return "Desconto Promocional";
	} else if (desconto > 50) {
		return "Desconto Liquidação";
	} else {
		return "Sem classificação";
	}
};

return (
	<main>
		<h1>Cálculo de descontos</h1>

		<div id="container">
			<div className="input-set">
				<label>
					<span>Preço cheio</span><br />
					<input name="preco" type="number" value={preco} onChange={handleChange}
					/>
				</label>
			</div>

			<div className="input-set">
				<label>
					<span>Desconto (%)</span><br />
					<input name="desconto" type="number" value={desconto} onChange={handleChange}
					/>
				</label>
			</div>

			<div className="result">
				<div>Preço com desconto: R$ {precoDesconto.tofixed(2)} </div>
				<div>Classe: {classDesconto()}</div>
			</div>
		</div>
	</main>)


export default Prova1
