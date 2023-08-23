FROM ubuntu

COPY graceful-stop.sh .
CMD ["bash", "-c", "/graceful-stop.sh"]