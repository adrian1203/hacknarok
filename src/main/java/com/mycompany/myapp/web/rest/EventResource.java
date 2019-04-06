package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.service.EventService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EventResource {
    private final EventService eventService;
    private final UserService userService;
    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    public EventResource(EventService eventService, UserService userService){
        this.eventService = eventService;
        this.userService = userService;
    }


    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/event/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable("id") long id){
        return ResponseUtil.wrapOrNotFound(eventService.findById(id));
    }

    @PostMapping("/event")
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) throws URISyntaxException {
        log.debug("REST request to save User : {}", event);

        if (event.getId() != null) {
            throw new BadRequestAlertException("A new event cannot already have an ID", "userManagement", "idexists");
        } else {
            event.setCreator(userService.getUserWithAuthorities().get());
            event.setCreateDate(new Date());
            Event newEvent = eventService.createEvent(event);
            return ResponseEntity.created(new URI("/api/events/" + newEvent.getId()))
                .headers(HeaderUtil.createAlert( "A event is created with identifier " + newEvent.getId(), "TEST"))
                .body(newEvent);
        }
    }

    @GetMapping("/event/{eventId}/{userId}")
    public ResponseEntity<Event> addUserToEvent(@PathVariable("eventId") long eventId, @PathVariable("userId") long userId){
        Event event = eventService.addUserToEvent(eventId, userId);
        return new ResponseEntity<>(event, HttpStatus.OK);
    }
}
