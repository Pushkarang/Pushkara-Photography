#!/bin/bash

pi_IP=${PI_IP:-192.168.43.47}
pi_user=${PI_USER:-pi}

figlet Building; yarn build 
tar cf app.tar ./public 

figlet Copying; scp app.tar $pi_user@$pi_IP:
figlet Deploying; ssh $pi_user@$pi_IP 'tar xvf app.tar -C /home/pi/static_server'