const Salgado = (props) => {
  return (
    <>
      <div
        class="btn-group col-12 mb-3"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" class="btn btn-outline-danger" onClick={props.onSub} id={props.id}>
          <i class="bi bi-dash fs-1" id={props.id}></i>
        </button>
        <div class="input-group">
          <input type="text" class="form-control text-center fs-1" readOnly value={props.salgado}/>
          <span class="input-group-text fs-1 rounded-0">
            {props.quantidade}
          </span>
        </div>

        <button type="button" class="btn btn-outline-primary" onClick={props.onAdd} id={props.id}>
          <i class="bi bi-plus fs-1" id={props.id}></i>
        </button>
      </div>
    </>
  );
};

export default Salgado;