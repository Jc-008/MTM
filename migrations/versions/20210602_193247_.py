"""empty message

Revision ID: c8dec3bcf8e8
Revises: ffdc0a98111c
Create Date: 2021-06-02 19:32:47.274379

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c8dec3bcf8e8'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gyms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('address', sa.String(length=255), nullable=True),
    sa.Column('phone_number', sa.String(length=10), nullable=True),
    sa.Column('hours_of_operation', sa.String(length=255), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('class_session',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('imageUrl', sa.String(length=1000), nullable=True),
    sa.Column('gym_id', sa.Integer(), nullable=True),
    sa.Column('time', sa.DateTime(), nullable=True),
    sa.Column('description', sa.String(length=750), nullable=True),
    sa.Column('cost', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['gym_id'], ['gyms.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('is_owner', sa.Boolean(), nullable=False))
    op.add_column('users', sa.Column('zipcode', sa.String(length=5), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'zipcode')
    op.drop_column('users', 'is_owner')
    op.drop_table('class_session')
    op.drop_table('gyms')
    # ### end Alembic commands ###
