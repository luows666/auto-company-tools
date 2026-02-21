const HTML_TEMPLATES = {
  'index.html': `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Company 产品中心 - 免费在线工具</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }
        .container { max-width: 900px; margin: 0 auto; }
        h1 { color: #fff; text-align: center; font-size: 2.5rem; margin-bottom: 10px; }
        .subtitle { color: rgba(255,255,255,0.7); text-align: center; margin-bottom: 40px; }
        .products { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
        .product-card {
            background: rgba,255,0(255,255.1);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 24px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            display: block;
            color: inherit;
        }
        .product-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.15); }
        .product-icon { font-size: 2rem; margin-bottom: 12px; }
        .product-name { color: #fff; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px; }
        .product-desc { color: rgba(255,255,255,0.6); font-size: 0.875rem; line-height: 1.5; }
        .sponsor-section { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; margin-top: 40px; text-align: center; border: 1px solid rgba(255,255,255,0.1); }
        .sponsor-title { color: #fff; font-size: 1.5rem; margin-bottom: 10px; }
        .sponsor-desc { color: rgba(255,255,255,0.6); margin-bottom: 20px; }
        .sponsor-buttons { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .sponsor-btn { padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s; color: #fff; }
        .sponsor-btn:hover { transform: translateY(-2px); }
        .alipay { background: #1677ff; }
        .wechat { background: #07c160; }
        .paypal { background: #003087; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Auto Company</h1>
        <p class="subtitle">自主 AI 公司 - 离线工具产品矩阵</p>
        <div class="products">
            <a href="/suite.html" class="product-card"><div class="product-icon">🛠️</div><div class="product-name">统一离线工具套件</div><div class="product-desc">7 合 1 离线工具：密码生成、JSON 工具、记账、单位转换、计时器、颜色提取、Hash</div></a>
            <a href="/personal-budget.html" class="product-card"><div class="product-icon">💰</div><div class="product-name">个人预算管家</div><div class="product-desc">简单记账、预算管理、收支分析、财务规划</div></a>
            <a href="/dev-tools.html" class="product-card"><div class="product-icon">⚡</div><div class="product-name">开发者工具箱</div><div class="product-desc">JSON 格式化、Base64 编解码、时间戳转换、颜色工具、UUID 生成等</div></a>
            <a href="/suite.html" class="product-card"><div class="product-icon">🔐</div><div class="product-name">密码生成器</div><div class="product-desc">安全随机密码生成、自定义选项、历史记录</div></a>
            <a href="/suite.html" class="product-card"><div class="product-icon">📊</div><div class="product-name">收银记账</div><div class="product-desc">商业记账、库存管理、销售统计、报表导出</div></a>
            <a href="/suite.html" class="product-card"><div class="product-icon">🤖</div><div class="product-name">营销 AI</div><div class="product-desc">本地 AI 营销工具、内容生成、SEO 优化</div></a>
            <a href="/suite.html" class="product-card"><div class="product-icon">📈</div><div class="product-name">营销工具</div><div class="product-desc">营销策略、内容创作、社交媒体管理</div></a>
        </div>
        <div class="sponsor-section">
            <h2 class="sponsor-title">☕ 支持我们</h2>
            <p class="sponsor-desc">如果你喜欢我们的工具，欢迎赞助一杯咖啡！</p>
            <div class="sponsor-buttons">
                <a href="https://qr.alipay.com/fk0941829sglvdprm8wgv0e" target="_blank" class="sponsor-btn alipay">支付宝赞助</a>
                <a href="weixin://wxpay/bizpayurl?pr=placeholder" class="sponsor-btn wechat">微信赞助</a>
                <a href="https://paypal.me/autocompany" target="_blank" class="sponsor-btn paypal">PayPal</a>
            </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <a href="/download.html" class="product-card" style="display: inline-block; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);">
                <div class="product-icon">📦</div>
                <div class="product-name">下载离线版本</div>
                <div class="product-desc">保存到本地，随时离线使用</div>
            </a>
        </div>
    </div>
</body>
</html>`
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname.slice(1) || 'index.html';

    // Get the HTML content
    const html = HTML_TEMPLATES[path];

    if (html) {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    // For other pages, redirect to index
    return new Response(HTML_TEMPLATES['index.html'], {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
