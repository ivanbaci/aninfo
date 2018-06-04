package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Cliente {

    List<Ticket> tickets;
    private String nombre;

    public Cliente(String myNombre) {
        nombre = myNombre;
        this.tickets = new ArrayList<Ticket>();       
    }

    public void agregarTicket(String descripcion) {
        tickets.add(new Ticket(descripcion));
    }


    public List<Ticket> buscarHistorial() {
        return tickets;
    }
        
}

