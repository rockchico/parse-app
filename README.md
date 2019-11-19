
https://github.com/parse-community/Parse-Server
https://github.com/parse-community/parse-dashboard

francisco@fs-ubnt:~$ parse-server --appId TESTE123 --masterKey 123456 --databaseURI mongodb://localhost/teste_parse --publicServerURL http://localhost:1337/parse --mountGraphQL --mountPlayground

francisco@fs-ubnt:~$ parse-dashboard --dev --appId TESTE123 --masterKey 123456 --serverURL "http://10.200.10.24:1337/parse" --graphQLServerURL "http://10.200.10.24:1337/graphql" --appName MyAppName
