PGDMP         (                {            clients_crud    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17235    clients_crud    DATABASE     g   CREATE DATABASE clients_crud WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Peru.1252';
    DROP DATABASE clients_crud;
                postgres    false            �            1259    17262    clients    TABLE     o  CREATE TABLE public.clients (
    id_client integer NOT NULL,
    last_names character varying(255),
    first_names character varying(255),
    birthdate date,
    email character varying(100),
    document_id_type character varying(50),
    document_id_number bigint,
    n_phone bigint,
    district character varying(255),
    direction character varying(255)
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    17261    clients_id_client_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_client_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.clients_id_client_seq;
       public          postgres    false    210            �           0    0    clients_id_client_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.clients_id_client_seq OWNED BY public.clients.id_client;
          public          postgres    false    209            [           2604    17265    clients id_client    DEFAULT     v   ALTER TABLE ONLY public.clients ALTER COLUMN id_client SET DEFAULT nextval('public.clients_id_client_seq'::regclass);
 @   ALTER TABLE public.clients ALTER COLUMN id_client DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    17262    clients 
   TABLE DATA           �   COPY public.clients (id_client, last_names, first_names, birthdate, email, document_id_type, document_id_number, n_phone, district, direction) FROM stdin;
    public          postgres    false    210          �           0    0    clients_id_client_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.clients_id_client_seq', 1, false);
          public          postgres    false    209            ]           2606    17269    clients clients_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id_client);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    210            �      x������ � �     