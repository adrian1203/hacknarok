CREATE TABLE images (
id bigint NOT NULL PRIMARY KEY ,
url VARCHAR(255),
event_id bigint,
CONSTRAINT events_fk FOREIGN KEY (event_id) REFERENCES event (id)
);
