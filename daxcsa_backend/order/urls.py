from django.urls import include, path
from .views import GetOrdersAPIView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'orders', GetOrdersAPIView, 'orders')

urlpatterns = [
   # path('getOrder/<int:pk>', GetOrdersAPIView.as_view(), name='get_order'),
   path('orders/',include(router.urls)),
]