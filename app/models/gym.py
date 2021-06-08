from .db import db


class Gym(db.Model):
    __tablename__ = 'gyms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(255), nullable=False, unique=True)
    phone_number = db.Column(db.String(10))
    hours_of_operation = db.Column(db.String(255))
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates="gyms")
    classSessions = db.relationship("ClassSession", back_populates="gyms")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "phone_number": self.phone_number,
            "hours_of_operation": self.hours_of_operation,
            "users": self.owner_id
        }
