from .db import db


class Class(db.Model):
    ___tablename__ = 'Classes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    imageUrl = db.Column(db.String(1000))
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    time = db.Column(db.datetime)
    description = db.Column(db.String(750))
    cost = db.Column(db.Integer)

    gyms = db.relationship('Gym', back_populates='Classes')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'imageUrl': self.imageUrl,
            'gyms': self.gym_id,
            'time': self.time,
            'description': self.description,
            'cost': self.cost,
        }
