import { ListCard } from "../ListCard/indexCard";
import "./render.css";

export const ListRender = ({ list, onToggle }) => {
  if (list?.length === 0) {
    return <h3>Não há itens na lista!</h3>;
  }
  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard Key={item._id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
};
