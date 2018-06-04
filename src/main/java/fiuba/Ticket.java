package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Ticket {

    private String estado;

    public Ticket() {
        this.estado = "pendiente";        
    }

    public void modificarEstado(String nuevoEstado) {
        this.estado = nuevoEstado;
    }


    public void tomar() {
        if (this.estado = "atendido") {
            throw new TicketAtendidoException();
        }
        this.estado = "atendido";
    }

    public String consultarEstado() {
        return this.estado;
    }
}
