import holdTicket from 'assets/img/support-desk/hold-tickets.png';
import openTicket from 'assets/img/support-desk/open-tickets.png';
import dueTicket from 'assets/img/support-desk/due-tickets.png';
import unassigned from 'assets/img/support-desk/unassigned.png';

import person1 from 'assets/img/team/1-thumb.png';
import person2 from 'assets/img/team/25-thumb.png';
import person3 from 'assets/img/team/14-thumb.png';
import person4 from 'assets/img/team/3-thumb.png';

export const statusData = [
  {
    color: 'primary',
    img: holdTicket,
    percentage: '5.3%',
    count: '25',
    title: 'On Hold Tickets',
    dataArray: [10, 40, 30, 35, 20, 40],
    chartColor: '#2c7be5',
    icon: 'caret-up',
    className:
      'border-200 border-md-200 border-bottom border-md-end pb-x1 pe-md-x1'
  },
  {
    color: 'success',
    img: openTicket,
    percentage: '3.20%',
    count: '05',
    title: 'Open the ticket',
    dataArray: [10, 12, 16, 14, 20, 25],
    chartColor: '#00d27a',
    icon: 'caret-up',
    className: 'ps-md-x1 pb-x1 pt-x1 pt-md-0 border-bottom border-200'
  },
  {
    color: 'info',
    img: dueTicket,
    percentage: '2.3%',
    count: '02',
    title: 'Due Tickets Today',
    dataArray: [15, 10, 15, 10, 12, 10],
    chartColor: '#27bcfd',
    icon: 'caret-down',
    className:
      'border-md-200 border-200 border-bottom border-md-bottom-0 border-md-end pt-x1 pe-md-x1 pb-x1 pb-md-0'
  },
  {
    color: 'warning',
    img: unassigned,
    percentage: '3.12%',
    count: '03',
    title: 'Unassigned',
    dataArray: [10, 15, 12, 11, 14, 12],
    chartColor: '#f5803e',
    icon: 'caret-up',
    className: 'ps-md-x1 pt-x1'
  }
];

export const unresolvedTickets = [
  [20, 18, 15, 20, 12, 15, 10],
  [30, 20, 20, 25, 20, 15, 10],
  [35, 32, 40, 50, 30, 25, 15],
  [15, 25, 20, 18, 10, 15, 25]
];

export const numbersOfTickets = [
  [45, 35, 55, 55, 55, 45],
  [58, 42, 65, 65, 65, 30],
  [38, 25, 42, 42, 42, 45],
  [62, 45, 75, 75, 75, 55]
];

export const todoList = [
  {
    id: 1,
    task: 'Sidenav text cutoff rendering issue',
    title: 'Problem with Falcon theme',
    completed: false
  },
  {
    id: 2,
    task: 'Notify when the WebPack release is ready',
    title: 'Falcon Bootstarp 5',
    completed: false
  },
  {
    id: 3,
    task: 'File Attachments',
    title:
      'Sending attachments automatically attaches them to the notification email that the client receives as well as making them accessible through.',
    completed: false
  },
  {
    id: 4,
    task: 'Billing a Client',
    title:
      "It's also possible to create a billable item for a client when you reply to a ticket. You can generate invoices or log time spent on a ticket.",
    completed: false
  },
  {
    id: 5,
    task: 'Sidenav text cutoff rendering issue',
    title: 'Problem with Falcon theme',
    completed: false
  },
  {
    id: 6,
    task: 'Notify when the WebPack release is ready',
    title: 'Falcon Bootstarp 5',
    completed: false
  },
  {
    id: 7,
    task: 'File Attachments',
    title:
      'Sending attachments automatically attaches them to the notification email that the client receives as well as making them accessible through.',
    completed: false
  }
];

const ticketsBadges = [
  { content: 'Applied', type: 'success' },
  { content: 'In-Review', type: 'danger' },
  { content: 'Interviewing', type: 'warning' },
  { content: 'Onboarded', type: 'info' },
  { content: 'Closed', type: 'secondary' }
];


