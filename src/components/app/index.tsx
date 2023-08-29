import { useState } from 'react';
import IContato from '../../types/contatos';
import Form from '../form';
import Table from '../table';
import './App.css';

function App() {
  const [contatos, setContatos] = useState<IContato[]>([]);

  return (
 <div className="row">
   <div className="col-4">
     <Form setContatos={setContatos}/>
   </div>
   <div className="col-8">
     <Table/>
   </div>
 </div>
  );
}

export default App;