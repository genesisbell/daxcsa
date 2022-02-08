from daxcsa_backend.settings import ALLOWED_HOSTS
from .base import *

DEBUG = False

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

#Database
DATABASES = {
    'default': {
    }
}