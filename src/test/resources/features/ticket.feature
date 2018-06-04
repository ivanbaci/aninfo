# language: es
Característica: Resolución de ticket

  Escenario: Ticket pendiente
    Dado que hay un ticket "pendiente"
    Cuando cuando lo quiero tomar
    Entonces el ticket figura como "atendido"

  Escenario: Ticket atendido
    Dado que hay un ticket "atendido"
    Cuando cuando lo quiero tomar
    Entonces la operacion es rechazada y el ticket sigue como "atendido"