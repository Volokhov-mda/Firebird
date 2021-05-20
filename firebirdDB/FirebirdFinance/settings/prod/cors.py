import os

CORS_ALLOWED_ORIGINS = (
    os.environ['BACKEND_HOST'],
    os.environ['FRONTEND_HOST'],
)
