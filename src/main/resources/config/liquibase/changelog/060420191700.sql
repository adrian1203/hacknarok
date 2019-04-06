ALTER TABLE event ADD CONSTRAINT event_jhi_user
    FOREIGN KEY (creator)
        REFERENCES jhi_user (id)
        NOT DEFERRABLE
            INITIALLY IMMEDIATE
;
