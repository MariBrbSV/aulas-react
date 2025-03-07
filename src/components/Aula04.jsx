const Aula04 = () => {
    function botaoClique(){
        alert('Voce clicou no botao')
        alert('segundo alerta')
    }
    function HandleChange(event) {
        alert(event.target.value)
    }

    const eventoMouseEnter = (event) => {
        console.log('Mouse Entrou no elemento');
        event.target.style.backgroundColor ='lightblue'
    }
    const eventoMouseLeave = (event) => {
        console.log('Mouse saiu do elemento');
        event.target.style.backgroundColor ='lightgreen'
    }

  return (
    <div className="card">
      <h1>Aula 04 - Eventos de um componente</h1>
      <p>
        Os eventos são fundamentais para criar interatividade em aplicações web
      </p>
      <hr />
      <p>Evento onClick - clique aqui</p>
      <button onClick={botaoClique}>Clique Aqui</button>
      <button onClick={() => alert('Cliquei no paragrafo')}>paragrafo</button>
      <p onDoubleClick={() => alert('Duplo clique')}>Duplo clique</p>
      <hr/>

      <p>Evento onChange - sempre que um campo de entrada é alterado </p>
      <input onChange={HandleChange} type="text" placeholder="Digite algo...." />
      <select onChange={HandleChange}>
        <option value={"1A"}> 1 A EM</option>
        <option value={"2A"}> 2 A EM</option>
        <option value={"3A"}> 3 A EM</option>
      </select>
      <hr/>

      <p>Evento onMouseEnter</p>
      <p onMouseEnter={eventoMouseEnter} onMouseLeave={eventoMouseLeave}>Passe o mouse aqui</p>
      <p>Evento onKeyDown - Aciona um evento quando pressiona uma tecla</p>
      <input type="text" onKeyDown={(event) => console.log(event.key)} placeholder="Pressione a teblas" />
    </div>
  )
};

export default Aula04;
