import './styles.css';
const Form = () => {
  return (
    <div className="product-crud-conatiner">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form action="">
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="product-crud-input">
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  name="teste"
                  rows={10}
                  className="form-control base-input h-auto"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-conatiner">
            <button className="btn btn-outline-danger product-crud-buttons">
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-buttons text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
