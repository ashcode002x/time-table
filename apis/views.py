from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, redirect
from rest_framework import serializers,viewsets,status,generics
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST


from .serializers import *
from schedule import models

class ViewSet(viewsets.ModelViewSet):
    queryset = models.CourseSchedule.objects.all()
    serializer_class = ScheduleSerializer

