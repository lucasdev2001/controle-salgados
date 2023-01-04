const Salgado = (props) => {
  return (
    <>
      <div
        className="btn-group col-12 mb-3"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-danger" onClick={props.onSub} id={props.id}>
          <i className="bi bi-dash fs-1" id={props.id}></i>
        </button>
        <div className="input-group">
          <input type="text" className="form-control text-center fs-1" readOnly value={props.salgado}/>
          <span className="input-group-text fs-1 rounded-0">
            {props.quantidade}
          </span>
        </div>

        <button type="button" className="btn btn-outline-primary" onClick={props.onAdd} id={props.id}>
          <i className="bi bi-plus fs-1" id={props.id}></i>
        </button>
      </div>
    </>
  );
};

export default Salgado;