# Imagen base
FROM python:3.11-slim

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para compilar mysqlclient
RUN apt-get update && apt-get install -y \
    gcc \
    pkg-config \
    default-libmysqlclient-dev \
    netcat-openbsd \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copiar dependencias de Python
COPY requirements.txt .

# Instalar dependencias de Python
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto 8000
EXPOSE 8000

# ✅ Ejecutar migraciones automáticamente antes de levantar el servidor
CMD ["sh", "-c", "python -c 'import socket,os,time,sys\nh=os.getenv(\"DB_HOST\",\"db\")\np=int(os.getenv(\"DB_PORT\",\"3306\"))\nwhile True:\n try:\n  socket.create_connection((h,p),2); break\n except Exception:\n  print(\"waiting for db...\"); sys.stdout.flush(); time.sleep(1)\n' && python manage.py makemigrations && python manage.py migrate && python manage.py loaddata store/fixtures/shoes_initial.json && python manage.py runserver 0.0.0.0:8000"]

