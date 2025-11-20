# Ferulio – QR Ordering Web Application

Ferulio is a QR-based ordering platform for restaurants and cafés.  
Guests scan a QR code at the table, browse a digital menu, place orders, and optionally pay – all from their own device.  
Staff manage orders from a web dashboard, with real-time updates and integration into the restaurant workflow.

---

## Features

- **QR-based table ordering**
  - Unique QR code per table/area
  - Automatic table recognition after scanning

- **Digital menu**
  - Categories (starters, mains, desserts, drinks, etc.)
  - Item variants (size, toppings, options)
  - Availability flags (sold out, hidden, seasonal)

- **Order management**
  - Real-time order creation & status updates (received, in preparation, ready, served)
  - Kitchen / bar view for processing orders
  - Order history and basic analytics

- **Multi-restaurant support (optional)**
  - Separate restaurant accounts
  - Per-restaurant menus, tables and staff users

- **Performance & reliability**
  - Redis-based caching for frequently accessed data (menu, settings)
  - Dockerized stack for easy deployment
  - PostgreSQL as a robust relational database

---

## Tech Stack

### Frontend

- **Next.js** (recommended) or **React**
- TypeScript (optional but recommended)
- UI library (e.g. Tailwind CSS / MUI / Chakra UI – configurable)
- Axios or Fetch API for REST communication
- Client-side QR code generation (for table QR labels)

### Backend

- **Django** & **Django REST Framework**
- Django ORM with **PostgreSQL**
- JWT or Session-based authentication
- Role-based permissions (admin, staff, viewer)

### Infrastructure & DevOps

- **PostgreSQL** as primary database
- **Redis** for caching and optional task queue
- **Docker** & **docker-compose** for local development and deployment
- Optional:
  - Nginx as reverse proxy
  - Gunicorn / uvicorn for serving Django

---

## Architecture Overview

The system consists of the following services:

1. **Frontend (Next.js / React)**
   - Static pages and SSR/CSR views for guests
   - Admin/staff dashboard for managing menu, tables and orders
   - Communicates with the backend via REST API

2. **Backend (Django REST)**
   - Provides REST endpoints for:
     - Authentication & authorization
     - Menu management
     - Table & QR management
     - Order lifecycle (create, update status, list)
   - Handles validation, business logic and integration with the database

3. **Database (PostgreSQL)**
   - Stores:
     - Users, roles and permissions
     - Restaurants, tables, QR identifiers
     - Menus, items, categories and options
     - Orders, order lines, logs

4. **Cache (Redis)**
   - Caches:
     - Public menu data per restaurant
     - Configuration / settings
     - Session or token data (depending on setup)
   - Can be extended for:
     - Rate limiting
     - Background job queues (Celery / RQ)

5. **Containerization (Docker)**
   - Each service runs in its own container:
     - `frontend` (Next.js / React)
     - `backend` (Django)
     - `db` (PostgreSQL)
     - `redis` (Redis)
     - (optional) `nginx` as a reverse proxy

---

## Getting Started

### 1. Prerequisites

- Docker & docker-compose
- Node.js (if you want to run frontend outside Docker)
- Python 3.11+ (if you want to run backend outside Docker)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/ferulio.git
cd ferulio
