from FirebirdFinance.settings.base import *

if not CORS_ALLOW_ALL_ORIGINS:
    from FirebirdFinance.settings.prod.cors import *

if DATABASE == 'local':
    from FirebirdFinance.settings.dev.db import *
elif DATABASE == 'remote':
    from FirebirdFinance.settings.prod.db import *
