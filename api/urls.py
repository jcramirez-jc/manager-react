'''from rest_framework import routers
from .views import LeadViewset

router = routers.DefaultRouter()
router.register('api/leads', LeadViewset, 'leads')

urlpatterns = router.urls'''
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('leads/', views.LeadList.as_view()),
    path('leads/<int:pk>/', views.LeadDetail.as_view())
]