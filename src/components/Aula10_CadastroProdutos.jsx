import { useState, useEffect } from "react";
import Aula10_Produto from "./Aula10_Produto";

const Aula10_CadastroProdutos = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [url, setURL] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratis, setFreteGratis] = useState(false)

    // Const Botão 
    function botaoCadastrar() {
        if (!nome || !preco || !url || !link || !categoria) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        const novoProduto = {
            nomeProduto: nome,
            preco: preco,
            imagem: url,
            link: link,
            categoria: categoria,
            freteGratis: freteGratis

        }
        const novaListaProdutos = [...listaProdutos, novoProduto];
        setListaProdutos(novaListaProdutos);
        localStorage.setItem('ListaDeProdutos', JSON.stringify(novaListaProdutos))
        setNome('')
        setPreco('')
        setURL('')
        setLink('')
        setCategoria('')
        setFreteGratis(false)
    }

    // Carrega
    useEffect( () => {
        const produtosSalvos = JSON.parse(localStorage.getItem(listaProdutos)) || [];
        setListaProdutos(produtosSalvos);
    }, [] )

    // Salva
    useEffect(() => {
        const produtosSalvos = JSON.parse(localStorage.getItem('ListaDeProdutos')) || [];
        setListaProdutos(produtosSalvos);
    }, []);


    return (
        <div className="d-flex gap-5">
            <div className="card arrumandomargem">
                <h1> Cadastro de Produtos </h1>
                <div className="inputs">
                    <input onChange={(e) => setNome (e.target.value)} type="text" placeholder="Nome" value={nome} />
                    <input onChange={(e) => setPreco (e.target.value)} type="number" placeholder="Preço" value={preco} />
                    <input onChange={(e) => setURL (e.target.value)} type="text" placeholder="URL da imagem" value={url} />
                    <input onChange={(e) => setLink (e.target.value)} type="text" placeholder="Link do Produto" value={link} />
                    <select onChange={(e) => setCategoria(e.target.value)} className="selects">
                        <option value=''> Selecione uma Categoria </option>
                        <option value='livros'> Livros </option>
                        <option value='filmes'> Filmes </option>
                        <option value='musicas'> Músicas </option>
                        <option value='Outros'> Outros </option>
                    </select>
                    <div>
                        <input type="checkbox"  onChange={(e) => setFreteGratis(e.target.checked)} /> Frete Grátis
                    </div>
                    <button onClick={botaoCadastrar} className="btn btn-primary"> Adicionar Produto </button>
                </div>
            </div>

            <div className="card card-cor">
                <h1 className="text-center"><i class="bi bi-bag-fill"></i> Produtos </h1>
                <div className="card-produtos">
                    {
                        listaProdutos.map((produtoAtual, pos) => (
                            <Aula10_Produto key={pos} produto={produtoAtual} />
                        ))
                    }

                </div>
            </div>

        </div>

    )
}


export default Aula10_CadastroProdutos;