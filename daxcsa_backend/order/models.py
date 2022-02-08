from time import timezone
from tkinter import CASCADE
from django.db import models
from django.utils import timezone
from product.models import Product

# Create your models here.
class OrderDetail(models.Model):
    date = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['date']

    def _str_(self):
        return self.id

class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField()
    order_details = models.ForeignKey(OrderDetail, on_delete=models.CASCADE)

    def _str_(self):
        return self.id



