ALTER TABLE event ADD CONSTRAINT event_jhi_user
    FOREIGN KEY (creator_id)
        REFERENCES jhi_user (id)
        NOT DEFERRABLE
            INITIALLY IMMEDIATE
;