const ticketsBadgesOrig = [
  { content: 'Recent', type: 'success' },
  { content: 'Overdue', type: 'danger' },
  { content: 'Remaining', type: 'warning' },
  { content: 'Responded', type: 'info' },
  { content: 'Closed', type: 'secondary' }
];

export const tickets = [
  {
    id: 1,
    name: 'Anthony Hopkins',
    avatar: {
      name: 'Anthony Hopkins',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Software Engineer L2 #053114151FE',
    status: ticketsBadges[0],
    priority: {
      title: 'Urgent',
      color: '#e63757',
      data: 100
    },
    agent: 'Anindya',
    date: '2d ago'
  },
  {
    id: 2,
    name: 'Luke',
    avatar: {
      name: 'Luke',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Frontline Grocery #053114152FG',
    status: ticketsBadges[1],
    priority: {
      title: 'High',
      color: '#F68F57',
      data: 75
    },
    agent: 'Anindya',
    date: '2d ago'
  },
  {
    id: 3,
    name: 'Finley',
    avatar: {
      img: person1,
      size: 'xl'
    },
    subject: 'General Merchandizing Accountant #053114154GM',
    status: ticketsBadges[2],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Nowrin',
    date: '2d ago'
  },
  {
    id: 4,
    name: 'Peter Gill',
    avatar: {
      name: 'Peter Gill',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Cashier #2256',
    status: ticketsBadges[3],
    priority: {
      title: 'Low',
      color: '#00D27B',
      data: 25
    },
    agent: 'Nowrin',
    date: '2d ago'
  },
  {
    id: 5,
    name: 'Freya',
    avatar: {
      img: person2,
      size: 'xl'
    },
    subject: 'Dev Ops Support #3264',
    status: ticketsBadges[4],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Khalid',
    date: '2d ago'
  },
  {
    id: 6,
    name: 'Lesley Brown',
    avatar: {
      name: 'Lesley Brown',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Ledger Forensics #2256',
    status: ticketsBadges[3],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Khalid',
    date: '2d ago'
  },
  {
    id: 7,
    name: 'Morrison Banneker',
    avatar: {
      name: 'Morrison Banneker',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Senior Manager, Seller Wallets #R-1991915',
    status: ticketsBadges[4],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Khalid',
    date: '2d ago'
  },
  {
    id: 8,
    name: 'Aar Kay',
    avatar: {
      img: person3,
      size: 'xl'
    },
    subject: 'Director, Tech Ops - Search #R-1965578',
    status: ticketsBadges[0],
    priority: {
      title: 'High',
      color: '#F68F57',
      data: 75
    },
    agent: '',
    date: '2d ago'
  },
  {
    id: 9,
    name: 'Fadil Badr',
    avatar: {
      name: 'Fadil Badr',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Staff Ops Consultant #R-1989266',
    status: ticketsBadges[4],
    priority: {
      title: 'Low',
      color: '#00D27B',
      data: 25
    },
    agent: 'Khalid',
    date: '2d ago'
  },
  {
    id: 10,
    name: 'Regina Kempt',
    avatar: {
      img: person4,
      size: 'xl'
    },
    subject: 'Enterprise Data Strategy Consultant #3260',
    status: ticketsBadges[4],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Anindya',
    date: '2d ago'
  },
  {
    id: 11,
    name: 'Caleb',
    avatar: {
      name: 'Caleb',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Instrastructure Engineer#3259',
    status: ticketsBadges[0],
    priority: {
      title: 'Low',
      color: '#00D27B',
      data: 25
    },
    agent: '',
    date: '2d ago'
  },
  {
    id: 12,
    name: 'Pedro Hemanshu',
    avatar: {
      name: 'Pedro Hemanshu',
      size: 'xl',
      round: 'circle'
    },
    subject: 'Project Manager - Search Ops #R-354654261',
    status: ticketsBadges[4],
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Khalid',
    date: '2d ago'
  }
];
