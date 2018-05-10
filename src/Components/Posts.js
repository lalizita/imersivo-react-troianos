import React, { Component } from 'react'
import { Button, Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap';
import Axios from 'axios';

class ItemPost extends Component{
    render(){
        return(
            <ListGroup>
                <ListGroupItem>sdkfj sdvflj</ListGroupItem>
            </ListGroup>
        )
    }
}

class Posts extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 5, offset: 3 }}>
                        <ItemPost/>
                    </Col>
                </Row>
            </Container>       
        )
    }
}

export default Posts