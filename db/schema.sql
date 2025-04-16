CREATE SCHEMA public AUTHORIZATION pg_database_owner;

DROP INDEX IF EXISTS public.products_name_idx;

DROP TABLE IF EXISTS public.products;

CREATE TABLE public.products (
    id serial4 NOT NULL,
    "name" varchar NOT NULL,
    CONSTRAINT products_pk PRIMARY KEY (id)
);
CREATE INDEX products_name_idx ON public.products USING btree (name);