package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

public class HistorialSteps {

    private Cliente cliente;
    List<Ticket> tickets;
       

    @Dado("^que hay \"(.*?)\" tickets de \"(.*?)\"")
    public void que_hay_tickets_de(int cantTickets, String cliente) throws Throwable {
        cliente = new Cliente();
        for (int i = 0; i < cantTickets ; ++i) {
                cliente.agregarTicket("Problema");        
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
