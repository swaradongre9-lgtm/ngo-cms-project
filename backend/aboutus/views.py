from rest_framework import viewsets, permissions
from .models import OurStory, CoreValue, Program, TeamMember
from .serializers import (
    OurStorySerializer, CoreValueSerializer,
    ProgramSerializer, TeamMemberSerializer
)

class OurStoryViewSet(viewsets.ModelViewSet):
    queryset = OurStory.objects.all()
    serializer_class = OurStorySerializer
    permission_classes = [permissions.AllowAny]

class CoreValueViewSet(viewsets.ModelViewSet):
    queryset = CoreValue.objects.all()
    serializer_class = CoreValueSerializer
    permission_classes = [permissions.AllowAny]

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    permission_classes = [permissions.AllowAny]

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [permissions.AllowAny]
    