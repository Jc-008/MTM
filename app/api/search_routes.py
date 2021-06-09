from flask import Blueprint
from app.models import classSession, db, Gym, ClassSession

search_routes = Blueprint('search', __name__, url_prefix='/api/search')


# @search_routes.route('/<string:query>')
# def get_results(query):
#     gym_results = Gym.query.filter(
#         Gym.name.ilike(f"%{query}%")).all()

#     classSession_results = ClassSession.query.filter(
#         ClassSession.name.ilike(f"%{query}%")).all()

    # return {gym.id: product.to_dict() for product in results}
