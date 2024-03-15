from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def upload_video(request):
    if request.method == 'POST' and request.FILES:
        uploaded_file = request.FILES['video_file']
        # Handle file saving to a specific directory
        # Example:
        # with open('path/to/your/directory/' + uploaded_file.name, 'wb+') as destination:
        #     for chunk in uploaded_file.chunks():
        #         destination.write(chunk)
        return JsonResponse({'message': 'File uploaded successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method or no file provided'}, status=400)

@csrf_exempt
def download_video(request, filename):
    # Logic to fetch output video files
    # Example:
    # with open('path/to/your/directory/' + filename, 'rb') as file:
    #     response = HttpResponse(file.read(), content_type='video/mp4')
    #     response['Content-Disposition'] = 'attachment; filename=' + filename
    #     return response
    return JsonResponse({'error': 'File not found'}, status=404)
