from django.db import models
import datetime
# Create your models here.
class CourseSchedule(models.Model):
    code = models.CharField(max_length=50)
    course = models.CharField(max_length = 200)
    teacher = models.CharField(max_length = 200)
    TNL = models.IntegerField(default = 0)
    schedule = models.ManyToManyField("TimeSchedule", verbose_name=("select time of course"))
    year = models.IntegerField(default = 0)
    def __str__(self):
        return self.code+' ( '+self.course+' )'

class TimeSchedule(models.Model):
    week = models.CharField(max_length = 200)
    startTime = models.TimeField()
    endTime = models.TimeField()
    @classmethod
    def create_object(self,w,st,et):
        obj = TimeSchedule()
        obj.week = w
        obj.startTime = datetime.time(hour=st,minute=0,second=0)
        obj.endTime = datetime.time(hour=et,minute=0,second=0)
        obj.save()
        return obj
    def __str__(self):
        return self.week+' '+str(self.startTime.hour)+'-'+str(self.endTime.hour)