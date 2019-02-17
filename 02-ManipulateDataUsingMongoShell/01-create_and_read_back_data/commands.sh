# Download and install MongoDB client 3.4 for mLab
wget -q https://git.io/vFb1J -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh

# Download and install MongoDB client 4.0.6 for Atlas
wget -q https://git.io/fh7vV -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh

# Connect to the Mongo Database on mLab
# NOTE: REPLACE THE `<dbuser>` & `<dbpassword>` WITH YOUR OWN PERSONAL
# VALUES (WITHOUT THE ANGULAR BRACKETS)
mongo ds159812.mlab.com:59812/mytestdb -u <dbuser> -p <dbpassword>

# Connect to the Mongo Database on Atlas
# NOTE: REPLACE THE `<dbuser>` & `<dbname>` WITH YOUR OWN PERSONAL
# VALUES (WITHOUT THE ANGULAR BRACKETS)
mongo "mongodb+srv://myfirstcluster-fsmjm.mongodb.net/<dbname>" --username <dbuser>
