from rest_framework import generics, permissions, views
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.settings import api_settings

from .models import User
from .serializers import RegisterSerializer, LoginSerializer


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = LoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            return Response({
                "token": token,
                "user": user.username
            })
        return Response(serializer.errors, status=400)
    
from rest_framework.permissions import IsAuthenticated


class LogoutView(views.APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        user = request.user
        user.jwt_secret = None
        user.save()

        return Response({"message": "Successfully logged out."})

