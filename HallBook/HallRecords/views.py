from django.shortcuts import render,redirect
from .models import Hall
from .forms import eventForm

def record_home(request):
    context = {
        'hallTable':Hall.objects.all()
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