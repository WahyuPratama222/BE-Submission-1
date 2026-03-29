# Base image yang digunakan, node versi 18 alpine (ringan)
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json duluan untuk memanfaatkan Docker layer caching
# Jadi kalau kode berubah tapi dependency tidak, npm install tidak diulang
COPY package*.json ./

# Install semua dependency di dalam container
RUN npm install

# Copy semua source code ke dalam container
COPY . .

# Kasih tahu Docker bahwa app berjalan di port ini
EXPOSE 3000

# Perintah yang dijalankan saat container hidup
CMD ["node", "index.js"]