from rest_framework import serializers
from authentication.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=65, write_only=True)
    email = serializers.EmailField(max_length=255, min_length=1),
    first_name = serializers.CharField(max_length=255, min_length=1)
    last_name = serializers.CharField(max_length=255, min_length=1)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']

    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email': ('Email is already in use')})
        return super().validate(attrs)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=65, write_only=True)
    email = serializers.EmailField(max_length=255, min_length=1)

    class Meta:
        model = User
        fields = ['email', 'password']
