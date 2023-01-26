from django.contrib import admin
from .models import Hall,Event,User,Booking
admin.site.register(Hall)
admin.site.register(Event)
admin.site.register(User)
admin.site.register(Booking)