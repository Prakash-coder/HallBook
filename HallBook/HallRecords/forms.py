from django import forms
from .models import Event
class eventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = [
                'eventManager',
                'eventName',
                'eventDate', 
                'startTime', 
                'endTime',
        ]
        labels = {
                'eventManager' : 'Name of Event Manager',
                'eventName' : 'Event Name',
                'eventDate' : 'Event Date',
                'startTime' : 'Event Start Time',
                'endTime' : 'Event End Time',
        }

            

    