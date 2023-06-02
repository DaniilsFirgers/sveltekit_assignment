# Travel App

## Developing

Once you've created a project and installed dependencies with `npm install`, add path to dev_configs/server.conf to /etc/nginx/nginx.conF under http block as include path to dev_configs/server.conf or move server.conf to sites-available and then link the config to sites-enabled. Then add travelcenter.net to /etc/hosts under localhost. After you can tun the following command:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
