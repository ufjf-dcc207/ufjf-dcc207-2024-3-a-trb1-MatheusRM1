import Alternativa from "./Alternativa";
import "./App.css";
import Questoes from "./assets/dados";
import Bloco from "./Bloco";

export default function App() {
  return (
    <div className="app">
      <h1 className="titulo">Quiz Red Dead Redemption 2</h1>
      <p className="respostas">Respostas Certas: {Questoes.length}/{Questoes.length} (100%)</p>
      {Questoes.map((questao) => (
        <Bloco key={questao[0]} pergunta={questao[0]}>
        {questao[1].map((alter) => (
          <Alternativa key={alter[0]} resposta={alter[0]} certo={alter[1]}/>
        ))}
        </Bloco>
      ))}
    </div>
  );
}
