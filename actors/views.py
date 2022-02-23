# from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from actors.models import Actor
from actors.serializers import ActorModelSerializers

# Create your views here.

class ActorModelViewset(ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorModelSerializers
