-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-04-06 14:46:38.045

-- tables
-- Table: events
CREATE TABLE event (
    id bigint  NOT NULL,
    creator bigint  NOT NULL,
    adddate date  NOT NULL,
    startdate date  NOT NULL,
    enddate date  NOT NULL,
    latitude decimal(8,7)  NOT NULL,
    longitude  decimal(9,6)  NOT NULL,
    title varchar(255)  NOT NULL,
    description varchar(255)  NOT NULL,
    rating decimal(3,2)  NOT NULL,
    CONSTRAINT events_pk PRIMARY KEY (id)
);

-- End of file.

