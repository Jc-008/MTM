from app.models import classSession, db, Gym, ClassSession


def seed_class_to_gym():
    # gym_1 = Gym.query.get(1)
    # classSession_1 = ClassSession.query.get(1)

    # gym_1.gymClasses.append(classSession_1)

    gym_list = Gym.query.all()
    classSession_list = ClassSession.query.all()
    # query for all gyms and classSessions

    gym_dict = {
        gym.id: gym for gym in gym_list
    }
    # gyms in a dict, where id is a key a val is from a list

    classSession_dict = {
        classSession.id: classSession for classSession in classSession_list
    }
    # classSessions in a dict, where id is a key a val is from a list

    gym_dict[1].gymClasses.append(classSession_dict[7])
    gym_dict[1].gymClasses.append(classSession_dict[3])
    gym_dict[1].gymClasses.append(classSession_dict[2])
    # gym 1 gets class #7, 3, 2 added to it

    gym_dict[2].gymClasses.append(classSession_dict[7])
    gym_dict[2].gymClasses.append(classSession_dict[1])
    gym_dict[2].gymClasses.append(classSession_dict[2])
    gym_dict[2].gymClasses.append(classSession_dict[6])
    gym_dict[2].gymClasses.append(classSession_dict[5])

    gym_dict[3].gymClasses.append(classSession_dict[3])
    gym_dict[3].gymClasses.append(classSession_dict[1])

    gym_dict[4].gymClasses.append(classSession_dict[7])
    gym_dict[4].gymClasses.append(classSession_dict[3])
    gym_dict[4].gymClasses.append(classSession_dict[4])
    gym_dict[4].gymClasses.append(classSession_dict[2])
    gym_dict[4].gymClasses.append(classSession_dict[5])

    gym_dict[5].gymClasses.append(classSession_dict[3])
    gym_dict[5].gymClasses.append(classSession_dict[1])
    gym_dict[5].gymClasses.append(classSession_dict[2])

    gym_dict[6].gymClasses.append(classSession_dict[7])
    gym_dict[6].gymClasses.append(classSession_dict[4])
    gym_dict[6].gymClasses.append(classSession_dict[8])

    gym_dict[7].gymClasses.append(classSession_dict[3])
    gym_dict[7].gymClasses.append(classSession_dict[4])
    gym_dict[7].gymClasses.append(classSession_dict[2])
    gym_dict[7].gymClasses.append(classSession_dict[6])

    gym_dict[8].gymClasses.append(classSession_dict[7])
    gym_dict[8].gymClasses.append(classSession_dict[3])
    gym_dict[8].gymClasses.append(classSession_dict[4])
    gym_dict[8].gymClasses.append(classSession_dict[2])
    gym_dict[8].gymClasses.append(classSession_dict[5])

    gym_dict[9].gymClasses.append(classSession_dict[3])
    gym_dict[9].gymClasses.append(classSession_dict[1])
    gym_dict[9].gymClasses.append(classSession_dict[8])
    gym_dict[9].gymClasses.append(classSession_dict[5])

    gym_dict[10].gymClasses.append(classSession_dict[3])
    gym_dict[10].gymClasses.append(classSession_dict[4])
    gym_dict[10].gymClasses.append(classSession_dict[2])
    gym_dict[10].gymClasses.append(classSession_dict[6])

    gym_dict[11].gymClasses.append(classSession_dict[4])
    gym_dict[11].gymClasses.append(classSession_dict[2])
    gym_dict[11].gymClasses.append(classSession_dict[5])

    gym_dict[12].gymClasses.append(classSession_dict[3])
    gym_dict[12].gymClasses.append(classSession_dict[1])
    gym_dict[12].gymClasses.append(classSession_dict[2])

    gym_dict[13].gymClasses.append(classSession_dict[3])
    gym_dict[13].gymClasses.append(classSession_dict[1])
    gym_dict[13].gymClasses.append(classSession_dict[2])

    gym_dict[14].gymClasses.append(classSession_dict[7])
    gym_dict[14].gymClasses.append(classSession_dict[3])
    gym_dict[14].gymClasses.append(classSession_dict[4])
    gym_dict[14].gymClasses.append(classSession_dict[2])
    gym_dict[14].gymClasses.append(classSession_dict[5])

    gym_dict[15].gymClasses.append(classSession_dict[3])
    gym_dict[15].gymClasses.append(classSession_dict[1])
    gym_dict[15].gymClasses.append(classSession_dict[2])

    gym_dict[16].gymClasses.append(classSession_dict[4])
    gym_dict[16].gymClasses.append(classSession_dict[2])
    gym_dict[16].gymClasses.append(classSession_dict[5])

    gym_dict[17].gymClasses.append(classSession_dict[7])
    gym_dict[17].gymClasses.append(classSession_dict[1])
    gym_dict[17].gymClasses.append(classSession_dict[2])
    gym_dict[17].gymClasses.append(classSession_dict[6])

    gym_dict[18].gymClasses.append(classSession_dict[3])
    gym_dict[18].gymClasses.append(classSession_dict[1])
    gym_dict[18].gymClasses.append(classSession_dict[8])
    gym_dict[18].gymClasses.append(classSession_dict[5])

    gym_dict[19].gymClasses.append(classSession_dict[3])
    gym_dict[19].gymClasses.append(classSession_dict[1])
    gym_dict[19].gymClasses.append(classSession_dict[2])

    db.session.commit()


def undo_class_to_gym():
    db.session.execute(
        'TRUNCATE gym_to_class_session RESTART IDENTITY CASCADE;')
    db.session.commit()
