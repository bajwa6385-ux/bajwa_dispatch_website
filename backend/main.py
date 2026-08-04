from fastapi import FastAPI
from database import Base, engine
from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal
from models import Contact
from schemas import ContactCreate

app = FastAPI(
    title="Bajwa Dispatch Solutions API",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {
        "message": "Welcome to Bajwa Dispatch Solutions API"
    }
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/contact")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        company=contact.company,
        message=contact.message,
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return {
        "success": True,
        "message": "Contact saved successfully."
    }