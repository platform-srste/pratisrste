rm -rf dest
grunt create_temp_prod_dir
docker build -t srste/pratisrste:1.0.0 .
docker push srste/pratisrste:1.0.0

----
Running docker container - 

    1. docker-compose up
        It will run the container with the command that waits for long duration so the container is up and can be jumped into it to execute the commands
    2. docker ps -a 
        Tick the docker container ran in step 1
    3. docker exec -it <container-id> /bin/sh
    4. Run the commands to pull/push the code into the container file system
    5. All other commands including bundling, creating external lib bundles etc. works
    6. To push the application code into git, do it either ways - 
        a. Clone the application git repo into the container file system
            git clone <application-repo-url>
            npm run app-pub all <application-dir>
            Go to the application-dir and push the code back to git

        b. Once the code is pulled into the container, do the bundling and publish it into a local directory in the container like below - 
            Step 1: /app/pratisrste > mkdir <app-name>
            Step 2: /app/pratisrste > npm run pull [hostname/ip] [websocket-port]
            Step 3: /app/pratisrste > grunt --app=<app-name>
            Step 4: /app/pratisrste > npm run app-pub <app-name> [application directory created in step1]
            Step 5: From another terminal, copy the application directory into local directory where the git repo is cloned
                    docker cp [pratisrste-conatiner-id]:/app/pratisrste/[application directory created in step1] [local path]
            Step 6: Push the updated files of the application to the git repo.

        
Squashing Docker image to avoid max depth exceeded issue - 
    > docker-squash -f 100 -t srste/srste:1.0.1 srste/srste:1.0.0.full