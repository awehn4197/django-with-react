from django.urls import path
from base.views import order_views as views

url_patterns = [
    path('add/', views.addOrderItems, name='orders-add'),
]