package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Ticket {

    private String estado;
    private String descripcion;

    public Ticket(String myDescripcion) {
        this.estado = "pendiente";
        this.descripcion = myDescripcion;         
    }

    public void modificarEstado(String nuevoEstado) {
        this.estado = nuevoEstado;
    }


    public boolean tomar() {
        if (this.estado.equals("atendido")) {
            return false;
        }
        this.estado = "atendido";
        return true;
    }

    public String consultarEstado() {
        return this.estado;
    }
}

