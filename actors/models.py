from django.db import models
from uuid import uuid4

# Create your models here.


class Actor(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    name = models.CharField(max_length=32, blank=True, verbose_name='имя')
    surname = models.CharField(max_length=32, blank=True, verbose_name='фамилия')
    email = models.EmailField(max_length=64, unique=True, verbose_name='еmail')
    birthday = models.PositiveIntegerField(verbose_name='год рождения')

    def __str__(self):
        return f'{self.name} {self.surname} {self.birthday}'
