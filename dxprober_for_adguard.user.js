// ==UserScript==
// @name         舞萌 DX 成绩上传
// @namespace    https://maimai.wahlap.com
// @version      0.14
// @description  dxprober for AdGuard or any other scripts manager
// @match        https://maimai.wahlap.com/maimai-mobile/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 创建上传成绩按钮
    var uploadButton = document.createElement('button');
    uploadButton.textContent = '上传成绩';
    uploadButton.style.position = 'fixed';
    uploadButton.style.top = '20px';
    uploadButton.style.left = '20px';
    uploadButton.style.padding = '10px';
    uploadButton.style.backgroundColor = '#4CAF50';
    uploadButton.style.color = 'white';
    uploadButton.style.border = 'none';
    uploadButton.style.borderRadius = '5px';
    uploadButton.style.cursor = 'pointer';
    uploadButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

    // 创建状态框
    var statusBox = document.createElement('div');
    statusBox.style.position = 'fixed';
    statusBox.style.top = '50%';
    statusBox.style.left = '50%';
    statusBox.style.transform = 'translate(-50%, -50%)';
    statusBox.style.padding = '20px';
    statusBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    statusBox.style.color = 'white';
    statusBox.style.borderRadius = '5px';
    statusBox.style.fontFamily = 'Arial, sans-serif';
    statusBox.style.fontSize = '16px';
    statusBox.style.display = 'none'; // 初始隐藏状态框

    // 将按钮和状态框添加到网页中
    document.body.appendChild(uploadButton);
    document.body.appendChild(statusBox);

    // 监听上传成绩按钮的点击事件
    uploadButton.addEventListener('click', function () {
        // 显示状态框
        statusBox.style.display = 'block';
        statusBox.textContent = '成绩上传中...';

        $.ajax({
            url: 'https://maimai.wahlap.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=0',
            type: 'GET',
            async: true, 
            success: function (res) {
                console.log(res);
                // 执行脚本代码
                ((u, p) => {
                    var count = 0;
                    var total = 5;
                    
                    [0, 1, 2, 3, 4].forEach((diff) => {
                        $.ajax({
                            url: 'https://maimai.wahlap.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=' + diff,
                            type: 'GET',
                            async: false,
                            success: (res) => {
                                console.log(res.match("错误"));
                                $.ajax({
                                    url: 'https://www.diving-fish.com/api/pageparser/page',
                                    type: 'POST',
                                    data: "<login><u>" + u + "</u><p>" + p + "</p></login>" + res.match(/<html.*>([\s\S]*)<\/html>/)[1].replace(/\s+/g, ' '),
                                    contentType: 'text/plain',
                                    success: (res) => {
                                        console.log(res);
                                        count++;
                                        statusBox.textContent = count;
                                        if (count === total) {
                                            statusBox.textContent = '上传完毕！';
                                            uploadButton.textContent = '成绩已上传';
                                            // 五秒后隐藏状态框
                                            setTimeout(function() {
                                                statusBox.style.display = 'none';
                                            }, 5000);

                                        }
                                    }
                                });
                            }
                        });
                    });
                })("USERNAME", "PASSWORD"); // 替换成自己的用户名和密码
            }
        });
    });
})();
    
