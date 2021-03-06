from flask import Blueprint
from flask_login import login_required
from app.models import classSession, db, Gym, ClassSession

search_routes = Blueprint('search', __name__, url_prefix='/api/search')


@search_routes.route('/<string:query>')
@login_required
def get_all_results(query):
    gym_results = Gym.query.filter(
        Gym.name.ilike(f"%{query}%")).all()

    classSession_results = ClassSession.query.filter(
        ClassSession.name.ilike(f"%{query}%")).all()

    return {'results': [*[gym.to_dict() for gym in gym_results], *[classSession.to_dict() for classSession in classSession_results]]}


@search_routes.route('/<string:query>')
@login_required
def get_all_gym_results(query):
    gym_results = Gym.query.filter(
        Gym.name.ilike(f"%{query}%")).all()

    return {gym.id: gym.to_dict() for gym in gym_results}


# return dict for results that points to a list , where the list has result from both the queries above
# classSession_results = ClassSession.query.filter(
#         ClassSession.name.ilike(f"%{query}%")).all()
