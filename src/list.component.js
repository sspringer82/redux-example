import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-materialize';
import { ListItem } from './list-item.component';

export const ListComponent = ({ tasks }) => {
  return (
    <Container>
      <Row>
        <Col s={12}>
          <Card title="Übersicht">
            <Table className="striped highlight">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>von</th>
                  <th>bis</th>
                  <th>Stunden</th>
                  <th>Aufgabe</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((item, index) => (
                  <ListItem key={index} task={item} />
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
