# from flask import Blueprint
# from flask_login import login_required
# # from app.models import db, gym_to_class_session


# gym_to_class_routes = Blueprint(
#     'gym_to_class_session', __name__, url_prefix='/api/gym_to_class_routes')


# @gym_to_class_routes.route('/')
# def all_classes_for_oneGym():
#     '''
#     Get all classes for a SINGLE gym from the gymToClassSessions
#     '''
#     classOfGym = gym_to_class_sessions.query.all()
#     return {gym_to_class_sessions.id: gym_to_class_session.to_dict() for gym_to_class_session in classOfGym}
