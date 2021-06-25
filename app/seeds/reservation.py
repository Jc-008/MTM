from app.models import db, Gym, Reservation


def seed_reservation():

    for i in range(2):
        reservation = Reservation(user_id=1, classSession_id=i + 1)
        db.session.add(reservation)

    db.session.commit()


def undo_reservation():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
