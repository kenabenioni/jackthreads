CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name varchar(40),
  last_name varchar(40),
  email varchar(40),
  auth_id text
);
CREATE TABLE accessories (
  product_id SERIAL PRIMARY KEY,
  name varchar(40),
  brand varchar(40),
  category varchar(40),
  subcategory varchar(40),
  size varchar(10),
  price integer,
  details text,
  quantity integer
);

