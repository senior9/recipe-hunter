import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { FaDownload } from 'react-icons/fa';
import { Page, Document, Text, PDFDownloadLink } from '@react-pdf/renderer';

const MyDocument = ({ data }) => (
  <Document>
    <Page>
      {data.map((item, index) => (
        <Text key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.question}</Text>
          <Text>{item.answer}</Text>
        </Text>
      ))}
    </Page>
  </Document>
);

const Blog = () => {
  const data = [
    {
      question: 'Question 1',
      answer:
        'What is the difference between controlled and uncontrolled components in React? A controlled component is one whose value is controlled by React, while an uncontrolled component is one whose value is controlled by the DOM.'
    },
    {
      question: 'Question 2',
      answer:
        'How can you validate React props using PropTypes? PropTypes is a library used in React to validate the props passed to a component. It provides a set of validators for different data types, such as string, number, array, object, and more.'
    },
    {
      question: 'Question 3',
      answer:
        'What is the difference between Node.js and Express.js? Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js.'
    },
    {
      question: 'Question 4',
      answer:
        'What is a custom hook in React and why would you create one? A custom hook is a reusable function that allows you to extract common logic from a component. You would create a custom hook to share stateful logic between components, simplify complex logic, and provide an easy-to-use interface for consuming logic.'
    }
  ];
    return (
    <>
      <Header></Header>
      <Container className='mt-3 bg-danger p-3'>
        <Row xs={1} md={2} className='g-4'>
          {data.map((item, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.question}</Card.Title>
                  <Card.Text>{item.answer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <PDFDownloadLink
        document={<MyDocument data={data} />}
        fileName='blog.pdf'
        className='btn btn-outline-info text-dark text-center align-items-center justify-content-around d-flex w-25 mt-3 mx-auto '
      >
        Download PDF
      </PDFDownloadLink>
      <Footer></Footer>
    </>
  );
};

export default Blog;







