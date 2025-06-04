# student-management

Student Management Website using Angular, TypeScript, Django, PostgreSQL. TailwindCSS and Angular Material are used when needed.

## Testing
Karma tests run using Chrome Headless.
# student-management
Student Management Website Using Angular, TypeScript, Django, PostgreSQL. In addition to TailwindCSS and Angular Material when needed.
Student Management Website Using Angular (TypeScript) for the frontend and Django
(with Django REST Framework) for the backend. PostgreSQL is the intended
database with TailwindCSS and Angular Material for styling as required.

## Development

### Backend

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```
cd frontend
npm install
npx ng serve
```

### Running Tests

**Backend**

```bash
python manage.py test
```

**Frontend**

The Angular project runs Karma tests in headless Chrome. Ensure Chrome is
installed and run:

```bash
npm test
``` 