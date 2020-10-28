#!/usr/bin/bash

if [ $1 == 'prod' ] 
then
    echo "Changing config to prod"
    cat ./src/configs/prodConfig.json > ./src/config.json
elif [ $1 == 'local' ] 
then
    echo "Changing config to local"
    cat ./src/configs/localConfig.json > ./src/config.json
fi
