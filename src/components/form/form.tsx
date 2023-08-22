

function Form(){
    return(
        <div className="col-4">
        <form id="formulario-de-cadastro">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                                <input type="text" className="form-control" name="nome" id="nome"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">Telefone:</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <input type="tel" className="form-control" name="fone" id="fone"/>
                            </div>
                        </div>

                        <div className="mb-3 d-flex justify-content-lg-center">
                            <button type="submit" className="m-1 btn btn-primary">
                               <i className="fas fa-floppy-disk"></i> Salvar
                            </button>
                            <button type="reset" className="m-1 btn btn-danger">
                               <i className="fas fa-broom"></i> Limpar
                            </button>
                        </div>
                    </form>
        </div>
    );
}

export default Form