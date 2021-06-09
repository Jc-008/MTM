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

    gym_dict[5].gymClasses.append(classSession_dict[])
    gym_dict[5].gymClasses.append(classSession_dict[])
    gym_dict[5].gymClasses.append(classSession_dict[])

    gym_dict[6].gymClasses.append(classSession_dict[])
    gym_dict[6].gymClasses.append(classSession_dict[])
    gym_dict[6].gymClasses.append(classSession_dict[])

    gym_dict[7].gymClasses.append(classSession_dict[])
    gym_dict[7].gymClasses.append(classSession_dict[])
    gym_dict[7].gymClasses.append(classSession_dict[])
    gym_dict[7].gymClasses.append(classSession_dict[])

    gym_dict[8].gymClasses.append(classSession_dict[])
    gym_dict[8].gymClasses.append(classSession_dict[])
    gym_dict[8].gymClasses.append(classSession_dict[])
    gym_dict[8].gymClasses.append(classSession_dict[])
    gym_dict[8].gymClasses.append(classSession_dict[])

    gym_dict[9].gymClasses.append(classSession_dict[])
    gym_dict[9].gymClasses.append(classSession_dict[])
    gym_dict[9].gymClasses.append(classSession_dict[])
    gym_dict[9].gymClasses.append(classSession_dict[])

    gym_dict[10].gymClasses.append(classSession_dict[])
    gym_dict[10].gymClasses.append(classSession_dict[])
    gym_dict[10].gymClasses.append(classSession_dict[])
    gym_dict[10].gymClasses.append(classSession_dict[])

    gym_dict[11].gymClasses.append(classSession_dict[])
    gym_dict[11].gymClasses.append(classSession_dict[])
    gym_dict[11].gymClasses.append(classSession_dict[])

    gym_dict[12].gymClasses.append(classSession_dict[])
    gym_dict[12].gymClasses.append(classSession_dict[])
    gym_dict[12].gymClasses.append(classSession_dict[])

    gym_dict[13].gymClasses.append(classSession_dict[])
    gym_dict[13].gymClasses.append(classSession_dict[])
    gym_dict[13].gymClasses.append(classSession_dict[])

    gym_dict[14].gymClasses.append(classSession_dict[])
    gym_dict[14].gymClasses.append(classSession_dict[])
    gym_dict[14].gymClasses.append(classSession_dict[])
    gym_dict[14].gymClasses.append(classSession_dict[])
    gym_dict[14].gymClasses.append(classSession_dict[])

    gym_dict[15].gymClasses.append(classSession_dict[])
    gym_dict[15].gymClasses.append(classSession_dict[])
    gym_dict[15].gymClasses.append(classSession_dict[])

    gym_dict[16].gymClasses.append(classSession_dict[])
    gym_dict[16].gymClasses.append(classSession_dict[])
    gym_dict[16].gymClasses.append(classSession_dict[])

    gym_dict[17].gymClasses.append(classSession_dict[])
    gym_dict[17].gymClasses.append(classSession_dict[])
    gym_dict[17].gymClasses.append(classSession_dict[])
    gym_dict[17].gymClasses.append(classSession_dict[])

    gym_dict[18].gymClasses.append(classSession_dict[])
    gym_dict[18].gymClasses.append(classSession_dict[])
    gym_dict[18].gymClasses.append(classSession_dict[])
    gym_dict[18].gymClasses.append(classSession_dict[])

    gym_dict[19].gymClasses.append(classSession_dict[])
    gym_dict[19].gymClasses.append(classSession_dict[])
    gym_dict[19].gymClasses.append(classSession_dict[])

    db.session.commit()
