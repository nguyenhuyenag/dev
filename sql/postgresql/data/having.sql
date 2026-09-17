-- Trong order2
select * from orders2;

-- Tìm các nhóm (thành phố) có tổng > 1000
select o.city, SUM(o.total) 
from orders2 o
group by o.city
having sum(o.total ) > 1000;

-- Tìm khách hàng có >= 2 đơn hàng
select o.customer_id, COUNT(*) as count_orders
from orders2 o
group by o.customer_id
having COUNT(*) >= 2
order by o.customer_id;
