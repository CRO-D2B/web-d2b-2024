echo "Rebuild iniciado en $(date)"

# Definir la ruta del proyecto
PROJECT_DIR="/var/www/dev.d2b.cl/"

# Navegar al directorio del proyecto
cd $PROJECT_DIR || { echo "No se pudo acceder al directorio del proyecto"; exit 1; }

# Actualizar el repositorio
git pull || { echo "Error al hacer git pull"; exit 1; }

# Instalar dependencias
pnpm install || { echo "Error al instalar dependencias"; exit 1; }

# Construir el proyecto 
pnpm build || { echo "Error al hacer build del proyecto"; exit 1; }

# Reiniciar el proyecto en pm2
pnpm restart-deploy || { echo "Error al reiniciar el proyecto en pm2"; exit 1; }

echo "Rebuild finalizado en $(date)"