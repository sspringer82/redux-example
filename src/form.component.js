import React from 'react';
import { Container, Row, Col, Card, Input, Button } from 'react-materialize';

export class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      from: '',
      until: '',
      task: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.onAddTask(this.state);
    this.setState({
      date: '',
      from: '',
      until: '',
      task: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <Card title="Neue Aufgabe">
              <Row>
                <Input
                  s={2}
                  label="Datum"
                  id="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
                <Input
                  s={2}
                  label="von"
                  id="from"
                  value={this.state.from}
                  onChange={this.handleChange}
                />
                <Input
                  s={2}
                  label="bis"
                  id="until"
                  value={this.state.until}
                  onChange={this.handleChange}
                />
                <Input
                  s={6}
                  label="Aufgabe"
                  id="task"
                  value={this.state.task}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Col s={12} style={{ textAlign: 'right' }}>
                  <Button waves="light" onClick={this.handleSubmit}>
                    speichern
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
