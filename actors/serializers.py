from rest_framework.serializers import HyperlinkedModelSerializer
from actors.models import Actor


class ActorModelSerializers(HyperlinkedModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'
