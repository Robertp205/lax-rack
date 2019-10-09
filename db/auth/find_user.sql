SELECT u.id, name, email, is_admin, hash 
FROM users u
JOIN users_login ul ON u.id = ul.user_id
WHERE email = $1