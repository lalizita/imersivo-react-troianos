import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h3 className="text-center">Faça Login</h3>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 5, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email"  placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label >Username</Label>
                                <Input type="text" name="username" placeholder="username" />
                            </FormGroup>
                            <Button color="success"> Entrar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login