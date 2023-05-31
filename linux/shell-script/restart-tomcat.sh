#!/bin/bash

echo "Start script tomcat_restart..."
while true
do
	day="$(date +'%d')"
	house="$(date +'%H')"
	minute="$(date +'%M')"
	second="$(date +'%S')"	
	if [[($house == 01) && ($minute == 00) && ($second == 00)]]
	then
		# pkill -9 java
		tomcat9_stop
		tomcat9_start
		exit 1
	fi
done
