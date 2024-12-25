function initiatePayment() {
    // 創建 PayPal 訂單
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '1000',
                        currency_code: 'TWD'
                    },
                    description: '商品名稱'
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('交易成功！感謝 ' + details.payer.name.given_name + ' 的購買！');
            });
        },
        onError: function(err) {
            alert('交易發生錯誤，請稍後再試');
            console.error(err);
        }
    }).render('#paypal-button-container');
}

// 初始化 PayPal 按鈕
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1000',
                    currency_code: 'TWD'
                },
                description: '商品名稱'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('交易成功！感謝 ' + details.payer.name.given_name + ' 的購買！');
        });
    },
    onError: function(err) {
        alert('交易發生錯誤，請稍後再試');
        console.error(err);
    }
}).render('#paypal-button-container'); 