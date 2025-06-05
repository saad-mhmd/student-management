# student-management

Student Management Website using Angular (TypeScript) for the frontend and Django (with Django REST Framework) for the backend. PostgreSQL is the intended database, with TailwindCSS and Angular Material for styling as required.

## Features

- REST API for creating, listing, updating and deleting students
- Angular 20 frontend with a dashboard and student management screens
- TailwindCSS and Angular Material styling
- Proxy configuration so `/api` calls reach the Django backend during development
- Docker setup with PostgreSQL for an easy local environment

## Development

The project requires **Python 3.12+** and **Node.js 18+**. It's best to
work inside a virtual environment when installing the backend
dependencies if you are running everything locally:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Docker Setup

If you prefer running the backend inside Docker, make sure Docker is
installed and then start the services using Docker Compose from the
project root:

```bash
docker-compose up --build
```

The Django development server will be available on `http://localhost:8000`
and will automatically apply migrations on start. A PostgreSQL instance is
provided as part of the Compose setup.

### Backend (local)
If you are not using Docker, install dependencies and run the development server manually:

```
cd backend
# install Python dependencies
pip install -r backend/backend/requirements.txt

# apply migrations and start the server
python manage.py migrate
python manage.py runserver
```

### Frontend

Ensure the backend is running (either locally or via Docker) on port
`8000` before starting the Angular development server. The configuration
in `proxy.conf.json` proxies `/api` requests to this backend server.

1. Change into the `frontend` directory

   ```bash
   cd frontend
   ```

2. Install Node dependencies (this installs Tailwind CSS and Angular CLI)

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200` and will reload
   automatically when source files change.

4. Open your browser to http://localhost:4200 to use the application.

### Running Tests

**Backend**

```bash
python manage.py test
```

**Frontend**

The Angular project runs Karma tests in headless Edge. Ensure Microsoft Edge is
installed and run:

```bash
npm test
```
