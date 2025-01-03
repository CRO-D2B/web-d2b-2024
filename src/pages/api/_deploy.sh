echo "Rebuild iniciado en $(date)"

# Definir la ruta del proyecto
PROJECT_DIR="/var/www/d2b.cl/"
DEPLOY_SCRIPT="/var/www/d2b.cl/src/pages/api/_deploy.sh"

# Navegar al directorio del proyecto
cd $PROJECT_DIR || { echo "No se pudo acceder al directorio del proyecto"; exit 1; }

# Actualizar el repositorio
git pull || { echo "Error al hacer git pull"; exit 1; }

# Instalar dependencias
pnpm install || { echo "Error al instalar dependencias"; exit 1; }

# Construir el proyecto 
pnpm build || { echo "Error al hacer build del proyecto"; exit 1; }

# Borrar directorio de destino
rm -rf dist || { echo "Error al eliminar directorio de destino"; exit 1; }

# Mover directorio de destino
mv dist-temp/dist dist || { echo "Error al mover directorio de destino"; exit 1; }

# Reiniciar el proyecto en pm2
pnpm restart-deploy || { echo "Error al reiniciar el proyecto en pm2"; exit 1; }

chmod +x $DEPLOY_SCRIPT

echo "Rebuild finalizado en $(date)"
