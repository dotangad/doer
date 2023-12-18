CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200),
	"email" varchar(200),
	"createdat" date DEFAULT current_timestamp
);
