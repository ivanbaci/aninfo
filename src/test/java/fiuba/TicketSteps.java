package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

public class TicketSteps {

    private Ticket ticket;
    private boolean resultadoExitoso;
       

    @Dado("^que hay un ticket \"(.*?)\"")
    public void que_hay_un_ticket(String estado) throws Throwable {
        ticket = new Ticket("Problema visión celular");
        ticket.modificarEstado(estado);
    }

    @Cuando("^cuando lo quiero tomar")
    public void cuando_lo_quiero_tomar() throws Throwable {
        resultadoExitoso = ticket.tomar();
    }

    @Entonces("^el ticket figura como \"(.*?)\"")
    public void el_ticket_figura_como(String estado) throws Throwable {
        assertTrue(resultadoExitoso);
        assertEquals(estado, ticket.consultarEstado());
    }

    @Entonces("^la operacion es rechazada y el ticket sigue como \"(.*?)\"")
    public void la_operacion_es_rechazada_y_el_ticket_sigue_como(String estado) throws Throwable {
        assertFalse(resultadoExitoso);
        assertEquals(estado, ticket.consultarEstado());
    }

}
