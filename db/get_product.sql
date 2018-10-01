select * from clothing
join clothing_img on clothing_img.product_id = clothing.product_id
join clothing_color on clothing_color.color_id = clothing_img.color_id
where clothing.product_id = ${id} and clothing_img.img_id = ${img}
order by display_img