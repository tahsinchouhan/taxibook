import Header from "../../components/Header";
import Layout from "../Layout";

import { Row, Col, ProgressBar } from "react-bootstrap";
import { Container } from "reactstrap";
import Title from "../../components/Title";
import Block from "../../components/Block";

const SaveDestination = () => {
  return (
    <Layout>
      <Header bg="https://miro.medium.com/max/1200/1*aUgpxZKMFLW-_vEaQL5qnQ.jpeg">
        <Container >
          <Title 
            title="Saved"
            title_="Destination"
          />
        </Container>
      </Header>
      <Block 
        title="Save"
        title_="Destination"
      >
      </Block>
        <Block 
        title="Recently"
        title_="View Packages"
      ></Block>
    </Layout>
  );
}
 
export default SaveDestination;