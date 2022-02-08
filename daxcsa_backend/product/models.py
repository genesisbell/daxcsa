from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    details = models.CharField(max_length=250)
    iamge = models.ImageField(upload_to='product_image', blank=False, null=False, )

    def _str_(self):
        return self.name