from django.core.management.base import BaseCommand
from django.db import transaction
from actors.models import Actor
from faker import Faker
import factory

from django.contrib.auth import get_user_model

class ActorFactory(factory.Factory):
    class Meta:
        model = Actor

    _f = Faker()
    name = _f.first_name()
    surname = _f.last_name()
    email = _f.email()
    birthday = _f.year()


class Command(BaseCommand):
    help = 'Fill database for N fake records'

    def add_arguments(self, parser):
        parser.add_argument('num_records', nargs='+', type=int)
        # parser.add_argument('sss', type=str)

    @transaction.atomic
    def handle(self, *args, **options):
        _f = Faker()                    # создаем источник данных для базы
        user = get_user_model()
        models = [Actor, user]              # готовимся обнулять другие модели для тестов
        for model in models:
            model.objects.all().delete()
        for record in range(options['num_records'][0]):
            email = _f.email()
            Actor.objects.update_or_create(
                email=email,
                defaults={'email': email,
                          'name': _f.first_name(),
                          'surname': _f.last_name(),
                          'birthday': _f.year(),
                          })
        user.objects.create_superuser(username='django',
                                      email='titovsb@gmail.com',
                                      password='geekbrains')
