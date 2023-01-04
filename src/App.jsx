import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Salgado from "./components/salgado";
function App() {
  const [inputs, setInputs] = useState({
    quantidade: 1,
  });
  const [salgados, setSalgados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('salgados') !== null){
      setSalgados(JSON.parse(localStorage.getItem("salgados")));
      setIsLoading(false);
    }
    
  }, []);

  useEffect(() => {
    if (isLoading == false) {
      localStorage.setItem("salgados", JSON.stringify(salgados));
    }
  }, [salgados]);

  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleAdicionarSalgado = (e) => {
    setSalgados((current) => [...current, inputs]);
    setIsLoading(false)
  };

  const onAddQuantidade = (e) => {
    const salgado_id = +e.target.id;
    const arrAlterada = salgados.map((salgado, index) => {
      if (index === salgado_id)
        return { ...salgado, quantidade: +salgado.quantidade + 1 };
      return salgado;
    });
    setSalgados(arrAlterada);
  };

  const onSubQuantidade = (e) => {
    const salgado_id = +e.target.id;
    const arrAlterada = salgados.map((salgado, index) => {
      if (index === salgado_id) {
        return {
          ...salgado,
          quantidade: +salgado.quantidade != 0 ? +salgado.quantidade - 1 : 0,
        };
      }
      return salgado;
    });
    if (salgados[salgado_id].quantidade != 0) {
      setSalgados(arrAlterada);
    } else {
      const salgadoAtual = salgados[salgado_id].salgado;
      const arrAlterada = salgados.filter((a) => a.salgado !== salgadoAtual);
      setSalgados(arrAlterada);
    }
  };

  return (
    <>
      <div className="bg-dark text-light p-3">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="collapse m-1" id="navbarToggler">
          <div className="">
            <div className="container-fluid">
              <div className="row row-cols text-center">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-1 mb-3"
                    name="salgado"
                    onChange={handleInputs}
                  />
                  <label className="d-block fs-1 text-start mb-3">
                    Quantidade: {inputs.quantidade || 1}
                  </label>
                  <input
                    type="range"
                    className="form-range mb-3"
                    name="quantidade"
                    min="1"
                    max="40"
                    defaultValue={1}
                    onChange={handleInputs}
                    required={true}
                  ></input>
                </div>
                <button
                  name=""
                  id=""
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  onClick={handleAdicionarSalgado}
                >
                  Adicionar Salgado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container-fluid">
          <h1 className="text-center mt-3 mb-3">Controle Salgados</h1>
          <div className="row row-cols">
            {salgados && salgados.map((e, index) => {
              return (
                <Salgado
                  salgado={e.salgado}
                  quantidade={e.quantidade}
                  onAdd={onAddQuantidade}
                  onSub={onSubQuantidade}
                  id={index}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
