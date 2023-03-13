import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        className="monster-image"
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name}</h2>
      <div>{email}</div>
    </div>
  );
};

export default Card;
