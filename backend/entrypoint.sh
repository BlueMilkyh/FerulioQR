#!/bin/sh
set -e

python manage.py migrate --noinput
python manage.py collectstatic --noinput

python manage.py shell <<'EOF'
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username="ferulio").exists():
    User.objects.create_superuser("ferulio", "admin@example.com", "ferulio")
EOF

exec "$@"

