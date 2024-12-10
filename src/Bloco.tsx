import "./Bloco.css";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Bloco() {
  return (
    <div className="container">
      <div className="bloco">
        <div className="bordas">
          <FaRegQuestionCircle size={44} className="icon" />
          <FaRegQuestionCircle size={44} className="icon" color="black" />
        </div>
        <div className="sessaoPergunta">
          <h1 className="pergunta">
            Qual é a classe que, em todos os jogos, que é perfeita para começar
            qualquer build?
          </h1>
        </div>
        <div className="bordas">
          <FaRegQuestionCircle size={44} className="icon" color="black" />
          <FaRegQuestionCircle size={44} className="icon" />
        </div>
      </div>
    </div>
  );
}
