import { ReactNode } from "react";
import Alternativa from "./Alternativa";
import "./Bloco.css";
import { FaRegQuestionCircle } from "react-icons/fa";

interface QuestaoProps{
  pergunta: string,
  children?: ReactNode,
}


export default function Bloco({pergunta, children} : QuestaoProps) {
  return (
    <div className="container">
      <div className="bloco">
        <div className="bordas">
          <FaRegQuestionCircle size={44} className="icon" />
          <FaRegQuestionCircle size={44} className="icon" color="black" />
        </div>
        <div className="sessaoPergunta">
          <h1 className="pergunta">
            {pergunta}
          </h1>
        </div>
        <div className="alternativas">
            {children}
        </div>
        <div className="bordas">
          <FaRegQuestionCircle size={44} className="icon" color="black" />
          <FaRegQuestionCircle size={44} className="icon" />
        </div>
      </div>
    </div>
  );
}
