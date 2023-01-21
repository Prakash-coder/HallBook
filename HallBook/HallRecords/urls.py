from django.urls import path
from . import views
from .views import(
    record_home,
    book_hall,
)
urlpatterns = [
     path('', record_home, name='record_home'),
     path('book_hall/',book_hall,name='book_hall'),
]
