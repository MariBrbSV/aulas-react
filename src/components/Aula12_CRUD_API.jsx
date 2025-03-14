import { useState, useEffect } from 'react'
import estilos from './Aula10.module.css'
import Aula12_Produto from './Aula12_Produto'

const Aula12_CRUD_API = () => {
    const [listaProdutos, setListaProdutos] = useState([]) 
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratis, setFreteGratis] = useState(false)
    const [id, setId] = useState('')
    const [editando, setEditando] = useState(false)

    function alterarProduto(produto){
        setNome(produto.nome);
        setPreco(produto.preco);
        setImagem(produto.imagem);
        setLink(produto.link);
        setFreteGratis(produto.freteGratis);
        setCategoria(produto.categoria);
        setId(produto.id);
        setEditando(true);
    }

    function limparCampos(){
        setNome('');
        setPreco('');
        setImagem('');
        setLink('');
        setCategoria('');
        setFreteGratis(false);
        setEditando(false);
    }

    //const botaoCadastrar = async () => {
    async function botaoCadastrar (){
        const novoProduto = {
            nome: nome, 
            preco: parseFloat(preco),
            imagem: imagem,
            link: link,
            categoria: categoria,
            freteGratis: freteGratis
        }
        
        try{
            let url = 'http://192.168.0.123:3000/produtos';
            let metodo = 'POST';
            if (editando == true) {
                url = `http://192.168.0.123:3000/produtos/${id}`;
                metodo = 'PUT';
            }


            //CREATE do nosso CRUD
            //Método POST para criar um novo produto
            const resposta = await fetch(url, {
                method: metodo,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            })
            if (!resposta.ok) {
                throw new Error('Erro ao adicionar produto: ' + resposta.statusText);
            } 

            buscarProdutos();
            limparCampos();
            
        } catch (error) {
            console.error ('Erro ao adicionar produto:', error);
        }
    }



    //Função para buscar os dados através da API
    async function buscarProdutos() {
        //Read do nosso CRUD
        //Método GET para buscar os dados não precisa ser informado
        //Se eu quiser buscar os dados de outro servidor, só preciso alterar
        //a URL do endpoint
        const url = 'http://192.168.0.123:3000/produtos';
        const resposta = await fetch(url);
        const dados = await resposta.json();
        setListaProdutos(dados);       
    }
    //Ao carregar o componente quero que chama a função para buscar os produtos
    useEffect( () => {
        buscarProdutos();
    }, [] );

    async function excluirProduto(id){
        if (!window.confirm('Você tem certeza que deseja excluir o produto?')) {
            return;        
        }

        try{
            //DELETE do nosso CRUD
            //Método DELETE para excluir um novo produto
            const resposta = await fetch(`http://192.168.0.123:3000/produtos/${id}`, {
                method: 'DELETE'
            })
            if (!resposta.ok) {
                throw new Error('Erro ao excluir produto: ' + resposta.statusText);
            } 

            buscarProdutos();
            
        } catch (error) {
            console.error ('Erro ao excluir produto:', error);
        }


    }

    return (
        <div>
            <h1>Cadastro de produtos</h1>
            <div className={estilos.cadastro}>
                <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="number" placeholder='Preço' value={preco} onChange={(e) => setPreco(e.target.value)} />
                <input type="text" placeholder='Link da imagem' value={imagem} onChange={(e) => setImagem(e.target.value)} />
                <input type="text" placeholder='Link do produto' value={link} onChange={(e) => setLink(e.target.value)} />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='livros'>Livros</option>
                    <option value='filmes'>Filmes</option>
                    <option value='outros'>Outros</option>
                </select>
                <span><input type="checkbox" checked={freteGratis} onChange={(e) => setFreteGratis(e.target.checked)}/> Frete Grátis</span>
                {
                    editando == false ?
                    <button onClick={botaoCadastrar} className='btn btn-primary'>Adicionar Produto</button>
                    :
                    <div className='d-flex gap-2'> 
                        <button className='btn btn-primary' onClick={botaoCadastrar}> Gravar alteração </button>
                        <button className='btn btn-secondary' onClick={limparCampos}> Cancelar </button>
                    </div>
                }
                
            </div>
            <div className={estilos.listaProdutos}>
                {
                    listaProdutos.map( (produtoAtual, pos) => (
                        <Aula12_Produto key={pos} produto={produtoAtual} excluirProduto={excluirProduto} alterarProduto={alterarProduto}
                            />
                    ) )
                }
            </div>
        </div>

    )
}

export default Aula12_CRUD_API