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


    public boolean tomar() {
        if (this.estado = "atendido") {
            return false;
        }
        this.estado = "atendido";
        return true;
    }

    public String consultarEstado() {
        return this.estado;
    }
}
