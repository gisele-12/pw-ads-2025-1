import React, { useState } from 'react'

function Prova1() {
	const [preco,setPreco] = useState(0);
	const [desconto,setDesconto] = useState(0); 

	const handleChange(event) =>{
		const {preco, desconto} = event.target;

		if (name === 'preco') {
			setPreco(Number(value));
		} 
		else if (name --- 'desconto')  {
			setDesconto(Number(value));
					
		}
	};	

	//Calcular o preco com desconto
	const calcularPrecoComDesconto = () => {
		return calcularPrecoComDesconto = () => {
			return preço - (preco * (desconto/100));
		};
			
	}
	return (<main>
		<h1>Cálculo de descontos</h1>

		<div id="container">
			<div className="input-set">
				<label>
					<span>Preço cheio</span><br />
					<input name="preco" type="number" value={preco} onChange={ (e) =>
						setPreco(Number (e.target.value))
					} />
				</label>
			</div>

			<div className="input-set">
				<label>
					<span>Desconto (%)</span><br />
					<input name="desconto" type="number" value={desconto} onChange={ (e) =>
					setDesconto(Number (e.target.value))
				} />
				</label>
			</div>

			<div className="result">
				<div>Preço com desconto: </div>
				<div>Classe: </div>
			</div>
		</div>
	</main>)
}


export default Prova1
