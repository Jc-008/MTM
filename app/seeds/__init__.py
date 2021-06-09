from flask.cli import AppGroup
from .users import seed_users, undo_users
from .gyms import seed_gyms, undo_gyms
from .classes import seed_classes, undo_classes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_gyms()
    seed_classes()
    # seed_reservations()
    # seed_favorites()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_gyms()
    undo_classes()
    # Add other undo functions here
