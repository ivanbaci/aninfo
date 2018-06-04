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
  "duration": 138813966,
  "status": "passed"
});
formatter.match({
  "location": "TicketSteps.cuando_lo_quiero_tomar()"
});
formatter.result({
  "duration": 56883,
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
  "duration": 1941320,
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
  "duration": 98799,
  "status": "passed"
});
formatter.match({
  "location": "TicketSteps.cuando_lo_quiero_tomar()"
});
formatter.result({
  "duration": 30124,
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
  "duration": 630388,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertFalse(Assert.java:64)\n\tat org.junit.Assert.assertFalse(Assert.java:74)\n\tat fiuba.TicketSteps.la_operacion_es_rechazada_y_el_ticket_sigue_como(TicketSteps.java:36)\n\tat ✽.Entonces la operacion es rechazada y el ticket sigue como \"atendido\"(ticket.feature:12)\n",
  "status": "failed"
});
});