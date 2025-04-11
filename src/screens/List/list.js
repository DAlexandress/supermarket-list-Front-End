import { useState, useEffect } from "react";
import "./list.css";
import { getList } from "../../services/request/request";
import { ListRender, Loader } from "../../componentes";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const HandleToggleChecked = (id) => {
    const updatelist = listData.map((item) =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setListData(updatelist);
  };

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
          <div className="list-title-container">
            <img
              className="logo-image"
              src="/image/logo.png"
              alt="Supermarket-List"
            />
            <h2 className="list-screen-header-title">Supermercado(lista)</h2>
          </div>
          <div>
            <button className="list-button-container">Adicionar</button>
          </div>
        </div>
        <div className="List-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender list={listData} onToggle={HandleToggleChecked} />
          )}
        </div>
      </div>
    </div>
  );
};
