from rest_framework.response import Response
from rest_framework.views import APIView

from api.coins.models import Coin


class Coins(APIView):
    def get(self, request):
        """
        Get coins info
        """
        coins = Coin.objects.all()

        response = {'markets': []}
        for coin in coins:
            response['markets'].append({
                'asset': coin.asset,
                'logo': coin.logo,
                'supply': {
                    'apy': coin.apy_supply,
                    'wallet': coin.wallet_supply,
                },
                'borrow': {
                    'apy': coin.apy_borrow,
                    'wallet': coin.wallet_borrow,
                },
                'descriptionRU': coin.descriptionRU,
                'descriptionENG': coin.descriptionENG,
                'link': coin.link,
            })

        return Response(response)
