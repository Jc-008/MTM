from werkzeug.security import generate_password_hash
from app.models import db, Gym


gymsList = [
    {
        'name': 'Square Circle New York',
        'address': '80 Nassau St #101, Lower Level, NY 10038',
        'phone_number': '(212)964-9800',
        'gym_url_image': 'https://flowathletics.com/wp-content/uploads/2013/10/SC-logo-PMS179C.jpg'
    },
    {
        'name': 'The Wat',
        'address': '291 Broadway, New York, NY 10007',
        'phone_number': '(212)966-4010',
        'gym_url_image': 'https://cdn.fs.teachablecdn.com/KrIGfuRwqBNOLFAJltQT'
    },
    {
        'name': 'Two Bridges Muay Thai',
        'address': '40 Ludlow St, New York, NY 10002',
        'phone_number': '(917)473-2402',
        'gym_url_image': 'https://www.twobridgesmt.com/images/academies/1909/bg-desktop.jpg'
    },
    {
        'name': 'Five Points Academy',
        'address': '148 Lafayette St, New York, NY 10013',
        'phone_number': '(212)226-4474',
        'gym_url_image': 'https://www.academyfivepoints.com/wp-content/uploads/2015/06/TestLogo.png'
    },
    {
        'name': 'Workshop NYC',
        'address': '92 Delancey St, New York, NY 10002',
        'phone_number': '(917)675-7282',
        'gym_url_image': 'https://images.squarespace-cdn.com/content/v1/5f5b88200dfdf052fc14f6e9/1603382792720-FLKXPA6QSOVL59DNYDPL/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/02F757DE-3212-4EB4-A9C1-353B0138DA77-11011A5B-36D5-4341-916E-6E71A68F65D1.jpg'
    },
    {
        'name': 'Evolution Muay Thai',
        'address': '109 W 25th St, New York, NY 10001',
        'phone_number': '(646)649-3976',
        'gym_url_image': 'https://evolutionmuaythai.com/wp-content/themes/yourweblayout/images/FooterLogo.png'
    },
    {
        'name': 'Ultimate Gym NYC',
        'address': '5 W 30th St, New York, NY 10001',
        'phone_number': '(212)725-4666',
        'gym_url_image': 'https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/larger-logo-191365.png'
    },
    {
        'name': 'Renzo Gracie Academy',
        'address': '224 W 30th St, New York, NY 10001',
        'phone_number': '(212)279-6724',
        'gym_url_image': 'https://renzogracieacademy.com/wp-content/uploads/2019/06/renzo-gracie-logo-black.png'
    },
    {
        'name': 'NY Best Kickboxing',
        'address': '247 W 35th St, New York, NY 10018',
        'phone_number': '(212)239-8619',
        'gym_url_image': 'https://lirp.cdn-website.com/dd56279f/dms3rep/multi/opt/NEW%2BYORK%2BSAN%2BDA%2BGYM%2Bwith%2Bwhite%2B-%2BDavid%2BRoss-316w.png'
    },
    {
        'name': 'Ronin Athletics - Gracie Jiu Jitsu, Kickboxing, MMA NYC',
        'address': '265 Madison Ave FL 5, New York, NY 10016',
        'phone_number': '(212)564-4153',
        'gym_url_image': 'http://mmaworldexpo.com/wp-content/uploads/2014/07/Ronin-Athletics.png'
    },
    {
        'name': 'Bwarriormma.com',
        'address': '226 E 54th St 3rd floor, New York, NY 10022',
        'phone_number': '(917)501-5051',
        'gym_url_image': ''
    },
    {
        'name': 'Valor Mixed Martial Arts',
        'address': '2067 Broadway, New York, NY 10023',
        'phone_number': '(917)261-6678',
        'gym_url_image': 'https://www.pngkit.com/png/full/185-1854894_valor-mixed-martial-arts.png'
    },
    {
        'name': 'Raktan Muay Thai',
        'address': '2, 38-30 31st St, Long Island City, NY 11101',
        'phone_number': '(917)224-2541',
        'gym_url_image': 'https://www.filepicker.io/api/file/NM96oJmTbaIfvxEFNgNh'
    },
    {
        'name': 'Sitan Gym Muay Thai',
        'address': '25-34 Steinway St, Queens, NY 11103',
        'phone_number': '(718)932-5000',
        'gym_url_image': 'https://secureservercdn.net/166.62.110.72/87w.fde.myftpupload.com/wp-content/uploads/2020/09/sitan2.jpeg?time=1620013460'
    },
    {
        'name': 'Iron Rooster Muay Thai',
        'address': '1027 Grand St Suite B9, Brooklyn, NY 11211',
        'phone_number': '(347)649-5694',
        'gym_url_image': 'https://images.tapology.com/gyms/logos/8459/profile/8459-iron-rooster-muay-thai.jpg?1580581837'
    },
    {
        'name': 'Red Planet Muay Thai',
        'address': '883 Jefferson Ave, Brooklyn, NY 11221',
        'phone_number': '(347)292-9800',
        'gym_url_image': 'https://images.squarespace-cdn.com/content/54d68d78e4b02a87a21749c2/1465099588146-3NPIDOADUIERH6EWEXEJ/New+official+logo+Red+Planet+%281%29.png?format=1500w&content-type=image%2Fpng'
    },
    {
        'name': 'Kings Combat Fitness',
        'address': '98-120 Queens Blvd, Rego Park, NY 11374',
        'phone_number': '(347)788-8787',
        'gym_url_image': 'https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/106/2018/10/30152058/300.png'
    },
    {
        'name': 'Ring Sport Muay Thai & Kickboxing',
        'address': '12-64 150th St, Whitestone, NY 11357',
        'phone_number': '(718)357-4813',
        'gym_url_image': 'https://static.wixstatic.com/media/03e24f_ba02dee39c3540dca81bc3a92032cbf4~mv2.jpg/v1/fill/w_749,h_328,al_c,q_80/03e24f_ba02dee39c3540dca81bc3a92032cbf4~mv2.webp'
    },
    {
        'name': 'Cornerstone Thai Boxing | Kickboxing | Boxing | Martial Arts School',
        'address': '42-27 162nd St, Flushing, NY 11358',
        'phone_number': 'N/A',
        'gym_url_image': 'https://static.wixstatic.com/media/07e6b2_57b59dcdab5e49b89338b813a7189b2a~mv2.jpg/v1/fill/w_171,h_171,al_c,q_80,usm_0.66_1.00_0.01/CTB%20LOGO%20Revised%202019.webp'
    },
]
# 19 gyms


def seed_gyms():
    for gym in gymsList:
        # selectedGym = Gym(name=gym['name'], address=gym['address'])
        selectedGym = Gym(**gym)
        db.session.add(selectedGym)

    db.session.commit()


def undo_gyms():
    db.session.execute('TRUNCATE gyms RESTART IDENTITY CASCADE;')
    db.session.commit()
