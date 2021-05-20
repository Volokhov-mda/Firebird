import os

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': str(os.environ['DB_NAME']),
        'USER': str(os.environ['DB_USER']),
        'PASSWORD': str(os.environ['DB_PASSWORD']),
        'HOST': str(os.environ['DB_HOST']),
        'PORT': '5432',
    },
}
