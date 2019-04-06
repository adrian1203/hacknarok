package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Comment;
import com.mycompany.myapp.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
