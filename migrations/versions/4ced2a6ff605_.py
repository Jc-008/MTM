"""empty message

Revision ID: 4ced2a6ff605
Revises: 
Create Date: 2021-06-13 00:29:52.573324

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4ced2a6ff605'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('first_name', sa.String(length=20), nullable=False),
    sa.Column('last_name', sa.String(length=25), nullable=False),
    sa.Column('zipcode', sa.String(length=5), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('available_credit', sa.Integer(), nullable=False),
    sa.Column('is_owner', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('gyms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=150), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=False),
    sa.Column('phone_number', sa.String(length=13), nullable=True),
    sa.Column('gym_url_image', sa.String(length=1000), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('address')
    )
    op.create_table('class_sessions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('imageUrl', sa.String(length=1000), nullable=True),
    sa.Column('time', sa.String(length=50), nullable=True),
    sa.Column('description', sa.String(length=750), nullable=True),
    sa.Column('cost', sa.Integer(), nullable=True),
    sa.Column('gym_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['gym_id'], ['gyms.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('class_session_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['class_session_id'], ['class_sessions.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'class_session_id')
    )
    op.create_table('gym_to_class_session',
    sa.Column('gym_id', sa.Integer(), nullable=False),
    sa.Column('class_session_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['class_session_id'], ['class_sessions.id'], ),
    sa.ForeignKeyConstraint(['gym_id'], ['gyms.id'], ),
    sa.PrimaryKeyConstraint('gym_id', 'class_session_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('gym_to_class_session')
    op.drop_table('favorite')
    op.drop_table('class_sessions')
    op.drop_table('gyms')
    op.drop_table('users')
    # ### end Alembic commands ###
