from django.db import models
from rest_framework import serializers
from .models import Lead
from django.contrib.auth.models import User

class LeadSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message', 'owner')