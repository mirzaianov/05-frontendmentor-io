import './Stat.scss';

function Stat({ quantity, description }) {
  return (
    <div className="stat">
      <h2 className="stat__quantity">{quantity}</h2>
      <p className="stat__description">{description}</p>
    </div>
  );
}

export default Stat;
