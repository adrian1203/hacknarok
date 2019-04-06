package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.security.AuthoritiesConstants;
import com.mycompany.myapp.service.EventService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.dto.UserDTO;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.errors.EmailAlreadyUsedException;
import com.mycompany.myapp.web.rest.errors.LoginAlreadyUsedException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EventResource {
    private final EventService eventService;
    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    public EventResource(EventService eventService){
        this.eventService = eventService;
    }


    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/events")
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) throws URISyntaxException {
        log.debug("REST request to save User : {}", event);

        if (event.getId() != null) {
            throw new BadRequestAlertException("A new event cannot already have an ID", "userManagement", "idexists");
        } else {
            Event newEvent = eventService.createEvent(event);
            return ResponseEntity.created(new URI("/api/events/" + newEvent.getId()))
                .headers(HeaderUtil.createAlert( "A event is created with identifier " + newEvent.getId(), "TEST"))
                .body(newEvent);
        }
    }

}
