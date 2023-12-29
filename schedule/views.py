from django.shortcuts import render
from django.http import HttpResponse

from . import models
# Create your views here.
# weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
# time=[8,9,10,11,12,1,2,3,4,5]
def home(request):
    # _time = models.TimeSchedule()
    # for w in weeks:
    #     for t in time:
    #         t1= _time.create_object(w,t,t+1)
    return HttpResponse('run')