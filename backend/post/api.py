from django.http import JsonResponse

from .models import Post

from rest_framework.decorators import api_view

from .serializers import PostSerializers


@api_view(["GET"])
def get_posts(request):
    posts = Post.objects.all()
    
    serializer = PostSerializers(posts, many=True)
    
    return JsonResponse({
        "data":serializer.data, 
        
    })
    
    