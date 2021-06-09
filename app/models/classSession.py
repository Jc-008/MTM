from .db import db
from .favorite import favorites
from .gymToClassSessions import gym_to_class_sessions


class ClassSession(db.Model):
    __tablename__ = 'class_sessions'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    imageUrl = db.Column(db.String(1000))
    # gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    time = db.Column(db.DateTime)
    description = db.Column(db.String(750))
    cost = db.Column(db.Integer)

    # need to double check line 10 and line 17 to make sure its working

    gyms = db.relationship('Gym', back_populates='classSessions')
    userFavs = db.relationship(
        'User', secondary=favorites, back_populates='class_sessions')
    classToGyms = db.relationship(
        'Gym', secondary=gym_to_class_sessions,
        back_populates='class_sessions')
    # Added line 21 after creation of joins table gym_to_class_sessions

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'imageUrl': self.imageUrl,
            # 'gyms': self.gym_id,
            'time': self.time,
            'description': self.description,
            'cost': self.cost,
        }
