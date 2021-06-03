from .db import db

favorites = db.Table(
    'favorite',
    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    ),
    db.Column(
        'class_session_id',
        db.Integer,
        db.ForeignKey('class_sessions.id'),
        primary_key=True
    ),
)
