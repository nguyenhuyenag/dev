# SQL JOIN

JOIN dùng để kết hợp dữ liệu từ hai hoặc nhiều bảng dựa trên một điều kiện liên kết.

**Điều kiện khớp:**

```sql
customers.id = orders.customer_id
```

### Bảng `customers`

```text
+----+----------+
| id | name     |
+----+----------+
| 1  | Alice    |
| 2  | Bob      |
| 3  | Charlie  |
+----+----------+
```

### Bảng `orders`

```text
+----+-------------+--------+
| id | customer_id | amount |
+----+-------------+--------+
| 1  | 1           | 100    |
| 2  | 1           | 200    |
| 3  | 2           | 150    |
| 4  | 4           | 300    |
+----+-------------+--------+
```

## INNER JOIN

Chỉ lấy những dòng có dữ liệu khớp ở cả 2 bảng.

```sql
SELECT c.name, o.amount
FROM customers c
INNER JOIN orders o
    ON c.id = o.customer_id;
```

Kết quả:

```text
+-------+--------+
| name  | amount |
+-------+--------+
| Alice | 100    |
| Alice | 200    |
| Bob   | 150    |
+-------+--------+
```

`customer_id = 4` trong `orders` không có customer tương ứng trong `customers`, nên bị loại.

---

## LEFT JOIN

Lấy tất cả các dòng của bảng bên trái (`customers`), kể cả khi không có dòng tương ứng ở bảng bên phải.

```sql
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o
    ON c.id = o.customer_id;
```

Kết quả:

```text
+---------+--------+
| name    | amount |
+---------+--------+
| Alice   | 100    |
| Alice   | 200    |
| Bob     | 150    |
| Charlie | NULL   |
+---------+--------+
```

`Charlie` không có order tương ứng nên `amount = NULL`.

---

## RIGHT JOIN

Lấy tất cả các dòng của bảng bên phải (`orders`), kể cả khi không có customer tương ứng.

```sql
SELECT c.name, o.amount
FROM customers c
RIGHT JOIN orders o
    ON c.id = o.customer_id;
```

Kết quả:

```text
+-------+--------+
| name  | amount |
+-------+--------+
| Alice | 100    |
| Alice | 200    |
| Bob   | 150    |
| NULL  | 300    |
+-------+--------+
```

Order có `customer_id = 4` không có customer tương ứng nên `name = NULL`.

---

## FULL OUTER JOIN

Lấy tất cả các dòng của cả hai bảng.

```sql
SELECT c.name, o.amount
FROM customers c
FULL OUTER JOIN orders o
    ON c.id = o.customer_id;
```

Kết quả:

```text
+---------+--------+
| name    | amount |
+---------+--------+
| Alice   | 100    |
| Alice   | 200    |
| Bob     | 150    |
| Charlie | NULL   |
| NULL    | 300    |
+---------+--------+
```

`Charlie` chỉ có trong `customers`, còn order `300` chỉ có trong `orders`, nên cả hai đều được giữ lại.

> **Lưu ý:** PostgreSQL hỗ trợ `FULL OUTER JOIN`. MySQL không hỗ trợ trực tiếp `FULL OUTER JOIN`.

---

## Cách nhớ

```text
INNER JOIN
→ Chỉ lấy các dòng khớp ở cả hai bảng.

LEFT JOIN
→ Giữ tất cả bảng trái + các dòng khớp của bảng phải.

RIGHT JOIN
→ Giữ tất cả bảng phải + các dòng khớp của bảng trái.

FULL OUTER JOIN
→ Giữ tất cả các dòng của cả hai bảng.
```

Với:

```sql
FROM customers c
LEFT JOIN orders o
    ON c.id = o.customer_id
```

thì:

```text
customers → bảng bên trái
orders    → bảng bên phải
```