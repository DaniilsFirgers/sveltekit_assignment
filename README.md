# Travel App

## Developing

Once you've created a project and installed dependencies with `npm install`.
Then add dev_configs/server.conf path to /etc/nginx/nginx.conf under http block as include path to dev_configs/server.conf or move server.conf to sites-available and then link the config to sites-enabled.
Then add travelcenter.net to /etc/hosts below localhost. After you can tun the following command:

```bash
npm run dev
```

After that you can navigate to http://travelcenter.net

## Building

To create a production version of your app:

```bash
npm run build
```
