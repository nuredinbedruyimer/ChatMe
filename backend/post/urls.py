from django.urls import path

from .api import get_posts



urlpatterns = [
    path("", get_posts, name="get_posts"),
]
