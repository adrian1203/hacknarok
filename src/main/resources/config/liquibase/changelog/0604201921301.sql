CREATE TABLE comment (
                       id bigint  NOT NULL,
                       user_id bigint,
                       event_id bigint,
                       date date,
                       content varchar(255),
                       CONSTRAINT comment_pk PRIMARY KEY (id)
);

ALTER TABLE comment ADD CONSTRAINT comment_user
    FOREIGN KEY (user_id)
        REFERENCES jhi_user (id)
        NOT DEFERRABLE
            INITIALLY IMMEDIATE
;


ALTER TABLE comment ADD CONSTRAINT comment_event
    FOREIGN KEY (event_id)
        REFERENCES event (id)
        NOT DEFERRABLE
            INITIALLY IMMEDIATE
;

