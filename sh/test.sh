
#!/bin/bash
# test部署
# sh /home/react-next-pc-demo/sh/test.sh

cd /home/react-next-pc-demo
pm2 delete all
pnpm test


