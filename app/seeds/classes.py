from app.models import db, ClassSession

classes = [
    {
        'id': 1,
        'title': 'Adult Beginner',
        'imageUrl': 'https://www.thebxngclub.com/sites/default/files/styles/post_teaser_full/public/teasers/Guy-Kicking-in-Muay-Thai.jpg?itok=2v6sRyex',
        'time': '7:00 - 8:00 PM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 2,
        'title': 'Adult Intermediate & Advance ',
        'imageUrl': 'https://i1.wp.com/www.warriorcollective.co.uk/wp-content/uploads/2019/07/GW-3-Web.jpg?fit=1366%2C911&ssl=1',
        'time': '8:00 - 9:00 AM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 3,
        'title': 'Adults Mixed levels',
        'imageUrl': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetbackintofitness.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fkickboxing-for-beginners.jpg&f=1&nofb=1',
        'time': '8:00 - 9:00 PM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 4,
        'title': 'Muay Thai Basics',
        'imageUrl': 'https://www.apexmartialartscenter.com/wp-content/uploads/beginners-kickboxing-1024x600.jpg',
        'time': '7:00 - 8:00 PM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 5,
        'title': 'Muay Thai Techniques and Drills',
        'imageUrl': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.warriorcollective.co.uk%2Fwp-content%2Fuploads%2F2018%2F02%2FDT-22-Copy-Web-980x654.jpg&f=1&nofb=1',
        'time': '9:00 - 10:00 PM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 6,
        'title': 'Muay Thai Sparring',
        'imageUrl': 'https://www.muaythaicitizen.com/wp-content/uploads/2018/02/muay-thai-sparring.jpg',
        'time': '9:00 - 10:00 PM',
        'description': '',
        'cost': 8,
        'gym_id': '',
    },
    {
        'id': 7,
        'title': 'Muay Thai Bag Drills',
        'imageUrl': 'https://bambammartialartshouston.com/wp-content/uploads/2018/03/Muay-Thai-Bag-Training.jpg',
        'time': '8:00 - 9:00 AM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    },
    {
        'id': 8,
        'title': 'Muay Thai Pad Work',
        'imageUrl': 'http://www.teamscorpionmma.com/wp-content/uploads/2018/09/kickboxing-classes.png',
        'time': '8:00 - 9:00PM',
        'description': '',
        'cost': 4,
        'gym_id': '',
    }
]


def seed_classes():
    for Class in classes:
        selectedClasses = ClassSession(**Class)
        db.session.add(selectedClasses)

    db.session.commit()


def undo_classes():
    db.session.execute('TRUNCATE class_sessions RESTART IDENTITY CASCADE;')
    db.session.commit()
