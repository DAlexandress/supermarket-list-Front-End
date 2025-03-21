import { useState, useEffect } from "react";
import "./list.css";
import { getList } from "../../services/request/request";
import { ListCard } from "../../componentes";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const LoadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log(result);
    setListData(result);
    setLoading(false);
  };
  useEffect(() => {
    LoadListItems();
  }, []);
  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            className="logo-image"
            src="/image/logo.png"
            alt="Supermarket-List"
          />
          <h2>Supermercado(lista)</h2>
        </div>
        <div className="List-container">
          {loading && <h4>Carregando...</h4>}
          {!loading && listData?.length > 0 ? (
            listData.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h4>Não há itens na lista</h4>
          )}
        </div>
      </div>
    </div>
  );
};
