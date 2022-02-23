from django.core.management.base import BaseCommand
from actors.models import Actor
from faker import Faker


class Command(BaseCommand):
    help = 'Fill database for N fake records'

    def add_arguments(self, parser):
        parser.add_argument('num_records', nargs='+', type=int)

    def handle(self, *args, **options):
        Actor.objects.all().delete()
        f = Faker()
        print(options)
        for record in range(*options['num_records']):
            actor=Actor()
            actor.name, actor.surname, actor.birthday=f.first_name(),\
                f.last_name(), f.year()
            actor.save()
