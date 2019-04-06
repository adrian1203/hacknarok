package com.mycompany.myapp.service;

import com.mycompany.myapp.config.Constants;
import com.mycompany.myapp.domain.Authority;
import com.mycompany.myapp.domain.Comment;
import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.*;
import com.mycompany.myapp.service.dto.UserDTO;
import com.mycompany.myapp.service.util.RandomUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sun.rmi.runtime.Log;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserService userService;
    private final EventService eventService;
    private final Logger log = LoggerFactory.getLogger(EventService.class);

    public CommentService(CommentRepository commentRepository, UserService userService, EventService eventService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.eventService = eventService;
    }

    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    public List<Comment> findEventComments(Long eventId){
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().filter(comment -> comment.getEvent().getId() == eventId).collect(Collectors.toList());


    }
}
