select * from clothing
join clothing_img on clothing_img.product_id = clothing.product_id
where display_img = true
order by img_id;