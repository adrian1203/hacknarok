package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Comment;
import com.mycompany.myapp.domain.Event;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.security.AuthoritiesConstants;
import com.mycompany.myapp.service.CommentService;
import com.mycompany.myapp.service.EventService;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.dto.UserDTO;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.errors.EmailAlreadyUsedException;
import com.mycompany.myapp.web.rest.errors.LoginAlreadyUsedException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
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
public class CommentResource {
    private final CommentService commentService;
    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    public CommentResource(CommentService commentService){
        this.commentService = commentService;
    }

    @GetMapping("/{eventId}/comments")
    public ResponseEntity<List<Comment>> getEventComments(@PathVariable("eventId") long eventId) {
        return new ResponseEntity<>(commentService.findEventComments(eventId), HttpStatus.OK);
    }
    


}
