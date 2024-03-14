import cv2
import numpy as np

# Loading the Video
cap = cv2.VideoCapture('traffic video.mp4')

LinePos = 550
#initializing Subtractor
fgbg = cv2.bgsegm.createBackgroundSubtractorMOG()

MinWidthRect = 80
MinHeightRect = 80
offset = 6
vcounter = 0

def CentreHandle(x,y,w,h):
    x1 = int(w/2)
    y1 = int(h/2)
    cx = x+x1
    cy = y+y1
    return cx,cy

detect = []




while True:
    ret,frame1= cap.read()
    grey = cv2.cvtColor(frame1,cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(grey,(3,3),5)

    SubImg = fgbg.apply(blur)
    dilat = cv2.dilate(SubImg,np.ones((5,5)))
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
    dilatdata= cv2.morphologyEx(dilat, cv2.MORPH_CLOSE, kernel)
    dilatdata= cv2.morphologyEx(dilatdata, cv2.MORPH_CLOSE, kernel)
    CounterShape,h = cv2.findContours(dilatdata,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)

    cv2.line(frame1,(25,LinePos),(1200,LinePos),(125,125,0),3)

    for (i,j) in enumerate(CounterShape):
        (x,y,w,h) = cv2.boundingRect(j)
        ValidateCounter = (w>=MinWidthRect) and (h>=MinHeightRect)
        if not ValidateCounter:
            continue

        cv2.rectangle(frame1,(x,y),(x+w,y+h),(255,0,0),2)
        cv2.putText(frame1,"Vehicle :"+str(vcounter),(x,y-20),cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,255),5)

        centre = CentreHandle(x,y,w,h)
        detect.append(centre)
        cv2.circle(frame1,centre,4,(0,0,255),-1)

        for(x,y) in detect:
            if(y<LinePos+offset) and (y>LinePos-offset):
                vcounter+=1
            cv2.line(frame1,(25,LinePos),(1200,LinePos),(125,0,0),3)
            detect.remove((x,y))
            print("Vehicle Counter:"+str(vcounter))
    
    cv2.putText(frame1,"Vehicle Counter:"+str(vcounter),(450,70),cv2.FONT_HERSHEY_SIMPLEX,2,(0,0,255),5)
 

    cv2.imshow('Video Original',frame1)

    if cv2.waitKey(1)==13:
        break

cv2.destroyAllWindows()
cap.release()