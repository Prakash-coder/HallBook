from rest_framework import serializers
from .models import Hall,Event,Booking,User

class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ('id', 'hallName', 'capacity', 'location')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id','eventManager','eventName','eventDate','startTime','endTime')
class BookingSerializer(serializers.ModelSerializer):
    class Mata:
        model = Booking
        fields = ('id','bookedHall','eventName','hallBooker')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','email','contact','isDepartment','isStudent')
