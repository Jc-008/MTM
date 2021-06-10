from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Gym

gym_routes = Blueprint(
    'gyms', __name__, url_prefix='/api/gyms')


@gym_routes.route('/')
# @login_required
def all_gyms():
    '''
    Get all gyms in Gym model
    '''
    gyms = Gym.query.all()
    return {"gyms": [gym.to_dict() for gym in gyms]}
    # return jsonify([gym.to_dict() for gym in gyms])


@gym_routes.route('/<int:id>/')
# @login_required
def get_one_gym(id):
    gym = Gym.query.get(id)
    return gym.to_dict()
