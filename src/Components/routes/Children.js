import {Route,Routes} from 'react-router-dom';
import CustomForm from '../forms/Form';
import CustomeTable from '../table/CustomTable';

export default function Children(){
    return(  <>
    
    
    <Routes>
      <Route exact path='/' element={<CustomeTable />}></Route>
      <Route exact path='/Forms' element={<CustomForm />}></Route>
    </Routes>
    </>)
}