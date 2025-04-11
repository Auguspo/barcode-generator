# 🧾 Barcode Generator - ARCA Edition

[🔗 Proyecto en desarrollo - Deploy opcional si aplica]

**Barcode Generator** es una aplicación web construida con Next.js que permite generar códigos de barras personalizados conforme a la reglamentación oficial de ARCA. La herramienta facilita la creación masiva de códigos a partir de archivos CSV, permitiendo visualizar, exportar e imprimir los códigos de forma ágil y centralizada.

---

## 🚀 Tecnologías utilizadas

- **Framework principal:** [Next.js 15](https://nextjs.org/)
- **Lenguaje:** TypeScript + React 19
- **Estilos:** Tailwind CSS
- **Generador de códigos:** [JsBarcode](https://github.com/lindell/JsBarcode)
- **Parser CSV:** [PapaParse](https://www.papaparse.com/)
- **Tipado y soporte:** @types + ESLint + PostCSS

---

## ⚙️ Instalación local

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/barcode-generator.git
cd barcode-generator
```

2. Instalá las dependencias:

```bash
npm install
```

3. Corré el proyecto en modo desarrollo:

```bash
npm run dev
```

> Asegurate de tener Node.js y npm instalados en tu máquina.

---

## 📄 Funcionalidades principales

- ✅ Generación de códigos de barra conforme a estándares ARCA
- 📂 Importación de datos desde archivos CSV (mediante PapaParse)
- 🧾 Visualización dinámica de los códigos con JsBarcode
- 🖨️ Exportación o impresión directa desde el navegador
- 🎨 Interfaz moderna, limpia y responsive con TailwindCSS

---

## 📸 Capturas de pantalla

> Reemplazá los ejemplos con tus imágenes reales.

### 🎯 Generador con vista previa

![Generador](./public/screenshots/generador-barcode.png)

### 📁 Subida de CSV

![Subida CSV](./public/screenshots/csv-upload.png)



## 🧪 Scripts útiles

```bash
npm run dev     # Corre el proyecto en modo desarrollo
npm run build   # Genera versión para producción
npm run start   # Inicia la app en modo producción
npm run lint    # Corre el linter
```

---

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## 🤝 Contribuciones

¿Querés sumar mejoras o corregir algo?  
¡Bienvenidos los PRs y sugerencias! Abrí un issue o mandá un fork.

---

## 📬 Contacto

Desarrollado por [Tu Nombre o Usuario](https://github.com/auguspo)  
Proyecto orientado a automatizar y facilitar la generación de códigos de barra válidos para ARCA.
```
