# Download and install MongoDB client 4.0.6 for Atlas on AWS Cloud9
wget -q https://git.io/fjuhw -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh


# Download and install MongoDB client 4.0.6 for Atlas on old Cloud9
wget -q https://git.io/fh7vV -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh

# Connect to the Mongo Database on Atlas
# NOTE: REPLACE THE `<dbuser>` & `<dbname>` WITH YOUR OWN PERSONAL
# VALUES (WITHOUT THE ANGULAR BRACKETS)

mongo "mongodb+srv://myfirstcluster-fsmjm.mongodb.net/<dbname>" --username <dbuser>
