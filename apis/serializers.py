from rest_framework import serializers

from schedule import models


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseSchedule
        fields = '__all__'
        depth = 1
