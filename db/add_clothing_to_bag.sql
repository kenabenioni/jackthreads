insert into clothing_bag (product_id, img_id, color_id, user_id) values (${product_id}, ${img_id}, ${color_id}, ${user_id});
select * from clothing_bag
join clothing on clothing.product_id = clothing_bag.product_id
join clothing_img on clothing_img.img_id = clothing_bag.img_id