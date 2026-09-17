-- Trong customers, orders
select * from customers;

-- Tìm khách hàng có đơn hàng
select * from customers c
where exists (
	select 1 from orders o where c.customer_id = o.customer_id
);

-- Khách chưa có đơn hàng
select * from customers c 
where not exists (
	select 1 from orders o where c.customer_id = o.customer_id 
);