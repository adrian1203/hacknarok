CREATE TABLE user_event(
    event_id bigint NOT NULL,
     user_id bigint NOT NULL,
     FOREIGN KEY (user_id) REFERENCES jhi_user(id),
     FOREIGN KEY (event_id) REFERENCES event(id)
);
