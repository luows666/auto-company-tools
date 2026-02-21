#!/bin/bash
# Auto Company 服务管理脚本

cd /mnt/d/Teams/Auto-Company-main/dist

echo "Starting Auto Company services..."

# 启动产品中心 (端口 3000)
if ! lsof -ti:3000 > /dev/null; then
    echo "Starting product center on port 3000..."
    nohup python3 -m http.server 3000 > /tmp/auto-company-3000.log 2>&1 &
    sleep 1
fi

# 启动个人预算管家 (端口 3001)
if ! lsof -ti:3001 > /dev/null; then
    echo "Starting personal budget on port 3001..."
    cd /mnt/d/Teams/Auto-Company-main/projects/personal-budget
    nohup python3 -m http.server 3001 > /tmp/auto-company-3001.log 2>&1 &
    cd -
fi

# 启动 serveo 隧道
if ! pgrep -f "serveo.net" > /dev/null; then
    echo "Starting serveo tunnel..."
    nohup ssh -o StrictHostKeyChecking=no -R 80:localhost:3000 serveo.net > /tmp/serveo.log 2>&1 &
    sleep 5

    # 获取 serveo URL
    if [ -f /tmp/serveo.log ]; then
        URL=$(grep -oE "https://[a-zA-Z0-9.-]+" /tmp/serveo.log | head -1)
        if [ -n "$URL" ]; then
            echo "Public URL: $URL"
            echo "$URL" > /tmp/auto-company-url.txt
        fi
    fi
fi

echo "Services started!"
echo "Product Center: http://localhost:3000"
echo "Personal Budget: http://localhost:3001"

if [ -f /tmp/auto-company-url.txt ]; then
    echo "Public URL: $(cat /tmp/auto-company-url.txt)"
fi
