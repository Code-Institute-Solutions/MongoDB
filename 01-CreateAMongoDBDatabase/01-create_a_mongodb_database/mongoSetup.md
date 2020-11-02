### Create Cluster:
- select **Shared Clusters** *(free)*


### Select Cloud Provider:
- select **Amazon Web Services (AWS)**


### Select Region:
- select region closest to you *(any of the free choices)*


### Select Cluster Tier:
- select **M0 Sandbox** *(free forever)*


### Assign Cluster Name:
- any name *(cannot be changed after creation)*


### Create a Database User:
- navigate to **Database Access** under *Security* menu
- SCRAM username and password should only be **alphanumeric** *(no special characters!)*
- select **Read and Write to any Database** from *Database User Privileges*


### Whitelist an IP Address:
- navigate to **Network Access** under *Security* menu
- select **Allow Access From Anywhere**
- *supply IP Addresses of actual hosts further security*


### Create Database on Cluster:
- select **Add My Own Data** from the *Collections* tab on your Cluster Sandbox
- any database name *(camelCase preferred)*
- any collection name *(camelCase preferred)*


### Create New Collection on Database:
- select **Insert Document** within the database
- provide `key/value` pairs
