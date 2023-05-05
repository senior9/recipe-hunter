import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Blog = () => {
    return (
        <>
        <Header></Header>
        <Container className='mt-3 bg-danger p-3'>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Question 1</Card.Title>
                <Card.Text>
                  What is the difference between controlled and uncontrolled components in React?
                </Card.Text>
                <Card.Text>
                  A controlled component is one whose value is controlled by React, while an uncontrolled component is one whose value is controlled by the DOM.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Question 2</Card.Title>
                <Card.Text>
                  How can you validate React props using PropTypes?
                </Card.Text>
                <Card.Text>
                  PropTypes is a library used in React to validate the props passed to a component. It provides a set of validators for different data types, such as string, number, array, object, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Question 3</Card.Title>
                <Card.Text>
                  What is the difference between Node.js and Express.js?
                </Card.Text>
                <Card.Text>
                  Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Question 4</Card.Title>
                <Card.Text>
                  What is a custom hook in React and why would you create one?
                </Card.Text>
                <Card.Text>
                  A custom hook is a reusable function that allows you to extract common logic from a component. You would create a custom hook to share stateful logic between components, simplify complex logic, and provide an easy-to-use interface for consuming logic.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        
        <Footer></Footer>
        </>

    );
};

export default Blog;