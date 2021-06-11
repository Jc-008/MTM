from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_login import current_user


class UpdateForm(FlaskForm):
    email = StringField('email', validators=[DataRequired()])
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
