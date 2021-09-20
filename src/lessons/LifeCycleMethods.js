import React from "react";
import Clock from "./Clock";
import { Button, Container } from "semantic-ui-react";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.ticker = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick = () => this.setState({ date: new Date() });

  render() {
    return <p>{this.state.date.toLocaleTimeString()}</p>;
  }
}

class Data extends React.Component {
  state = { data: [], loading: true };

  componentDidMount() {
    fetch("https://some-url-to-get-data.com") //https://randomuser.me/api/?results=10
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((e) => {
        this.setState({
          data: [{ id: 1, name: "faking success in error" }],
          loading: false,
        });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <span>...Loading Data</span>;
    } else {
      return (
        <ol>
          {data.map((d) => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ol>
      );
    }
  }
}

class ClockApp extends React.Component {
  state = { showClock: false };

  toggleShowClock = () => {
    this.setState((state) => {
      return { showClock: !state.showClock };
    });
  };

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        {this.state.showClock && <Clock />}
        <Button onClick={this.toggleShowClock} color="purple">
          Toggle Clock
        </Button>
      </Container>
    );
  }
}

export default ClockApp;
