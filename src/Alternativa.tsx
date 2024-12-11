import "./Alternativa.css";
import { FaCheck } from "react-icons/fa";

interface AlternativaProps {
  resposta: string;
  certo?: boolean;
}

export default function Alternativa({ resposta }: AlternativaProps) {
  return (
    <div className="bloquinho">
      <FaCheck className="iconA" size={28} />
      <p className="texto">{resposta}</p>
    </div>
  );
}
