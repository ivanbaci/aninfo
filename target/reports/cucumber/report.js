$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ticket.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Resolución de ticket",
  "description": "",
  "id": "resolución-de-ticket",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Ticket pendiente",
  "description": "",
  "id": "resolución-de-ticket;ticket-pendiente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que hay un ticket \"pendiente\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "cuando lo quiero tomar",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "el ticket figura como \"atendido\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "pendiente",
      "offset": 19
    }
  ],
  "location": "TicketSteps.que_hay_un_ticket(String)"
});
formatter.result({
  "duration": 143540383,
  "status": "passed"
});
formatter.match({
  "location": "TicketSteps.cuando_lo_quiero_tomar()"
});
formatter.result({
  "duration": 58498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atendido",
      "offset": 23
    }
  ],
  "location": "TicketSteps.el_ticket_figura_como(String)"
});
formatter.result({
  "duration": 3331730,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ticket atendido",
  "description": "",
  "id": "resolución-de-ticket;ticket-atendido",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que hay un ticket \"atendido\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "cuando lo quiero tomar",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "la operacion es rechazada y el ticket sigue como \"atendido\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "atendido",
      "offset": 19
    }
  ],
  "location": "TicketSteps.que_hay_un_ticket(String)"
});
formatter.result({
  "duration": 95250,
  "status": "passed"
});
formatter.match({
  "location": "TicketSteps.cuando_lo_quiero_tomar()"
});
formatter.result({
  "duration": 128542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atendido",
      "offset": 50
    }
  ],
  "location": "TicketSteps.la_operacion_es_rechazada_y_el_ticket_sigue_como(String)"
});
formatter.result({
  "duration": 93695,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Historial de tickets por cliente",
  "description": "",
  "id": "resolución-de-ticket;historial-de-tickets-por-cliente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 15,
  "name": "que hay tres ticket de \"santander\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "cuando busco el historial de tickets",
  "keyword": "Cuando "
});
formatter.step({
  "line": 17,
  "name": "figuran \"3\" tickets",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "santander",
      "offset": 24
    }
  ],
  "location": "TicketSteps.que_hay_tres_ticket_de(String)"
});
formatter.result({
  "duration": 162616,
  "status": "passed"
});
formatter.match({
  "location": "TicketSteps.cuando_busco_el_historial_de_tickets()"
});
formatter.result({
  "duration": 41945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "TicketSteps.el_ticket_figura_como(int)"
});
formatter.result({
  "duration": 926624,
  "status": "passed"
});
});