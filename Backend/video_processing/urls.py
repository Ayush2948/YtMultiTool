from django.urls import path
from .views import upload_video, download_video

urlpatterns = [
    path('upload/', upload_video, name='upload_video'),
    path('download/<str:filename>/', download_video, name='download_video'),
]
