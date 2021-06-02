from .db import db


class ClassSession(db.Model):
    ___tablename__ = 'classSessions'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    imageUrl = db.Column(db.String(1000))
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    time = db.Column(db.DateTime)
    description = db.Column(db.String(750))
    cost = db.Column(db.Integer)

    # need to double check line 10 and line 17 to make sure its working

    gyms = db.relationship('Gym', back_populates='classSessions')

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
