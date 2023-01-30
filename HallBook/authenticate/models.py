from django.db import models
from django.contrib.auth.models import AbstractUser,Permission,Group



class User(AbstractUser):
    groups = models.ManyToManyField(Group, related_name='authenticate_users', verbose_name='groups', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='authenticate_users', verbose_name='user permissions', blank=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None
    isDepartment = models.BooleanField(default=False)
    isStudent = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
