const mockChats = [
  {
    id: '1',
    name: 'Alice',
    lastMessage: 'Certo, a dopo!',
    messages: [
      { sender: 'Alice', text: 'Ehi! Come stai?', time: '10:00' },
      { sender: 'Tu', text: 'Tutto bene, tu?', time: '10:01' },
      { sender: 'Alice', text: 'Ci sentiamo dopo!', time: '10:05' },
      { sender: 'Tu' , text: 'Certo, a dopo!', time: '10:07'},
    ],
  },
  {
    id: '2',
    name: 'Luca Verdi',
    lastMessage: 'Ok, a dopo!',
    messages: [
      { sender: 'Tu', text: 'Hai finito il lavoro?', time: '13:10' },
      { sender: 'Luca', text: 'Quasi, manca poco.', time: '13:12' },
      { sender: 'Tu', text: 'Va bene, quando hai finito chiamami', time: '13:15'},
      { sender: 'Luca', text: 'Ok, a dopo!', time: '13:22' },
    ],
  },
  {
    id: '3',
    name: 'Chiara Rossi',
    lastMessage: 'Ci vediamo domani!',
    messages: [
      { sender: 'Chiara', text: 'Domani ci sei per il caffè?', time: '08:30' },
      { sender: 'Tu', text: 'Certo, a che ora?', time: '08:32' },
      { sender: 'Chiara', text: 'Verso le 10. Ci vediamo domani!', time: '08:35' },
    ],
  },
  {
    id: '4',
    name: 'Mattia De Marco',
    lastMessage: 'Certamente, ci vediamo stasera!',
    messages: [
      { sender: 'Mattia', text: 'Come è andata la partita?', time: '11:30' },
      { sender: 'Tu', text: 'Abbiamo vinto! Ora siamo primi!', time: '11:36' },
      { sender: 'Mattia', text: 'Grandissimi! Stasera mi racconti', time: '11:39' },
      { sender: 'Tu', text: 'Certamente, ci vediamo stasera!', time: '11:43'},
    ],
  },
  {
    id: '5',
    name: 'Direttore',
    lastMessage: 'Certo! Grazie mille',
    messages: [
      { sender: 'Tu', text: 'Ciao direttore, volevo sapere se era possibile prendermi due ore di permesso il giorno 5 Luglio', time: '21:32' },
      { sender: 'Direttore', text: 'Nessun problema, domani compila il foglio dei permessi', time: '21:36' },
      { sender: 'Tu', text: 'Certo! Grazie mille', time: '21:45' },
    ],
  },
];

export default mockChats;
