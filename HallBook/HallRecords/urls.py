from django.urls import path,include
from rest_framework import routers

from .views import(
    record_home,
    book_hall,
    HallViewSet,
    EventViewSet,
    UserViewSet,
    BookingViewSet,
)

router_halls = routers.DefaultRouter()
router_halls.register('halls_api', HallViewSet)

router_event = routers.DefaultRouter()
router_event.register('event_api', EventViewSet)

router_user = routers.DefaultRouter()
router_user.register('user_api', UserViewSet)

router_booking = routers.DefaultRouter()
router_booking.register('booking_api', BookingViewSet)

urlpatterns = [
     path('', record_home, name='record_home'),
     path('book_hall/',book_hall,name='book_hall'),
     path('', include(router_halls.urls)),
     path('', include(router_event.urls)),
     path('', include(router_user.urls)),
     path('', include(router_booking.urls)),
]




