import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addWishlist } from "../features/cartSlice";
import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const App = () => {
  const items = useSelector((state) => state.allCart.products);
  console.log(items);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className="container5">
      <Row>
        {items &&
          items.map((item) => (
            <Col key={item.id}>
              <Card style={{ margin: "32px", width: "15rem" }}>
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src={item.img}
                  onClick={() => Navigate(`${item.id}`)}
                />
                <Card.Body style={{ height: "5rem" }}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button
                    className=" mx-4"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <svg
                      className="_1KOMV2"
                      width="16"
                      height="16"
                      viewBox="0 0 18 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=""
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>
                    Add Cart
                  </Button>
                  <Button
                    className=" mx-5"
                    style={{ margin: "0.3rem" }}
                    onClick={() => dispatch(addWishlist(item))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default App;
