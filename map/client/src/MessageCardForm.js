import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Button, Card, CardText, CardTitle, Form, FormGroup, Input, Label} from 'reactstrap';

const MessageCardForm = (props) => {
  return (
    <Card body className="message-form">
      <CardTitle>Welcome to Chi Ngan app</CardTitle>
      <CardText>Leave a message with your location!</CardText>
      {
        !props.sendingMessage && !props.sentMessage && props.haveUsersLocation ?
          <Form onSubmit={props.formSubmitted}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={props.valueChanged}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"/>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                onChange={props.valueChanged}
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter a message"/>
            </FormGroup>
            <Button type="cancel" color="danger" onClick={props.cancelMessage}>Cancel</Button> {' '}
            <Button type="submit" color="info" disabled={!props.formIsValid()}>Send</Button>
          </Form> :
          props.sendingMessage || !props.haveUsersLocation ?
            <video
              autoPlay
              loop
              src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"/> :
            <CardText>Thanks for submitting a message!</CardText>
      }
    </Card>
  );
};

export default MessageCardForm;