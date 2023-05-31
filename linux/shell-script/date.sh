#!/bin/bash

#echo "$(date +'%Y-%m-%d %H:%M:%S')"
day="$(date +'%d')"
house="$(date +'%H')"
minute="$(date +'%M')"
second="$(date +'%S')"
echo $house:$minute:$second

#a=1
#b=2
while true
do
	house="$(date +'%H')"
	minute="$(date +'%M')"
	second="$(date +'%S')"
	# if [ "$a" -eq 1 ] && [ "$b" = 2 ]
	if [[($house == 15) && ($minute == 03) && ($second == 00)]]; then
		echo "Stop"
		exit
	fi
done
