from django.test import TestCase
from django.contrib.auth.models import User
from .models import Post

# Create your tests here.

class BlogTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Create a user
        test_user = User.objects.create_user(username='testuser', password='password')
        test_user.save()

        # Create a blog post
        test_post = Post.objects.create(title='Blog title',body='Body content...',author=test_user)
        test_post.save()

    def test_blog_content(self):
        post = Post.objects.get(id=1)
        author = f'{post.author}'
        title = f'{post.title}'
        body = f'{post.body}'

        self.assertEqual(author,'testuser')
        self.assertEqual(title,'Blog title')
        self.assertEqual(body,'Body content...')
    


