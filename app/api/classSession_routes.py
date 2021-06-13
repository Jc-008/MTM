from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, ClassSession, Gym

classSession_routes = Blueprint(
    'class_sessions', __name__, url_prefix='/api/classSessions')
# classSession_routes = Blueprint('class_sessions', __name__)


@classSession_routes.route('/')
# @login_required
def classSessions():
    '''
    Get all classes in ClassSession model
    '''
    classSessions = ClassSession.query.all()
    # classSessions = ClassSession.query.order_by(
    # ClassSession.time.desc()).all()
    # return {"classSessions": [classSession.to_dict() for classSession in classSessions]}
    newClassList = []

    for classSession in classSessions:
        gym_query = Gym.query.filter(classSession.gym_id == Gym.id).first()
        gym = gym_query.to_dict()
        classSession = classSession.to_dict()
        classSession['gym'] = gym
        newClassList.append(classSession)

    # print(classSessions, '------------ List')
    # return {classSession.id: classSession.to_dict() for classSession in classSessions}
    return {classSession['id']: classSession for classSession in newClassList}

    # print('hello this is on line 17 of the route /classSession')

# send id back to the backend
#   use that id to query thru class session to grab the gym id where is i


@ classSession_routes.route('/<int:id>/')
# @login_required
def get_one_class(id):
    classSession = ClassSession.query.get(id)
    return classSession.to_dict()


# @classSession_routes.route('/gymDetails')
# def get_class_gym_details(Gym):
#     gymDetails = classSessions.belongs_to_gym.query.all(Gym)
#     return gymDetails.to_dict()


# -----------------------------------------------------------------------------------#
