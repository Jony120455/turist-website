import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {

  const {user} = useAuth()

  const [orders,setOrders] = useState([])

  useEffect(()=>{
    fetch('https://guarded-fortress-27588.herokuapp.com/users')
    .then(res => res.json())
    .then(data => {
      const myOrder = data.filter(order => order.email === user.email)
      setOrders(myOrder)
    })
  },[])


  const cancelBtn = id => {
    const confirm = window.confirm('Are you sure wanna remove this item?')
    if (confirm) {
      fetch(`https://guarded-fortress-27588.herokuapp.com/users/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            alert('Deleted Seccessfully')
            const newAllUser = orders.filter(a => a._id !== id)
            setOrders(newAllUser)
            
        }
    })
    }
}

  return (
    <>
      {
        (orders.length !==0) ? <Container className="my-5">
        <Row xs={1} md={4} sm={1} className="g-4">
          {
            orders.map(orderr => <Col key={orderr._id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={orderr?.img}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{orderr?.title}</Card.Title>
                  <Card.Text>
                    <h6>Traveller</h6>
                    Note to Traveller Fans and Interstellar Travellers: Dear Traveller and Gentlesophont, If you desire discussion of Charted Space with your fellow travellers, we recommend you enter the luxurious TAS-Lounge. Most larger starships possess one sponsored by the Travellers' Aid Society for our High Passage guests.
                    <p>{orderr?.date}</p>
                  </Card.Text>
                </Card.Body>
                <button onClick={()=>cancelBtn(orderr._id)} className="btn bg-success text-white border-0">
                  Cancel
                </button>
              </Card>
            </Col>)
          }
        </Row>
      </Container> : <h1>Please wait ...</h1>
      }
    </>
  );
};

export default MyOrder;
