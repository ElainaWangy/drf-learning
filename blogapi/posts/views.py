from rest_framework import generics,permissions,viewsets
from django.contrib.auth import get_user_model
from .permissions import IsAuthorOrReadOnly
from .models import Post
from .serializers import PostSerializer,UserSerializer

# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer



