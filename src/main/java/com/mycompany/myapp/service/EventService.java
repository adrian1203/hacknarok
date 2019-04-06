package com.mycompany.myapp.service;

import com.mycompany.myapp.config.Constants;
import com.mycompany.myapp.domain.Authority;
import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.AuthorityRepository;
import com.mycompany.myapp.repository.EventRepository;
import com.mycompany.myapp.repository.PersistentTokenRepository;
import com.mycompany.myapp.repository.UserRepository;
import com.mycompany.myapp.service.dto.UserDTO;
import com.mycompany.myapp.service.util.RandomUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.spec.ECField;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class EventService {

    private final EventRepository eventRepository;
    private final UserService userService;
    private final Logger log = LoggerFactory.getLogger(EventService.class);

    public EventService(EventRepository eventRepository, UserService userService) {
        this.eventRepository = eventRepository;
        this.userService = userService;
    }

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event createEvent(Event event) {
        eventRepository.save(event);
        log.debug("Created Information for Event: {}", event);
        return event;
    }

    public Optional<Event> findById(Long id){
        return eventRepository.findById(id);
    }

    public Event addUserToEvent(long eventId, long userId){
        Optional<User> user = userService.getUserWithAuthorities(userId);
        Optional<Event> event = eventRepository.findById(eventId);

        Set<User> participants = event.get().getParticipants();
        participants.add(user.get());

        event.get().setParticipants(participants);
        eventRepository.save(event.get());
        return event.get();
    }

    public Event addRating(Long eventId, Integer rate){
        Optional<Event> event=eventRepository.findById(eventId);
        Double oldRate=event.get().getRating();
        Integer oldRateNumber=event.get().getRating_number();

        Double newRate=(oldRate*oldRateNumber+rate)/(oldRate+1);
        event.get().setRating(newRate);
        event.get().setRating_number(oldRateNumber+1);
        eventRepository.save(event.get());
        return event.get();
    }

}
