from django.urls import path, include
from .views import LoginAPI, RegisterAPI, UserAPI, UserList
from knox import views as knox_views
from django.contrib import admin


urlpatterns = [
    path('api-authenticate/', include('rest_framework.urls')),
    path('api/auth', include('knox.urls')),
    path('api/auth/register',RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/users', UserList.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout"), # will invalidate the token, destroys it
    path('api/auth/users', UserList.as_view()),
]   