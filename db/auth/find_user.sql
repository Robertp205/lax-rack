SELECT u.id, username, hash 
FROM users u
JOIN users_login ul ON u.id = ul.user_id
WHERE username = $1