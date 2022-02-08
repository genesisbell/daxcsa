from django.contrib import admin
from .models import OrderDetail, Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ['id']

class OrderDetailsAdmin(admin.ModelAdmin):
    list_display = ['id', 'date']

# Register your models here.
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderDetail, OrderDetailsAdmin)
