package uni.isw.sigvec_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import uni.isw.sigvec_backend.model.Client;

/**
 *
 * @author USER
 */
public interface ClientRepository extends JpaRepository<Client, Long>{
    
}
