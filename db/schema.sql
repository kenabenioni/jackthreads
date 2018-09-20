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
  price text,
  details text
);
INSERT INTO clothing (name, brand, category, subcategory, price, details)
VALUES ('Happy Patch Tee', 'JackThreads', 'Tees+Tanks', 'V Neck', '11.99', '100% Cotton. Machine Wash.' )



create table shoe_color (
color_id serial primary key, 
product_id integer references shoes(product_id), 
name text
)
insert into clothing_color (product_id, name)
values (1, 'White')



create table shoes_img (
img_id serial primary key, 
img_url text, 
product_id integer references shoes(product_id),
color_id integer references shoe_color(color_id)
)
insert into clothing_img (img_url, product_id, color_id, display_img)
values ('https://cdn.shopify.com/s/files/1/2160/1407/products/OY218469-KAL_2_1800x2250.jpg?v=1536695482', 15, 25, null)

create table clothing_size (
size_id serial primary key, 
product_id integer references clothing(product_id), 
name varchar(10)
)


tables = 
users
clothing
accessories
shoes
clothing_color
accessories_color
shoes_color




