import { defineConfig } from 'vite'

export default defineConfig({
  base: "/academia/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        cursos: 'cursos.html',
        curso_web: 'cursos/curso_web.html',
        curso_ia: 'cursos/curso_ia.html',
        blog: 'blog.html',
        programacion_web: 'blog/programacion_web.html',
        programacion_web2: 'blog/programacion_web2.html',
        ia: 'blog/ia.html',
        ia_llama2: 'blog/ia_llama2.html',
        quienes_somos: 'quienes_somos.html',
        registro: 'registro.html',
        login: 'login.html',
        contacto: 'contacto.html',
        aviso_legal: 'aviso_legal.html'
      }
    }
  }
})