from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from pydantic import BaseModel


load_dotenv()

frontend = os.getenv(
    "FRONTEND_API"
)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    print("reat hit")
    return {"message": "Hello World"}


class URLRequest(BaseModel):
    url: str


@app.post("/crawlPage")
async def build_graph(request: URLRequest):
    url = request.url

    # process the URL
    result = "this is the url: " + url
    print(result)

    return result

# where i last ended off: wanted to do conventions. learn the patterns for 
# professional conventions in python backend. never knew them before. put them in like
# controller, service, etc. 
# and also separate everything into the crawler component.
# uvicorn main:app --reload