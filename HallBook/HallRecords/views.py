from django.shortcuts import render,redirect
from .models import Hall,Event,User,Booking
from .forms import eventForm
from .serializers import HallSerializer,EventSerializer,UserSerializer,BookingSerializer
from rest_framework import viewsets

def record_home(request):
    context = {
        'Halls':Hall.objects.all()
    }
    return render(request,"HallRecords/home.html",context)



def book_hall(request):
    if request.method == 'POST':
        form = eventForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('record_home')
    else:
        form = eventForm()
    return render(request, 'HallRecords/book_hall.html', {'form': form})


class HallViewSet(viewsets.ModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer
    
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer