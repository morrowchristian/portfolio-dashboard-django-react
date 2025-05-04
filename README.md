# Portfolio Dashboard (Django + React)

A full-stack portfolio dashboard built with Django REST Framework and React, styled with Tailwind CSS. Projects are managed via a Django backend and displayed in an interactive frontend.

---

## TODO / Project Notes

### How to Run the Project (in GitHub Codespaces)

**Backend (Django)**
From `/backend`:
```
source env/bin/activate
python manage.py runserver 0.0.0.0:8000
```

**Frontend (React/Vite)**
From `/frontend`:
```
npm run dev
```

Then open the frontend in the GitHub Codespaces preview (port 5173).

---

### What’s Working
- Django backend API with project data
- CORS bypass using Vite dev server proxy
- Tailwind CSS integrated in React
- Project cards rendered from `/api/projects/`

---

### Next Steps
- [ ] Add more project data via Django Admin or fixtures
- [ ] Build a **Skills** section using Tailwind
- [ ] Create a responsive **navbar** with anchor links
- [ ] Optional: Add a **Contact form**
- [ ] Optional: Add project filters or search
- [ ] Prepare for deployment:
  - [ ] Frontend → Vercel
  - [ ] Backend → Render or Railway
  - [ ] Update CORS for production
  - [ ] Use `.env` files for base URLs
