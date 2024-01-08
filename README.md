docker build -t matheusfols/node-fc -f $(pwd)/node/Dockerfile .

docker run -it -p 5000:5000 matheusfols/node-fc
