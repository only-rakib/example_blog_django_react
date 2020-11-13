from django.urls import path
from authentication.views import login, register,log_out
from posts.views import posts
urlpatterns = [
    path('login/', login,name="login"),
    path('logout/', log_out,name="logout"),
    path('register/', register, name="register"),
    path('post/', posts,name="post"),
]
