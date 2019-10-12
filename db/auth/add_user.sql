INSERT INTO users 
(username, email, is_admin)
VALUES 
(${username}, ${email}, false)
RETURNING id;