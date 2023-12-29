from django.shortcuts import render
from django.http import HttpResponse
from . import models


def home(request):
    objs = models.CourseSchedule.objects.all()
    return HttpResponse(objs)