select * from clothing
join clothing_img on clothing_img.product_id = clothing.product_id
where clothing_img.img_id = 1