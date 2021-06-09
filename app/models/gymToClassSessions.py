from .db import db

gym_to_class_sessions = db.Table(
    'gym_to_class_session',
    db.Column(
        'gym_id',
        db.Integer,
        db.ForeignKey('gym.id'),
        primary_key=True
    ),
    db.Column(
        'class_session_id',
        db.Integer,
        db.ForeignKey('class_sessions.id'),
        primary_key=True
    ),
)
