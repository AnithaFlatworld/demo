import sqlite3

def vulnerable_query(user_input):
    conn = sqlite3.connect("example.db")
    query = f"SELECT * FROM users WHERE username = '{user_input}'"
    conn.execute(query)  # Vulnerable to SQL injection
    conn.close()
