# Download and install MongoDB
wget -q https://git.io/vFb1J -O /tmp/setupmongodb.sh && source /tmp/setupmongodb.sh

# Connect to the Mongo Database
# NOTE: REPLACE THE `<dbuser>` & `<dbpassword>` WITH YOUR OWN PERSONAL
# VALUES (WITHOUT THE ANGULAR BRACKETS)
mongo ds159812.mlab.com:59812/mytestdb -u <dbuser> -p <dbpassword>
