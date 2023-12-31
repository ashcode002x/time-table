from rest_framework import serializers

from schedule import models


class TimeScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TimeSchedule
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    # schedule = serializers.PrimaryKeyRelatedField(queryset=models.TimeSchedule.objects.all(), many=True)
    class Meta:
        model = models.CourseSchedule
        fields = '__all__'
        depth = 1