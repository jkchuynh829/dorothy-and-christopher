-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

ALTER TABLE IF EXISTS public.guests
    ADD COLUMN allergies character varying COLLATE pg_catalog."default";

ALTER TABLE IF EXISTS public.guests
    ADD COLUMN is_vaccinated boolean NOT NULL DEFAULT false;
