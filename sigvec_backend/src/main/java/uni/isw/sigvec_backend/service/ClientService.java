package uni.isw.sigvec_backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uni.isw.sigvec_backend.model.Client;
import uni.isw.sigvec_backend.repository.ClientRepository;

@Service
public class ClientService {
    @Autowired
    ClientRepository personaRepository;
    
    public List<Client> getAll(){
        return personaRepository.findAll();        
    }
    
    public Optional<Client> getOne(long id){
        return personaRepository.findById(id);
    }
    public void saveOrUpdate(Client client){
        personaRepository.save(client);        
    }
    public void delete(Long id){
        personaRepository.deleteById(id);
    }        
        
}
