from django.contrib.auth.models import User
from django.db import models
class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=255)

User.add_to_class('auth_token', models.OneToOneField(Token, on_delete=models.CASCADE, related_name='user_token'))
class User(models.Model):
    # other fields...
    auth_token = models.CharField(max_length=40, default='default_value')