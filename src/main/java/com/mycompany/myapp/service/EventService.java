package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.repository.AuthorityRepository;
import com.mycompany.myapp.repository.EventRepository;
import com.mycompany.myapp.repository.PersistentTokenRepository;
import com.mycompany.myapp.repository.UserRepository;
import org.springframework.cache.CacheManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
       this.eventRepository = eventRepository;
    }

    public List<Event> findAll(){
        return eventRepository.findAll();
    }

}
