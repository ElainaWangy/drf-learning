from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id','title','author','body','created_at')
        model = Post

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id','username')
        model = User

