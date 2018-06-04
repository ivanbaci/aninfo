package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

import java.util.List;

public class TicketSteps {

    private Ticket ticket;
    private boolean resultadoExitoso;

    private Cliente cliente;
    List<Ticket> tickets;
    private String DESCRIPCION = "Problema de sistema";
       

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
    
    @Dado("^que hay tres ticket de \"(.*?)\"$")
    public void que_hay_tres_ticket_de(String nombreCliente) throws Throwable {
        cliente = new Cliente(nombreCliente);
        for (int i = 0; i < 3 ; ++i) {
                cliente.agregarTicket(DESCRIPCION);        
            } 
    }


    @Cuando("^cuando busco el historial de tickets")
    public void cuando_busco_el_historial_de_tickets() throws Throwable {
        tickets = cliente.buscarHistorial();    
    }

    @Entonces("^figuran \"(.*?)\" tickets")
    public void el_ticket_figura_como(int cantTickets) throws Throwable {
        assertEquals(cantTickets, tickets.size());
    }

}
