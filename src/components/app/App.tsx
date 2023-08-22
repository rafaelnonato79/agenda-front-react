import Form from '../form/form';
import Table from '../table/table';
import './App.css';

function App() {
  return (
    <><div className="mt-5 d-flex justify-content-lg-center">
      <h1>AGENDA</h1>
    </div><div className="App">
        <div className="row">
          <Form />
          <Table />
          
        </div>
      </div></>
  );
}

export default App;