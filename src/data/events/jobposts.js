import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    calendar: { month: 'Sep', day: '26' },
    title: "Global Technology Innovation & Partnerships Strategy, Vice President",
    badge: {
      title: 'reposted',
      type: 'subtle-success'
    },
    location: "Cambridge, MA",
    description: 'AID MIT in running the Robotics Lab..'

  },
  {
    id: uuid(),
    calendar: { month: 'Sep', day: '29' },
    title: 'Enterprise Data Strategy Consultantl',


    location: 'Workbar - Central Square, Cambridge',
    description: 'Data Strategy control and operations consulting to ensure...'
  },
  {
    id: uuid(),
    calendar: { month: 'Oct', day: '16' },
    title: 'Cashier',
    badge: {
      title: 'new',
      type: 'subtle-success'
    },
    location: 'Westwood, MA',
    description: 'Front Line  Service to manage daily cash operations...'
  },
  {
    id: uuid(),
    calendar: { month: 'Oct', day: '11' },
    title: 'Pianist',
    location: 'Tavern on the Greend, New York',
    badge: {
      title: 'low demand',
      type: 'subtle-warning'
    },

    description: 'Chamber Music Society would ...'
  },
  {
    id: uuid(),
    calendar: { month: 'Oct', day: '16' },
    title: 'Ledger Forensics Consultant',
    badge: {
      title: 'new',
      type: 'subtle-success'
    },

    location: 'Hucks Law, Boston, MA',
    description: 'Review the client\'s ledgers and book on record .. '
  }
];

