-- initialization script
-- see https://github.com/docker-library/docs/blob/master/postgres/README.md#initialization-scripts
CREATE TABLE IF NOT EXISTS t (
   id SERIAL PRIMARY KEY,
   name VARCHAR(30),
   age INT
);

INSERT INTO t(name, age) VALUES ('rick', 31);
