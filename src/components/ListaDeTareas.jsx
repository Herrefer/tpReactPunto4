import {ListGroup} from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaDeTareas = ({tareasProps}) => {
  return (
    <ListGroup>
      {
        tareasProps.map((elemento, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elemento}></ItemTarea> )
      }
    </ListGroup>
  );
};

export default ListaDeTareas;
