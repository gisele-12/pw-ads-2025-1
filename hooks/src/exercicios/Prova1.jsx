import React, { useState } from 'react'

function Prova1() {
	const [preco, setPreco] = useState(() => {
		const valorSalvo = localStorage.getItem('preco');
		return valorSalvo ? Number(valorSalvo) : 0;
	});
	
	const [desconto, setDesconto] = useState(() => {
		const valorSalvo = localStorage.getItem('desconto');
		return valorSalvo ? Number(valorSalvo) : 0;
	});

	//Calcular o preco com desconto
	const calculaPrecoDesconto = () => {
		return preco - (preco * (desconto / 100));
	};



//VAriavel para guardar o valor com desconto
const precoDesconto = calculaPrecoDesconto();

//Funcao que retorna a classe com desconto
const classificarDesconto = () => {
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
				<div>Preço com desconto: R$ {precoDescontotofixed(2)} </div>
				<div>Classe: {classificarDesconto()}</div>
			</div>
	</main>

}
export default Prova1
