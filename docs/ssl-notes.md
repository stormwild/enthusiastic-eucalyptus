## SSL Notes

- [OpenSSL Essentials: Working with SSL Certificates, Private Keys and CSRs](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)
- [Generating a self-signed certificate using OpenSSL](https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.cmc.doc/task_apionprem_gernerate_self_signed_openSSL.html)
- [How To Create an HTTPS Server on Localhost using Express](https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28)
- [An Express HTTPS server with a self-signed certificate](https://flaviocopes.com/express-https-self-signed-certificate/)

```bash
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -days 3650
openssl req -x509 -newkey rsa:4096 -nodes -days 365 -keyout domain.key   -out domain.crt
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -days 365 -keyout key.pem -out certificate.crt

openssl req -x509 -new -nodes -keyout server.key -out server.cert
```

## Redirect

[Automatic HTTPS connection/redirect with node.js/express](https://stackoverflow.com/questions/7450940/automatic-https-connection-redirect-with-node-js-express)
