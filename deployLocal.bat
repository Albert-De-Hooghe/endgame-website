docker image build -t chess-endgame-study:latest .
docker stop chess-endgame-study
docker rm chess-endgame-study
docker run -dp 8000:3000 --name chess-endgame-study chess-endgame-study:latest