from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Contact
from schemas import ContactCreate

router = APIRouter()


@router.post("/contact")
def create_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db)
):

    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        company=contact.company,
        message=contact.message
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return {
        "success": True,
        "message": "Contact saved successfully."
    }