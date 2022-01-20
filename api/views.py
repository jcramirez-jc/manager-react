from .models import Lead
from rest_framework import viewsets, permissions, generics
from .serializers import LeadSerializer

class LeadList(generics.ListCreateAPIView):
    # queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny] 
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer