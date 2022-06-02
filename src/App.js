import './App.css';
import { Customer } from './components/customer/customer.component';
import { Route, Routes } from 'react-router-dom';
import { AddCustomer } from './components/customer/customer.add';
import { CustomerUpdate } from './components/customer/customer.update';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Customer/>}/>
        <Route path='/add' element={<AddCustomer/>}/>
        <Route path='/update' element={<CustomerUpdate/>}/>
      </Routes>
    </div>
  );
}

export default App;
