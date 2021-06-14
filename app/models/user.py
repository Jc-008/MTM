from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .favorite import favorites


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    # username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(25), nullable=False)
    zipcode = db.Column(db.String(5), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    available_credit = db.Column(db.Integer, default=24)
    is_owner = db.Column(db.Boolean(), default=False)

    gyms = db.relationship("Gym", back_populates="user")
    favSessions = db.relationship(
        "ClassSession", secondary=favorites, back_populates='userFavs')
    user_reservation = db.relationship(
        "Reservation", backref='reservation_user', cascade='all, delete')
    # Added back_populates on line 21

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "zipcode": self.zipcode,
            'available_credit': self.available_credit,
            'is_owner': self.is_owner,
            "email": self.email,
            'reserved_classes': [classes.to_classes() for classes in self.user_reservation]
            # "username": self.username,
        }
