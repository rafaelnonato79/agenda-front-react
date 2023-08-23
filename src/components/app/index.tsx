import Form from '../form';
import Table from '../table';
import './App.css';

function App() {
  return (
 <div className="row">
   <div className="col-4">
     <Form />
   </div>
   <div className="col-8">
     <Table/>
   </div>
 </div>
  );
}

export default App;