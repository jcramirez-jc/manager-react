from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    owner = models.ForeignKey(User, related_name='leads', on_delete=models.CASCADE, null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    def save(self, *args, **kargs):
        super(Lead, self).save(*args, **kargs)

