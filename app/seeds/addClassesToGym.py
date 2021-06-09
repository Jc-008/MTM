from app.models import classSession, db, Gym, ClassSession


def seed_class_to_gym():
    # gym_1 = Gym.query.get(1)
    # classSession_1 = ClassSession.query.get(1)

    # gym_1.gymClasses.append(classSession_1)

    gym_list = Gym.query.all()
    classSession_list = ClassSession.query.all()

    gym_dict = {
        gym.id: gym for gym in gym_list
    }

    classSession_dict = {
        classSession.id: classSession for classSession in classSession_list
    }

    gym_dict[1].gymClasses.append(classSession_dict[2])
    # gym 1 gets class #2 added to it

    db.session.commit()
