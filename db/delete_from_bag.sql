delete from clothing_bag where bag_id = ${element};
select * from clothing_bag
join clothing on clothing.product_id = clothing_bag.product_id
join clothing_img on clothing_img.img_id = clothing_bag.img_id
where user_id = ${user_id}