from .db import db
from .favorite import favorites


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
    userFavs = db.relationship('User', secondary=favorites)

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
