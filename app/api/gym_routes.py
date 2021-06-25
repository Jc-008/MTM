from flask import Blueprint, jsonify, request
from flask_login import login_required
from os import environ
import os
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
    # return {"gyms": [gym.to_dict() for gym in gyms]}
    return {gym.id: gym.to_dict() for gym in gyms}


@gym_routes.route('/<int:id>/')
# @login_required
def get_one_gym(id):
    gym = Gym.query.get(id)
    return gym.to_dict()


# /api/gyms/add/
# @gym_routes.route('/add/')
# # @login_required
# def add_one_gym():


@gym_routes.route('/<int:gymId>/', methods=['DELETE'])
@login_required
def delete_gym(gymId):
    if id < 19:
        return 401
    gym_id = Gym.query.get(gymId)
    db.session.delete(gym_id)
    db.session.commit()
    return {'message': 'successfully deleted this gym'}


@gym_routes.route('/maps')
def get_map_api():
    '''
    Get the api key
    '''
    mapKey = os.environ.get('GOOGLE_API_KEY')
    return jsonify(mapKey)
