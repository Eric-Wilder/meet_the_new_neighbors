import React, { Component } from "react";

class LogIn extends Component {

    handleLogIn = () => {

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Log In</h1>
                        </Jumbotron>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                name="email"
                                placeholder="email address"
                            />
                            <Input
                                name="password"
                                placeholder="Please enter password"
                            />
                            <FormBtn onClick={handleLogIn}>
                                Enter
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LogIn;