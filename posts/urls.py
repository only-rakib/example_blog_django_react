from django.urls import path
from posts.views import posts, post_details

app_name = "posts"

urlpatterns = [
    path('', posts, name="post_home"),
    path('/<int:post_id>', post_details ,name='post_details')
]
