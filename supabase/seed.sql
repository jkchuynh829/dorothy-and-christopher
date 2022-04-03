BEGIN;
    WITH bride_and_groom_party AS (
        INSERT INTO parties(name, type, size)
        VALUES
            ('Chris & Dorothy', 'bride & groom', 2)
        returning id
    )
    INSERT INTO guests(first_name, last_name, party_id)
    VALUES
        ('Christopher', 'Cano', (SELECT id FROM bride_and_groom_party)), 
        ('Dorothy', 'Le', (SELECT id FROM bride_and_groom_party));
COMMIT;