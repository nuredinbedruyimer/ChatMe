from django.db import models
from account.models import User
import uuid

# PostAttachment model
class PostAttachment(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    image = models.ImageField(upload_to="post_attachments")
    created_by = models.ForeignKey(User, related_name="post_attachments", on_delete=models.CASCADE)

# Post model
class Post(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    body = models.TextField(blank=True, null=True)
    attachments = models.ManyToManyField(PostAttachment, blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE) 
