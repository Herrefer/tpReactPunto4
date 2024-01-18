import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {nombreTarea}<Button className="btn btn-danger">Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
