from .db import db
from .gymToClassSessions import gym_to_class_sessions
from .classSession import ClassSession


class Gym(db.Model):
    __tablename__ = 'gyms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    address = db.Column(db.String(255), nullable=False, unique=True)
    phone_number = db.Column(db.String(13))
    # hours_of_operation = db.Column(db.String(255))
    gym_url_image = db.Column(db.String(1000))
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="gyms")
    classSessions = db.relationship("ClassSession", back_populates="gyms")
    # gymClasses = db.relationship(
    #     'ClassSession', secondary=gym_to_class_sessions,
    #     back_populates='classToGyms')
    # Added line 17 after creation of joins table gym_to_class_sessions

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "phone_number": self.phone_number,
            "gym_url_image": self.gym_url_image,
            "user": self.owner_id,
            'classSessions': [classSession.to_dict() for classSession in self.classSessions]
            # "gymClasses": [gymClass.to_dict() for gymClass in self.gymClasses]
            # "hours_of_operation": self.hours_of_operation,
        }
