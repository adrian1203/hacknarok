package com.mycompany.myapp.web.rest;


import com.mycompany.myapp.config.Constants;
import com.mycompany.myapp.domain.Authority;
import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.AuthorityRepository;
import com.mycompany.myapp.repository.UserRepository;
import com.mycompany.myapp.security.AuthoritiesConstants;
import com.mycompany.myapp.service.EventService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.util.RandomUtil;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

@RestController
@RequestMapping("/api/faker")
public class FakerResource {

    private final String[] names = new String[]{"Bartek", "Agusia", "Adrian", "Janek", "Kuba", "Lukasz", "Rafal", "Maria", "Karolcia", "Eluncia"};
    private final String[] surnames = new String[]{"Nowak", "Kowalski", "Ptaszek", "Tiger", "Linkiewicz", "Polak", "Mrowka", "Klimek", "Mitkowski"};




    private final EventService eventService;
    private final PasswordEncoder passwordEncoder;
    private final AuthorityRepository authorityRepository;
    private final UserRepository userRepository;

    private final UserService userService;
    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    public FakerResource(EventService eventService, UserService userService, PasswordEncoder passwordEncoder, AuthorityRepository authorityRepository, UserRepository userRepository){

        this.eventService = eventService;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authorityRepository = authorityRepository;
        this.userRepository = userRepository;

    }


    @GetMapping("/users")
    public ResponseEntity<String> fakeUsers() {

        List<User> users = userRepository.findAll();
        for (User user: users) {
            if(user.getId() > 4) {
                userRepository.deleteById(user.getId());
            }
        }

        for (int i = 0; i < 15; i++) {
            String name = names[new Random().nextInt(names.length)];
            String surname = surnames[new Random().nextInt(surnames.length)];

            User newUser = new User();
            String login = name + surname + i;
            System.out.println(login);
            String encryptedPassword = passwordEncoder.encode("haslo");
            newUser.setLogin(login);
            // new user gets initially a generated password
            newUser.setPassword(encryptedPassword);
            newUser.setFirstName(name);
            newUser.setLastName(surname);
            newUser.setEmail(name + "." + surname + i+ "@gmail.com");
            newUser.setImageUrl("url do zdjecia");
            newUser.setLangKey(Constants.DEFAULT_LANGUAGE);
            // new user is not active
            newUser.setActivated(true);
            // new user gets registration key
            newUser.setActivationKey(RandomUtil.generateActivationKey());
            Set<Authority> authorities = new HashSet<>();
            authorityRepository.findById(AuthoritiesConstants.USER).ifPresent(authorities::add);
            newUser.setAuthorities(authorities);
            userRepository.save(newUser);
        }

        return new ResponseEntity<>("DODAŁEM USERKÓW BYKU", HttpStatus.OK);
    }

    @GetMapping("/events")
    public ResponseEntity<Event> fakeEvents(){



        return ResponseUtil.wrapOrNotFound(eventService.findById(new Long(123)));
    }

}
