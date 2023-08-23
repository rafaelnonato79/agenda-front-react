function Table(){
    return(
        <div>
        <div className="d-flex justify-content-lg-center">
            <h1>Lista de Contatos</h1>
        </div>
        <table id="lista-de-contatos" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
    )
}

export default Table