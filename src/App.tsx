import Alternativa from "./Alternativa";
import questoes from "./assets/dados.json"
import Bloco from "./Bloco";
import './App.css'

export default function App() {
  return (
    <div className="app">
      <h1 className="titulo">Quiz Red Dead Redemption 2</h1>
      <p className="respostas">Respostas Certas: {questoes.Questoes.length}/{questoes.Questoes.length}(100%)</p>
      {questoes.Questoes.map((questao) => (
        <Bloco key={questao.pergunta} pergunta={questao.pergunta}>
        {questao.alternativas.map((alter) => (
          <Alternativa key={alter.resposta} resposta={alter.resposta} certo={alter.certo}/>
        ))}
        </Bloco>
      ))}
    </div>
  );
}
