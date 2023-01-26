from django.shortcuts import render,redirect
from .models import Hall
from .forms import eventForm
from .serializers import HallSerializer
from rest_framework import viewsets

def record_home(request):
    context = {
        'Halls':Hall.objects.all()
    }
    return render(request,"HallRecords/home.html",context)

class HallViewSet(viewsets.ModelViewSet):
    queryset = Hall.objects.all()
    serializer_class = HallSerializer


def book_hall(request):
    if request.method == 'POST':
        form = eventForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('record_home')
    else:
        form = eventForm()
    return render(request, 'HallRecords/book_hall.html', {'form': form})

