from rest_framework import serializers
from .models import Order, OrderDetail
from product.models import Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('__all__')

class OrderSerializer(serializers.ModelSerializer):

    product = ProductSerializer(many=False)

    class Meta:
        model = Order
        fields = ('__all__')



class GetOrderSerializer(serializers.ModelSerializer):

    
    #product_name = serializers.CharField(source='product.name', read_only=True)
    #order = serializers.CharField(source='order.product', read_only=True)

    orders = OrderSerializer(source='order_set', many=True)
    #product = ProductSerializer(source='order_set.product_set', many=True)

    class Meta:
        model = OrderDetail
        fields = ('__all__')
