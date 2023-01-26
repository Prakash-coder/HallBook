from django.urls import path,include
from . import views
from rest_framework import routers

from .views import(
    record_home,
    book_hall,
    HallViewSet
)

router = routers.DefaultRouter()
router.register('halls', HallViewSet)
urlpatterns = [
     path('', record_home, name='record_home'),
     path('book_hall/',book_hall,name='book_hall'),
     path('', include(router.urls)),
]




