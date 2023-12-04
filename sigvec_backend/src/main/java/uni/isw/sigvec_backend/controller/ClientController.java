package uni.isw.sigvec_backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import uni.isw.sigvec_backend.model.Client;
import uni.isw.sigvec_backend.service.ClientService;

@RestController
@RequestMapping(path="api/v1/clients")
public class ClientController {
    private Logger logger=LoggerFactory.getLogger(this.getClass());
    @Autowired
    ClientService clientService;
    
    @RequestMapping(value="/listar",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Client>> getAll(){
    //public List<Client> getClients(){
        logger.info("> getAll[Clients]");
        List<Client> list=null;
        try{
            list = clientService.getAll();
            if (list == null)
                list = new ArrayList<>();         
        }
        catch(Exception e){
            logger.error("Excepcion inesperada al obtener la lista de personas",e);
            return new ResponseEntity<>(list, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        logger.info("> getClients[Persona]");        
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/search", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> getOne(@RequestBody Optional<Client> client) {
        logger.info(">getClient" + client.toString());
        try {
            client = clientService.getOne(client.get().getClientId());
        } catch (Exception e) {
            logger.error("Excepcion inesperada al obtener el cliente", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(client.get(), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/agregar", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> create(@RequestBody Client client) {
        logger.info(">agregar:" + client.toString());
        try {
            clientService.saveOrUpdate(client);
        } catch (Exception e) {
            logger.error("Excepcion inesperada al agregar cliente", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(client, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/actualizar", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> update(@RequestBody Client client) {
        logger.info(">actualizar:" + client.toString());
        try {
            clientService.saveOrUpdate(client);
        } catch (Exception e) {
            logger.error("Excepcion inesperada al actualizar cliente", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(client, HttpStatus.OK);
    }
   
    // Funciona en un tester como Postman, sin embargo en el frontend el CORS gana
    @RequestMapping(value = "/eliminar", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> delete(@RequestBody Optional<Client> client) {
        logger.info(">eliminar:" + client.toString());
        try {
            client = clientService.getOne(client.get().getClientId());
            if (client.isPresent())
                clientService.delete(client.get().getClientId());
        } catch (Exception e) {
            logger.error("Excepcion inesperada al eliminar cliente", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(client.get(), HttpStatus.OK);
    }
}