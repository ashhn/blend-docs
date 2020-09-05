#!/bin/bash

BUCKET=blend-ui.prifina.com
if [ $1 == "alpha" ]; then
BUCKET=alpha.blend-ui.prifina.com
fi
if [ $1 == "beta" ]; then
BUCKET=beta.blend-ui.prifina.com
fi

aws s3 sync storybook-static/ s3://$BUCKET --region us-east-1 --profile prifina-123


