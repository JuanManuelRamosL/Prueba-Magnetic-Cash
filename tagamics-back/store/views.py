from rest_framework import generics
from .models import Shoe
from .serializers import ShoeSerializer

class ShoeListCreateView(generics.ListCreateAPIView):
    queryset = Shoe.objects.all().order_by("id")
    serializer_class = ShoeSerializer

class ShoeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
