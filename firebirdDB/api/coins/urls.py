from django.urls import re_path

from api.coins.views import Coins

urlpatterns = [
    re_path('^$', Coins.as_view(), name='coins'),
]
