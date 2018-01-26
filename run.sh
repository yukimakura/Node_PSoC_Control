cd /home/pi/site1/mjpg-streamer/
sudo ./mjpg_streamer -i "./input_uvc.so -f 8 -r 160x120 -d /dev/video0 -y -n" -o "./output_http.so -w ./www -p 8090"  && cd /home/pi/site1/ && node app.js
