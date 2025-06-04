# student-management

Student Management Website using Angular (TypeScript) for the frontend and Django (with Django REST Framework) for the backend. PostgreSQL is the intended database, with TailwindCSS and Angular Material for styling as required.

## Development

The project requires **Python 3.12+** and **Node.js 18+**. It's best to
work inside a virtual environment when installing the backend
dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Backend

```
cd backend
# install Python dependencies
pip install -r backend/requirements.txt

# apply migrations and start the server
python manage.py migrate
python manage.py runserver
```

### Frontend

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
   npx ng serve
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
