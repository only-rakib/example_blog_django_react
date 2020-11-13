from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import UserSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.contrib.auth import authenticate
from authentication.models import User
import jwt
from rest_framework.permissions import IsAuthenticated

class RegisterView(GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = (IsAuthenticated,)
    
    def post(self, request):
        data = request.data
        email = data.get('email', '')
        password = data.get('password', '')
        user = authenticate(email=email, password=password)
        
        if user:

            serializer = UserSerializer(user)

            data = {'user': serializer.data}

            return Response(data, status=status.HTTP_200_OK)

        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        