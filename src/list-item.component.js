import React from 'react';

const extractMinutes = timeString => {
  const timeStringParts = timeString.split(':');
  return parseInt(timeStringParts[0], 10) * 60 + parseInt(timeStringParts[1]);
};

const leftPad = number => (number < 10 ? '0' + number : number.toString());

const format = input => {
  const hours = Math.floor(input / 60);
  const minutes = input - hours * 60;
  return leftPad(hours) + ':' + leftPad(minutes);
};

function sum(from, until) {
  const fromMin = extractMinutes(from);
  const untilMin = extractMinutes(until);
  return format(untilMin - fromMin);
}
export const ListItem = ({ task }) => {
  return (
    <tr>
      <td>{task.date}</td>
      <td>{task.from}</td>
      <td>{task.until}</td>
      <td>{sum(task.from, task.until)}</td>
      <td>{task.task}</td>
    </tr>
  );
};
