from django.urls import path,include
from rest_framework import routers

from .views import(
    record_home,
    BookHallAPIView,
    HallViewSet,
    EventViewSet,
    BookingViewSet,
)

router_halls = routers.DefaultRouter()
router_halls.register('halls_api', HallViewSet)

router_event = routers.DefaultRouter()
router_event.register('event_api', EventViewSet)


router_booking = routers.DefaultRouter()
router_booking.register('booking_api', BookingViewSet)

urlpatterns = [
     path('', record_home, name='record_home'),
     path('book_hall/',BookHallAPIView.as_view(),name='book_hall'),
     path('', include(router_halls.urls)),
     path('', include(router_event.urls)),
     path('', include(router_booking.urls)),
]




