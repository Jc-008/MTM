from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(email='demo@aa.io', first_name='Demo', last_name='This', zipcode='10001',
                password='password', available_credit=24, is_owner=False)
    db.session.add(demo)

    cap = User(email='CapAmerica@gmail.com', first_name='Steve', last_name='Rogers', zipcode='10036',
               password='ogAvenger', available_credit=64, is_owner=False)
    db.session.add(cap)

    warMachine = User(email='warMachine@gmail.com', first_name='James', last_name='Rhodes', zipcode='10021',
                      password='warMachine1', available_credit=24, is_owner=False)
    db.session.add(warMachine)

    hulk = User(email='hulk@gmail.com', first_name='Bruce', last_name='Banner', zipcode='10019',
                      password='hulkSmash', available_credit=24, is_owner=True)
    db.session.add(hulk)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
