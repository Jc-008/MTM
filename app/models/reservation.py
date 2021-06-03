from .db import db

reservations = db.Table(
    'reservation',
    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    ),
    db.Column(
        'classSession_id',
        db.Integer,
        db.ForeignKey('classSessions.id'),
        primary_key=True
    ),
)
