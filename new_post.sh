#!/bin/bash
unixtime=`date +%s`
today=`date '+%Y-%m-%d'`

cat - << EOS > posts/$unixtime.md
---
title: "$today"
publish_date: $today
---
EOS