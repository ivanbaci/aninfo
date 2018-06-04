package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Cliente {

    List<Ticket> tickets;

    public Ticket() {
        this.tickets = new ArrayList<Ticket>();       
    }

    public void agregarTicket(String descripcion) {
        tickets.add(new Ticket(descripcion));
    }


    public List<Ticket> buscarHistorial() {
        return tickets;
    }
        
}

private Ticket ticket;

ticket = new Ticket();

ticket.modificarEstado("atendido");

