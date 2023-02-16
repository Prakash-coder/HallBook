from django.urls import path
from .views import RegisterView, LoginAPIView, LogoutView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view()),
]
