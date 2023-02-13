from django.shortcuts import render,redirect
from .models import Hall,Event,Booking
from .forms import eventForm
from .serializers import HallSerializer,EventSerializer,BookingSerializer
from rest_framework import viewsets,generics,permissions
from django.contrib.auth.decorators import login_required

def record_home(request):
    context = {
        'Halls':Hall.objects.all()
    }
    return render(request,"HallRecords/home.html",context)



class BookHallAPIView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class HallViewSet(viewsets.ModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer