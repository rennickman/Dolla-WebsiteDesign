import React from 'react';

import { Container, Text, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './SigninElements';


const Signin = () => {

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">

                            {/* Signin form */}
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput type="email" required />
                                <FormLabel htmlFor="for">Password</FormLabel>
                                <FormInput type="password" required />
                                <FormButton type="submit">Continue</FormButton>
                                <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Signin;
