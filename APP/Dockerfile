# definir la imagen que voy a utilizar
FROM node:20-slim

# definir ruta dentro del contenedor
WORKDIR /app

# copiar package
COPY package*.json ./

# ejecutar
RUN npm install

# copiar el fuente
COPY . .

# exponer el puerto
EXPOSE 3000

CMD ["node", "index.js"]