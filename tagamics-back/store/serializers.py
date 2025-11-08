from rest_framework import serializers
from .models import Shoe

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = ["id", "name", "brand", "price", "size", "stock"]

    def validate_name(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("El nombre es obligatorio.")
        return value

    def validate_brand(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("La marca es obligatoria.")
        return value

    def validate_price(self, value):
        if value is None:
            raise serializers.ValidationError("El precio es obligatorio.")
        if value < 0:
            raise serializers.ValidationError("El precio no puede ser negativo.")
        return value
