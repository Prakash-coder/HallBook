from rest_framework import generics, permissions, views
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginAPIView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    serializer_class = TokenObtainPairSerializer


from rest_framework.permissions import IsAuthenticated


class LogoutView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        user = request.user
        user.jwt_secret = None
        user.save()

        return Response({"message": "Successfully logged out."})
