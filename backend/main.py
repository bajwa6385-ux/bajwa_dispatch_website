from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models import Contact
from routes.contact import router as contact_router


app = FastAPI(title="Bajwa Dispatch API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def create_tables():
    Base.metadata.create_all(bind=engine)


app.include_router(contact_router)


@app.get("/")
def root():
    return {
        "message": "Bajwa Dispatch API Running"
    }