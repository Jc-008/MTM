from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, ClassSession

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
    # return {"classSessions": [classSession.to_dict() for classSession in classSessions]}
    return jsonify([classSession.to_dict() for classSession in classSessions])


@classSession_routes.route('/<int:id>/')
# @login_required
def get_one_class(id):
    classSession = ClassSession.query.get(id)
    return classSession.to_dict()


# -----------------------------------------------------------------------------------#
