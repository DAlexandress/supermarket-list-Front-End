import { useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import { Button, Input } from "../../componentes";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onClickContinue = () => {
    if (username.length < 3) {
      alert("Usuário Precisa ter mais que 3 caracteres!");
      return;
    }
    localStorage.setItem("@supermarket-lis", username);
    navigate("/List");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/image/shopping-bag.svg"
          alt="shopping-bag"
        />
        <h1 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>

        <p>Digite abaixo seu usuário para ter acesso a sua lista de compras</p>

        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Usuário:"
          placeholder="Ex: @User"
        />

        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Acessar</Button>
        </div>
      </div>
    </div>
  );
};
