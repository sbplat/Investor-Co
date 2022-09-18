import sqlite3

def connect_db():
    return sqlite3.connect("database.db")

def create_table_db():
    try:
        connection = connect_db()
        connection.execute("""
            CREATE TABLE IF NOT EXISTS users (
                email TEXT PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                password TEXT NOT NULL
            );
        """)
        connection.commit()
        print("Created users table")
    except Exception as e:
        print("Failed to create users table: ", str(e))
    finally:
        connection.close()

def add_user(user):
    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute("INSERT INTO users (email, name, password) VALUES (?, ?, ?)",
            (user["email"], user["name"], user["password"])
        )
        connection.commit()
        print("Added user:", user["email"])
    except Exception as e:
        print("Add user exception:", str(e))
        connection.rollback()
    finally:
        connection.close()

def get_user_by_email(email):
    user = {}
    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        row = cursor.fetchone()
        user["email"] = row[0]
        user["name"] = row[1]
        user["password"] = row[2]
    except Exception as e:
        print("Get user by email exception:", str(e))
    finally:
        connection.close()

    return user

if __name__ == "__main__":
    create_table_db()
    add_user({"email": "name@example.com", "name": "ABC DEF", "password": "qwerty"})
    print(get_user_by_email("name@example.com"))
