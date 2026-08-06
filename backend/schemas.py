from pydantic import BaseModel


class ContactCreate(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    message: str