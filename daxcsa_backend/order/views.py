from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import GetOrderSerializer, OrderSerializer
from .models import Order, OrderDetail

# Create your views here.
#class GetOrdersAPIView(APIView):

#    def get(self, request, pk=None, format=None):
#        #orders = Order.objects.all()
#        order_detail = OrderDetail.objects.get(pk=pk)
#        serializer = GetOrderSerializer(order_detail)
#        return Response(serializer.data)

class GetOrdersAPIView(viewsets.ModelViewSet):
    serializer_class = GetOrderSerializer
    queryset = OrderDetail.objects.all()


class OrderProductAPIView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


