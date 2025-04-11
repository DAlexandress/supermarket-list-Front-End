import "./indexCard.css";

export const ListCard = ({ item, onToggle }) => {
  return (
    <div className="list-card-container">
      <div className="list-card-content">
        <img
          className="checked-box"
          src={`/image/${item?.checked ? "checked.png" : "unchecked.png"}`}
          alt="checked-item"
          onClick={() => onToggle(item._id)}
        />
        <div className="list-card-text-container">
          <span className="card-title">{item.name}</span>
          <span className="card-subtitle">{item.quantity} unidades</span>
        </div>
      </div>
      <div>
        <img src="/image/arrow.png" alt="arrow-icon" className="arrow-icon" />
      </div>
    </div>
  );
};
