import "./Alternativa.css";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

interface AlternativaProps {
  resposta: string;
  certo?: boolean;
}

export default function Alternativa({ resposta, certo }: AlternativaProps) {
  return (
    <div className="bloquinho">
      {certo ? (
        <FaCheck className="iconA" size={28} />
      ) : (
        <FaRegCircleXmark className="iconA" size={28} />
      )}
      <p className="texto">{resposta}</p>
    </div>
  );
}
