# expense-tracker-webapp
Expense Tracker React Webapp


## Access the Web Application

For this sample, we will use kubectl port-forward to access the web application.

1. Run the following command to port-forward the gateway.

    ```bash
    kubectl port-forward svc/choreo-external-gateway -n choreo-system 8443:443 &
    ```

2. Access the web application from your browser using the following URL.
    - https://expense-tracker-webapp-development.choreoapps.localhost:8443