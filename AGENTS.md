# AGENTS.md — Exedra Theme Core

## Propósito
Este repositorio contiene el theme propietario de agencia para Shopify: **Exedra Theme Core**.
Su objetivo es servir como base modular, escalable y personalizable para múltiples clientes.

## Principios del proyecto
- No duplicar lógica si puede resolverse con un componente o snippet reutilizable.
- Priorizar mantenibilidad y claridad sobre efectos visuales innecesarios.
- Todo módulo debe ser escalable para múltiples verticales: beauty, fashion, tech y B2B-ready.
- Mantener el editor de Shopify limpio y entendible.
- Evitar dependencias infladas o acoplamientos difíciles de mantener.

## Convenciones
### Ramas
- `main`: rama estable
- `dev`: integración general
- `feature/*`: trabajo puntual por módulo

### Commits
- `feat:` nueva funcionalidad
- `fix:` corrección
- `refactor:` mejora estructural
- `docs:` documentación
- `style:` ajustes visuales no funcionales
- `chore:` tareas operativas

## Capas del sistema
1. Foundation
2. Commerce Core
3. Content Engine
4. Data Layer
5. Client Override Layer

## Prioridades del MVP
1. Foundation tokens + settings
2. Header / footer / navegación
3. Home sections clave
4. Collection engine
5. Product engine
6. Cart drawer y conversion layer
7. Data layer y presets

## Restricciones
- No usar jQuery.
- No meter múltiples formas de resolver lo mismo.
- No crear secciones redundantes por cliente.
- No mezclar branding específico de clientes dentro del core.

## Compatibilidades importantes
- Judge.me Reviews
- BSS B2B Solution
- Bulk Price Editor Sami
- ManyChat
- Search & Filters
