#!/bin/bash
#LOGS_APP=/var/log/mongodb
#LOGS_APP=/opt/tomcat8/logs
LOGS_APP=/opt/tomcat9/logs

#LOG_BAK_FILE=/home/test/bash/logs/mongod.log
LOG_BAK_FILE=/home/test/bash/logs/catalina.out

echo "Start script clean logs..."
while true
do
	day="$(date +'%d')"
	house="$(date +'%H')"
	minute="$(date +'%M')"
	second="$(date +'%S')"
	#if [ "$day" -eq 01 ] && [ "$house" -eq 01 ] && [ "$minute" -eq 00 ] && [ "$second" -eq 00 ]
	if [[($day == 01) && ($house == 00) && ($minute == 00) && ($second == 00)]]
	then		
		#rm -rf $LOGS_APP/*
		cp -a $LOG_BAK_FILE $LOGS_APP
	fi
done

