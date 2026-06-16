from rest_framework import viewsets, permissions
from .models import Banner, VisionMission, Statistic, Initiative
from .serializers import (
    BannerSerializer, VisionMissionSerializer, 
    StatisticSerializer, InitiativeSerializer
)

class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.filter(status=True).order_by('order')
    serializer_class = BannerSerializer
    permission_classes = [permissions.AllowAny]

class VisionMissionViewSet(viewsets.ModelViewSet):
    queryset = VisionMission.objects.all()
    serializer_class = VisionMissionSerializer
    permission_classes = [permissions.AllowAny]

class StatisticViewSet(viewsets.ModelViewSet):
    queryset = Statistic.objects.filter(status=True).order_by('order')
    serializer_class = StatisticSerializer
    permission_classes = [permissions.AllowAny]

class InitiativeViewSet(viewsets.ModelViewSet):
    queryset = Initiative.objects.filter(status=True).order_by('order')
    serializer_class = InitiativeSerializer
    permission_classes = [permissions.AllowAny]