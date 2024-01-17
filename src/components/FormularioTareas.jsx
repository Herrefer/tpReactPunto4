import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListaDeTareas from './ListaDeTareas';

const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Tarea a agregar" minLength={3} maxLength={80}/>
          <Button variant='info' className='ms-2' type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaDeTareas></ListaDeTareas>
    </section>
  );
};

export default FormularioTareas;
