<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'recipe/provision.php';

// Pre-deployment

before('deploy', 'provision:check');
before('deploy', 'provision:configure');
before('deploy', 'provision:update');
before('deploy', 'provision:upgrade');
before('deploy', 'provision:install');

// Config

set('repository', 'https://github.com/MicahelE/laminarXWeb.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

set('deploy_path', '/var/www/laminarx-web');

// Environment

set('env', [
    'PATH' => '/usr/local/bin:/usr/bin:/bin:/usr/sbin:$PATH',
]);

// Hosts

//$host = getenv('LAMINARX_WEB_HOST');
//$privateKeyPath = getenv('LAMINARX_WEB_SSH_PRIVATE_KEY_PATH');
$username = 'admin';
$usernameAtHost = $username . '@' . 'ec2-99-79-70-151.ca-central-1.compute.amazonaws.com';
$privateKeyPath = '~/.ssh/laminarx-1.pem';
host($usernameAtHost)
    ->set('identity_file', $privateKeyPath)
    ->set('sudo_password', '…');

// NGINX Provisioning

set('provision_webserver', 'nginx');
set('provision_version', 'latest');

// Hooks

after('deploy:failed', 'deploy:unlock');
