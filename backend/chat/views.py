from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response



# Create your views here.
@api_view(['POST'])
def chat(request):
    message = request.data.get("message")

    return Response({"reply": f"Hello, you said: {message}"})

