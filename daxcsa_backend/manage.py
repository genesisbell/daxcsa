#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from pathlib import Path
from dotenv import load_dotenv

dotenv_path = Path(__file__).parent/'.env'
load_dotenv(dotenv_path)

def main():
    """Run administrative tasks."""

    if os.environ.get('ENV') == 'local':
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'daxcsa_backend.settings.local')
    elif os.environ.get('ENV') == 'prod':        
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'daxcsa_backend.settings.prod')
    else:
        sys.exit('No ENV variable configured')



    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
