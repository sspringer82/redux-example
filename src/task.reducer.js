import { addTask } from './task.action';

const data = [
  {
    date: '01.09.2017',
    from: '08:00',
    until: '10:30',
    task: 'Setup',
  },
  {
    date: '01.09.2017',
    from: '10:30',
    until: '12:00',
    task: 'Komponentensetup',
  },
  {
    date: '01.09.2017',
    from: '13:00',
    until: '14:00',
    task: 'Styling',
  },
  {
    date: '01.09.2017',
    from: '14:00',
    until: '17:00',
    task: 'Businesslogik',
  },
];

export const tasks = (state = data, action) => {
  switch (action.type) {
    case addTask:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};
