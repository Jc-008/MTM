from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, ClassSession

classSession_routes = Blueprint(
    'class_sessions', __name__, url_prefix='/api/classSessions')
# classSession_routes = Blueprint('class_sessions', __name__)


@classSession_routes.route('/')
@login_required
def classSessions():
    '''
    Get all classes in ClassSession model
    '''
    classSessions = ClassSession.query.all()
    return jsonify([classSession.to_dict() for classSession in classSessions])
    # return {"classSessions": [classSession.to_dict() for classSession in classSessions]}

