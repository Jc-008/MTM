from sqlalchemy.orm import relationship
from .db import db

# reservations = db.Table(
#     'reservation',
#     db.Column(
#         'user_id',
#         db.Integer,
#         db.ForeignKey('users.id'),
#         primary_key=True
#     ),
#     db.Column(
#         'classSession_id',
#         db.Integer,
#         db.ForeignKey('classSessions.id'),
#         primary_key=True
#     ),
# )


class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    classSession_id = db.Column(db.Integer, db.ForeignKey('class_sessions.id'))

    def to_users(self):
        return {
            'reservationId': self.id,
            'user': self.reservation_user.to_dict(),
        }

    def to_classes(self):
        return {
            'reservationId': self.id,
            'class': self.reservation_class.to_dict(),
        }
