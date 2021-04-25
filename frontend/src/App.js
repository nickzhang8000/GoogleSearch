import React, { Component } from "react";
import getNumber from "./Api/Api";
import "./App.css";
import "./App.scss";

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      number: "",
      loading: false,
    };
    this.fetchNumber = this.fetchNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  async fetchNumber() {
    //call get number api
    this.setState({
      loading: true,
    });
    const number = await getNumber(
      process.env.API_URL + this.state.value + process.env.EXTEND_URL
    );
    this.setState({
      number,
      loading: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          {'"www.sympli.com.au" appears in the Top100 google search times: '}
          {this.state.loading ? (
            <Spinner
              animation="border"
              role="status"
              style={{ alignSelf: "center"}}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <div
              style={{ fontSize: "25px", display: "block", minHeight: "30px" }}
            >
              {this.state.number}
            </div>
          )}

          <InputGroup className="mb-3">
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              value={this.state.value}
              onChange={(v) => this.handleChange(v)}
              placeholder={
                "Please enter the words you want to search like 'e-settlements'"
              }
            />
          </InputGroup>
          <Button variant="primary" onClick={this.fetchNumber}>
            Get Search Number
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
