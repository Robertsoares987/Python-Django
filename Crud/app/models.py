from django.db import models

# Create your models here.
# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    Email = models.EmailField (max_length=30)
    Password = models.CharField(max_length=8)