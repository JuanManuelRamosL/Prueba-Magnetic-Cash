from django.urls import path
from .views import ShoeListCreateView, ShoeDetailView

urlpatterns = [
    path("shoes/", ShoeListCreateView.as_view(), name="shoe-list-create"),
    path("shoes/<int:pk>/", ShoeDetailView.as_view(), name="shoe-detail"),
]
