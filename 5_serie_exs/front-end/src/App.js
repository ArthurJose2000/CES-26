import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Cadastro</h1>
      <form action="../../registration" method="POST">
        <input type="text" placeholder="Nome" name="name"/><br/>
        <input type="text" placeholder="Endereço" name="adress"/><br/>
        <input type="date" placeholder="Data de nascimento" name="date"/><br/>
        <input type="submit"/>
      </form>
      <br/><br/><br/>
      <form action="../../table" method="POST">
      <button id="printTable">Exibir dados</button>
      </form>
      <div class="tables">
        <div>
          <div class="tables-elements">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
