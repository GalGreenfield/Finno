domain_to_tunnel_from = 'localhost:3000'
server_alias = 'finno:80'
ssh -R $server_alias:$domain_to_tunnel_from serveo.net