from django.urls import path, include
from base.views import user_views as views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('', views.getUsers, name="users"),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('<str:pk>/', views.getUserById, name='user'),
    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),
    path('update/<str:pk>/', views.updateUser, name='user-update'),
]
