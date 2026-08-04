from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str | None = None
    message: str