from werkzeug.security import generate_password_hash
from app.models import db, Gym


gymsList = [
    {name: "Square Circle New York",
        address: "80 Nassau St #101, Lower Level, NY 10038"},
    {name: "The Wat", address: "291 Broadway, New York, NY 10007"},
    {name: Two Bridges Muay Thai address: 40 Ludlow St, New York, NY 10002}
    {name: Five Points Academy address: 148 Lafayette St, New York, NY 10013},
    {name: Workshop NYC address: 92 Delancey St, New York, NY 10002},
    {name: Evolution Muay Thai, address: 109 W 25th St, New York, NY 10001},
    {name: Ultimate Gym NYC, address: 5 W 30th St, New York, NY 10001},
    {name: Renzo Gracie Academy, address: 224 W 30th St, New York, NY 10001},
    {name: NY Best Kickboxing, address: 247 W 35th St, New York, NY 10018},
    {name: Ronin Athletics - Gracie Jiu Jitsu, Kickboxing, MMA NYC, address: 265 Madison Ave FL 5, New York, NY 10016},
    {name: Bwarriormma.com, address: 226 E 54th St 3rd floor, New York, NY 10022},
    {name: Valor Mixed Martial Arts, address: 2067 Broadway, New York, NY 10023},
    {name: Raktan Muay Thai, address: 2, 38-30 31st St, Long Island City, NY 11101},
    {name: Sitan Gym Muay Thai, address: 25-34 Steinway St, Queens, NY 11103},
    {name: Iron Rooster Muay Thai, address: 1027 Grand St Suite B9, Brooklyn, NY 11211},
    {name: Red Planet Muay Thai, address: 883 Jefferson Ave, Brooklyn, NY 11221},
    {name: Kings Combat Fitness, address: 98-120 Queens Blvd, Rego Park, NY 11374},
    {name: Ring Sport Muay Thai & Kickboxing, address: 12-64 150th St, Whitestone, NY 11357},
    {name: Cornerstone Thai Boxing | Kickboxing | Boxing | Martial Arts School, address: 42-27 162nd St, Queens, NY 11358},
]
# 19 gyms


def seed_gyms():
    for i in range(19):
        gym = Gym(name=gymList[i].name, address=gymsList[i].address)

    db.session.add(gym)
    db.session.commit()


def undo_gyms():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
