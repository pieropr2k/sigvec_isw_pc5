package uni.isw.sigvec_backend.model;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Data;

@Data
@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_client; // Modificación: Cambié el nombre de la variable

    @Column(name = "last_names")
    private String last_names; // Modificación: Cambié el nombre de la variable

    @Column(name = "first_names")
    private String first_names; // Modificación: Cambié el nombre de la variable

    private Date birthdate;

    private String email;
            
    @Column(name = "document_id_type")
    private String document_id_type; // Modificación: Cambié el nombre de la variable

    @Column(name = "document_id_number")
    private long document_id_number; // Modificación: Cambié el nombre de la variable

    private long n_phone;

    private String district;
    private String direction;


    public Long getClientId() {
        return id_client;
    }

    @Override
    public String toString() {
        return "Persona{" + "id_persona=" + id_client + ", apellido_paterno=" +
                last_names + ", nombres=" + first_names
                + ", fecha_nacimiento=" + birthdate
                + ", id_tipo_documento=" + document_id_type
                + ", ndocumento=" + document_id_number + ", direccion="
                + direction + ", email=" + email + '}';
    }
}
