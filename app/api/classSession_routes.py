from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, ClassSession, Gym, Reservation, reservation

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


@classSession_routes.route('/<int:id>/')
# @login_required
def get_one_class(id):
    classSession = ClassSession.query.get(id)
    return classSession.to_dict()


# @classSession_routes.route('/gymDetails')
# def get_class_gym_details(Gym):
#     gymDetails = classSessions.belongs_to_gym.query.all(Gym)
#     return gymDetails.to_dict()


@classSession_routes.route('/reservation/', methods=['POST'])
def create_reservation():
    userId = current_user.id
    class_session_id = request.json['classSessionId']
    singleReservation = Reservation(
        user_id=userId, classSession_id=class_session_id)
    db.session.add(singleReservation)
    db.session.commit()
    return {singleReservation.classSession_id: singleReservation.to_classes()}


@classSession_routes.route('/reservation/', methods=['DELETE'])
def delete_reservation():
    reservation_id = request.json['reservationId']
    reservation = Reservation.query.get(reservation_id)
    db.session.delete(reservation)
    db.session.commit()
    return {'message': 'success'}

# -----------------------------------------------------------------------------------#
