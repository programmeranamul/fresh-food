import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Product.css";

const Products = (props) => {
  const { _id, imageURL, name, wight, price } = props.product;

  const history = useHistory();

  return (
    <div className="col-md-4 col-sm-6 col-12 d-sm-flex">
      {/* <div className="p-4 mt-5 shadow single-product">
        <img src={imageURL} className="img-fluid item-image" alt={name} />
        <h5 className="m-3">{name} {wight && ` - ${wight}`}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-success">${price}</h4>
          <button className="btn btn-success" onClick={() => history.push(`/product/${_id}`)}>Buy Now</button>
        </div>
      </div> */}
      <Card className="mb-4">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>
            {name} {wight && ` - ${wight}`}
          </Card.Title>
         {/* <div className="d-flex justify-content-between align-items-center">
         <Card.Text className="font-weight-bold">${price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
         </div> */}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
        <Card.Text className="font-weight-bold">${price}</Card.Text>
          <Button variant="primary" onClick={() => history.push(`/product/${_id}`)}>Buy Now</Button>
        </Card.Footer>
      
        
        
      </Card>
    </div>
  );
};

export default Products;
