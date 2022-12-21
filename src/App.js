import './App.css';
import FormView from './Component/Form';

const Form= () =>{

return (
  <div>
    <div className='top'>
     <div variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Comments about Course</div>
        </div>
   <FormView/>
    </div>
  );
}

export default Form;