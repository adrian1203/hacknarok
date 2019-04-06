CREATE TABLE event (
    id bigint  NOT NULL,
    creator_id bigint  NOT NULL,
    adddate date  ,
    startdate date  ,
    enddate date  ,
    latitude real  ,
    longitude  real  ,
    title varchar(255)  ,
    description varchar(255) ,
    rating real  ,
    CONSTRAINT events_pk PRIMARY KEY (id)
);


ALTER TABLE event ADD CONSTRAINT event_jhi_user
    FOREIGN KEY (creator_id)
        REFERENCES jhi_user (id)
        NOT DEFERRABLE
            INITIALLY IMMEDIATE
;
