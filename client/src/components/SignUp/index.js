import React, { Component } from "react";

class SignUp extends Component {

    handleFormSubmit = () => {
        
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Sign Up</h1>
                        </Jumbotron>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <h2>Enter Your Info Below:</h2>
                        <form>
                            <Input
                                name="firstName"
                                placeholder="First Name (required)"
                            />
                            <Input
                                name="lastName"
                                placeholder="Last Name (required)"
                            />
                            <Input
                                name="email"
                                placeholder="email address"
                            />
                            <Input
                                name="password1"
                                placeholder="Please enter password"
                            />
                            <Input
                                name="password2"
                                placeholder="Please confirm password"
                            />
                            <FormBtn onClick={handleFormSubmit}>
                                Sign Up
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignUp;