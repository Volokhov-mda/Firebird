from django.db import models


class Coin(models.Model):
    asset = models.CharField(max_length=1000)
    logo = models.CharField(max_length=5000)
    apy_supply = models.CharField(max_length=1000)
    wallet_supply = models.CharField(max_length=1000)
    apy_borrow = models.CharField(max_length=1000)
    wallet_borrow = models.CharField(max_length=1000)
    descriptionRU = models.CharField(max_length=5000)
    descriptionENG = models.CharField(max_length=5000)
    link = models.CharField(max_length=1000)
