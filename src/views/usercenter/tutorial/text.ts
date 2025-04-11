export const cpp = `// demo.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include "curl/curl.h"
#pragma comment(lib, "libcurl.lib")

//在CURLOPT_WRITEFUNCTION设置属性下，使用回调write_buff_data进行处理
static size_t write_buff_data(char *buffer, size_t size, size_t nitems, void *outstream)
{
	memcpy(outstream, buffer, nitems*size);
	return nitems*size;
}

/*
使用http代理
*/
int GetUrlHTTP(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_PROXY,"http://代理服务器地址:端口");//设置代理
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);//void* buff 将会传递给回调函数write_buff_data的第四个参数 void* outstream
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);//在CURLOPT_WRITEFUNCTION设置属性下，使用回调write_buff_data进行处理
		curl_easy_setopt(curl, CURLOPT_URL, url);//设置访问的域名
		/* 如果在10秒内速度低于50个字节/秒，则中止 */
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);/*下载最高速度*/
		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK){
			return res;
		}else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
/*
使用socks5代理
*/
int GetUrlSocks5(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_PROXY, "socks5://代理服务器地址:端口");//设置代理
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);
		curl_easy_setopt(curl, CURLOPT_URL, url);
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);/*下载最高速度*/
		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK) {
			return res;
		}
		else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
/*
不使用代理
*/
int GetUrl(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);
		curl_easy_setopt(curl, CURLOPT_URL, url);
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);/*下载最高速度*/
		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK)
		{
			return res;
		}
		else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
int main()
{
	char *buff=(char*)malloc(1024*1024);
	memset(buff, 0, 1024 * 1024);

	GetUrl("http://baidu.com", buff);
	printf("不使用代理：%s\\n", buff);

	memset(buff, 0, 1024 * 1024);
	GetUrlHTTP("http://baidu.com", buff);
	printf("http结果：%s\\n", buff);

	memset(buff, 0,1024 * 1024);
	GetUrlSocks5("http://baidu.com", buff);
	printf("socks5结果：%s\\n", buff);

	free(buff);
	Sleep(10 * 1000);//等待10秒退出

    return 0;
}`

export const go = `            
package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"net/url"
	"strings"
	"time"

	"golang.org/x/net/proxy"
)

// 代理IP设置
var ip = "代理服务器"   //示例:192.168.0.1
var port = "端口" //示例:2333
// 代理服务器
var proxyServer = "http://" + ip + ":" + port

// 测试地址
var testApi = "https://www.bitip.com"

func main() {
	var proxyIP = proxyServer
	go httpProxy(proxyIP, "", "")
	go Socks5Proxy(proxyIP, "", "")
	time.Sleep(time.Minute)
}

// http代理
func httpProxy(proxyUrl, user, pass string) {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), "http", "response:", err)
		}
	}()
	urli := url.URL{}

	if !strings.Contains(proxyUrl, "http") {
		proxyUrl = fmt.Sprintf("http://%s", proxyUrl)
	}

	urlProxy, _ := urli.Parse(proxyUrl)
	if user != "" && pass != "" {
		urlProxy.User = url.UserPassword(user, pass)
	}

	client := &http.Client{
		Transport: &http.Transport{
			Proxy: http.ProxyURL(urlProxy),
		},
	}
	rqt, err := http.NewRequest("GET", testApi, nil)
	if err != nil {
		panic(err)
		return
	}
	response, err := client.Do(rqt)
	if err != nil {
		panic(err)
		return
	}

	defer response.Body.Close()
	body, _ := ioutil.ReadAll(response.Body)
	fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "【http success】", "response:", response.Status, string(body))

	return
}

// socks5代理
func Socks5Proxy(proxyUrl, user, pass string) {

	defer func() {
		if err := recover(); err != nil {
			fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "response:", err)
		}
	}()

	var userAuth proxy.Auth
	if user != "" && pass != "" {
		userAuth.User = user
		userAuth.Password = pass
	}
	dialer, err := proxy.SOCKS5("tcp", proxyUrl, &userAuth, proxy.Direct)
	if err != nil {
		panic(err)
	}
	httpClient := &http.Client{
		Transport: &http.Transport{
			DialContext: func(ctx context.Context, network, addr string) (conn net.Conn, err error) {
				return dialer.Dial(network, addr)
			},
		},
		Timeout: time.Second * 10,
	}

	if resp, err := httpClient.Get(testApi); err != nil {
		panic(err)
	} else {
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)
		fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "【socks5 success】", "response:", string(body))
	}
}
`

export const nodejs = `#!/usr/bin/env node
require('request-promise')({
    url: 'https://www.bitip.com',//请求url
    proxy: 'http://ip:port',//代理服务器地址:端口
    })
.then(function(data){ console.log(data); },
    function(err){ console.error(err); });`

export const php = `            
<?php
	//代理IP设置
	$ip = "代理服务器地址";//示例:192.168.0.1
	$port = "端口";//示例:2333
	// 要访问的目标页面
	$targetUrl = "http://baidu.com";
	// 代理服务器
	$proxyServer = "http://$ip:$port";

	// 隧道身份信息
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $targetUrl);
	curl_setopt($ch, CURLOPT_HTTPPROXYTUNNEL, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	// 设置代理服务器
	curl_setopt($ch, CURLOPT_PROXYTYPE, 0); //http
	// curl_setopt($ch, CURLOPT_PROXYTYPE, 5); //sock5
	curl_setopt($ch, CURLOPT_PROXY, $proxyServer);

	// 设置隧道验证信息
	curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727;)");
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result = curl_exec($ch);
	$err = curl_error($ch);

	curl_close($ch);

	var_dump($err);
	var_dump($result);
`
export const java = `            
package demo;

import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Proxy;

/**
 * compile 'com.squareup.okhttp3:okhttp:4.9.3'
 */
class ApiProxyJava {
    public static void main(String[] args) throws IOException {
        testHttpWithOkHttp();
        testSocks5WithOkHttp();
    }

    /**
     * http代理
     */
    public static void testHttpWithOkHttp() throws IOException {
        //定义要访问的URL
        String url = "https://www.bitip.com";
        //创建一个HTTP类型的代理对象，设置代理服务器IP地址和端口号：
        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("ip", "port"));//这里的 "ip" 和 "port"应替换为代理服务器地址和端口。
        //构建一个OkHttpClient实例，并配置好HTTP代理：
        OkHttpClient client = new OkHttpClient().newBuilder().proxy(proxy).build();
        //发送GET请求并获取响应：
        Request request = new Request.Builder().url(url).build();
        okhttp3.Response response = client.newCall(request).execute();
        //获取并打印响应内容
        String responseString = response.body().string();
        System.out.println(responseString);
    }

    /**
     * SOCKS5代理
     */
    public static void testSocks5WithOkHttp() throws IOException {
        //定义要访问的URL
        String url = "https://www.bitip.com";
        //创建一个SOCKS类型的代理对象，设置代理服务器IP地址和端口号：
        Proxy proxy = new Proxy(Proxy.Type.SOCKS, new InetSocketAddress("ip", "port"));//这里的 "ip" 和 "port"应替换为实际的SOCKS代理服务器地址和端口。
        //构建一个OkHttpClient实例，并配置好SOCKS代理：
        //这里使用了SOCKS代理，这意味着所有的网络流量（包括TCP连接）都将通过这个SOCKS代理进行转发。
        OkHttpClient client = new OkHttpClient().newBuilder().proxy(proxy).build();
        //发送GET请求并获取响应：
        Request request = new Request.Builder().url(url).build();
        okhttp3.Response response = client.newCall(request).execute();
        //获取并打印响应内容：
        String responseString = response.body().string();
        System.out.println(responseString);
    }
}
`
export const python = `# coding=utf-8
# ！/usr/bin/env python
import json
import threading
import time
import requests as rq

# 设置请求头
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
    "Accept-Encoding": "gzip, deflate, br"
}
# 测试链接
testUrl = 'https://www.bitip.com'


# 核心业务
def testPost(host, port):
    # 配置获取到的ip，port
    proxies = {
        # host  api获取到的代理服务器地址
        # port  api获取到的端口
        'http': 'http://{}:{}'.format(host, port),
        'https': 'http://{}:{}'.format(host, port),
    }
    while True:
        try:
            # 配置代理后测试
            res = rq.get(testUrl, proxies=proxies, timeout=5)
            # print(res.status_code)
            # 打印请求结果
            print(res.status_code, "***", res.text)
            break
        except Exception as e:
            print(e)
            break
    return


class ThreadFactory(threading.Thread):
    def __init__(self, host, port):
        threading.Thread.__init__(self)
        self.host = host
        self.port = port

    def run(self):
        testPost(self.host, self.port)


# 提取代理的链接  json类型的返回值
tiqu = '提取链接'

while 1 == 1:
    # 每次提取10个，放入线程中
    resp = rq.get(url=tiqu, timeout=5)
    try:
        if resp.status_code == 200:
            dataBean = json.loads(resp.text)
        else:
            print("获取失败")
            time.sleep(1)
            continue
    except ValueError:
        print("获取失败")
        time.sleep(1)
        continue
    else:
        # 解析json数组，获取ip和port
        print("code=", dataBean["code"])
        code = dataBean["code"]
        if code == 0:
            threads = []
            for proxy in dataBean["data"]:
                threads.append(ThreadFactory(proxy["ip"], proxy["port"]))
            for t in threads:  # 开启线程
                t.start()
                time.sleep(0.01)
            for t in threads:  # 阻塞线程
                t.join()
    # break
    time.sleep(1)`
export const selenium = `from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def seleniumSetUP(ip,port):
    # 设置Chrome驱动程序的路径
    # 创建Chrome浏览器实例
    chrome_options = Options()
    # 配置获取到的ip和port
    chrome_options.add_argument(f'--proxy-server=http://{ip}:{port}')
    browser = webdriver.Chrome(options=chrome_options)
    # 使用代理访问
    browser.get('http://www.bitip.com')
    print(browser.page_source)

if __name__ == '__main__':
    # 获取代理的url，一次仅获取一条
    porxyUrl = "https://www.bitip.com/api/ProxyLogic/Generate?KeyName=synetmbvxebitip&Num=1&AutoSwitch=0&Format=0"
    # 访问并获取代理
    ipInfo = requests.get(porxyUrl)
    print(ipInfo.json())
    info = ipInfo.json()["data"]
    # 解析json，获取代理服务器地址
    ip = info[0]["ip"]
    # 解析json，获取代理的端口
    port = info[0]["port"]
    # 获取到的代理信息传入到selenium中进行配置
    seleniumSetUP(ip,port)`

	export const cpp2 = `// demo.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include "curl/curl.h"
#pragma comment(lib, "libcurl.lib")
//curl 回调函数
static size_t write_buff_data(char *buffer, size_t size, size_t nitems, void *outstream)
{//把接收的数据拷贝到缓存中
	memcpy(outstream, buffer, nitems*size);
	return nitems*size;
}
/*
使用http代理
*/
int GetUrlHTTP(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_PROXY,"http://代理服务器地址:端口");//设置http代理地址
		curl_easy_setopt(curl, CURLOPT_PROXYUSERPWD, "认证账户名:认证账户密码");//认证账户名及密码，以":"分隔
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);//设置读写缓存
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);//设置回调函数
		curl_easy_setopt(curl, CURLOPT_URL, url);//设置url地址
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);//设置一个长整形数，控制多少秒传送CURLOPT_LOW_SPEED_LIMIT规定的字节数
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);//设置一个长整形数,控制传送多少字节
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);//下载最高速度

		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK){
			return res;
		}else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
/*
使用socks5代理
*/
int GetUrlSocks5(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_PROXY, "socks5://代理服务器地址:端口");//设置socks5代理地址
		curl_easy_setopt(curl, CURLOPT_PROXYUSERPWD, "认证账户名:认证账户密码");//认证账户名及密码，以":"分隔
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);//设置读写缓存
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);//设置回调函数
		curl_easy_setopt(curl, CURLOPT_URL, url);//设置url地址
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);//设置一个长整形数，控制多少秒传送CURLOPT_LOW_SPEED_LIMIT规定的字节数
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);//设置一个长整形数,控制传送多少字节;
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);/*下载最高速度*/
		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK) {
			return res;
		}
		else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
/*
不使用代理
*/
int GetUrl(char *url, char *buff)
{
	CURL *curl;
	CURLcode res;
	//使用的curl库 初始化curl库
	curl = curl_easy_init();
	if (curl)
	{
		curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void*)buff);//设置读写缓存
		curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_buff_data);//设置回调函数
		curl_easy_setopt(curl, CURLOPT_URL, url);//设置url地址
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME, 10L);//设置一个长整形数，控制多少秒传送CURLOPT_LOW_SPEED_LIMIT规定的字节数
		curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 50L);//设置一个长整形数,控制传送多少字节
		curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, 2000000L);/*下载最高速度*/
		res = curl_easy_perform(curl);
		curl_easy_cleanup(curl);
		if (res == CURLE_OK)
		{
			return res;
		}
		else {
			printf("错误代码:%d\\n", res);
			MessageBox(NULL, TEXT("获取IP错误"), TEXT("助手"), MB_ICONINFORMATION | MB_YESNO);
		}
	}
	return res;
}
int main()
{
	char *buff=(char*)malloc(1024*1024);
	memset(buff, 0, 1024 * 1024);
	//不使用http代理
	GetUrl("http://myip.top", buff);
	printf("不使用代理：%s\\n", buff);
	//使用http代理
	memset(buff, 0, 1024 * 1024);
	GetUrlHTTP("http://www.bitip.com", buff);
	printf("http结果：%s\\n", buff);
	//使用socks5代理
	memset(buff, 0,1024 * 1024);
	GetUrlSocks5("http://www.bitip.com", buff);
	printf("socks5结果：%s\\n", buff);

	free(buff);
	Sleep(10 * 1000);//等待10秒退出

    return 0;
}`
export const go2 = `package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"net/url"
	"strings"
	"time"

	"golang.org/x/net/proxy"
)

// 账密设置
var account = "认证帐户名"
var password = "认证账户密码"

// 代理服务器
var proxyServer = "代理地址"  //示例：proxy.bitip.com:10001;

// 测试地址
var testApi = "https://www.bitip.com"

func main() {
	go httpProxy(proxyServer, account, password)
	go Socks5Proxy(proxyServer, account, password)

	time.Sleep(time.Minute)
}

// http代理
func httpProxy(proxyUrl, user, pass string) {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), "http", "response:", err)
		}
	}()
	urli := url.URL{}

	if !strings.Contains(proxyUrl, "http") {
		proxyUrl = fmt.Sprintf("http://%s", proxyUrl)
	}

	urlProxy, _ := urli.Parse(proxyUrl)
	if user != "" && pass != "" {
		urlProxy.User = url.UserPassword(user, pass)
	}

	client := &http.Client{
		Transport: &http.Transport{
			Proxy: http.ProxyURL(urlProxy),
		},
	}
	rqt, err := http.NewRequest("GET", testApi, nil)
	if err != nil {
		panic(err)
		return
	}
	response, err := client.Do(rqt)
	if err != nil {
		panic(err)
		return
	}

	defer response.Body.Close()
	body, _ := ioutil.ReadAll(response.Body)
	fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "【http success】", "response:", response.Status, string(body))

	return
}

// socks5代理
func Socks5Proxy(proxyUrl, user, pass string) {

	defer func() {
		if err := recover(); err != nil {
			fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "response:", err)
		}
	}()

	var userAuth proxy.Auth
	if user != "" && pass != "" {
		userAuth.User = user
		userAuth.Password = pass
	}
	dialer, err := proxy.SOCKS5("tcp", proxyUrl, &userAuth, proxy.Direct)
	if err != nil {
		panic(err)
	}
	httpClient := &http.Client{
		Transport: &http.Transport{
			DialContext: func(ctx context.Context, network, addr string) (conn net.Conn, err error) {
				return dialer.Dial(network, addr)
			},
		},
		Timeout: time.Second * 10,
	}

	if resp, err := httpClient.Get(testApi); err != nil {
		panic(err)
	} else {
		defer resp.Body.Close()
		body, _ := ioutil.ReadAll(resp.Body)
		fmt.Println(time.Now().Format("2006-01-02 15:04:05 07"), proxyUrl, "【socks5 success】", "response:", string(body))
	}
}
`
export const nodejs2 = `            
#!/usr/bin/env node
require('request-promise')({
    url: 'www.bitip.com',//请求url
    proxy: 'proxy.bitip.com:10001:?:?',//认证账户名-zone-代理池:认证账户密码@代理地址
    })
.then(function(data){ console.log(data); },
    function(err){ console.error(err); });`

export const php2 = `<?php
	//账密设置
	$user = "认证帐户名";
	$password = "认证账户密码";
	// 要访问的目标页面
	$targetUrl = "http://baidu.com";
	// 代理服务器
	$proxyServer = "代理地址";  //示例：www.bitip.com:2336;
	$proxyUserPwd = "$user:$password";

	// 隧道身份信息
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $targetUrl);
	curl_setopt($ch, CURLOPT_HTTPPROXYTUNNEL, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	// 设置代理服务器
	curl_setopt($ch, CURLOPT_PROXYTYPE, 0); //http
	// curl_setopt($ch, CURLOPT_PROXYTYPE, 5); //sock5
	curl_setopt($ch, CURLOPT_PROXY, $proxyServer);

	// 设置隧道验证信息
	curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727;)");
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxyUserPwd);
	$result = curl_exec($ch);
	$err = curl_error($ch);

	curl_close($ch);

	var_dump($err);
	var_dump($result);`
export const java2 = `package demo;

import okhttp3.Credentials;
import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.PasswordAuthentication;
import java.net.Proxy;

/**
 * compile 'com.squareup.okhttp3:okhttp:4.9.3'
 */
class AutProxyJava {
    public static void main(String[] args) throws IOException {
        testWithOkHttp();

        testSocks5WithOkHttp();
    }

    /**
     * http代理
     */
    public static void testWithOkHttp() throws IOException {
        String url = "https://www.bitip.com";//请求地址
        //创建一个HTTP类型的代理对象，指定代理服务器的主机名和端口号
        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("host", "port"));//这里用到的"host"和"port"应替换为代理服务器地址和端口。
        // 构建一个自定义的OkHttpClient实例，设置代理服务器并添加一个代理认证器（proxyAuthenticator）：
        OkHttpClient client = new OkHttpClient().newBuilder().proxy(proxy).proxyAuthenticator((route, response) -> {
            // 在这里生成Basic认证的凭证字符串
            String credential = Credentials.basic("account", "password");//此处的账号密码 "account" 和 "password" 应替换为认证账户名和认证账户密码。
            // 如果代理服务器需要身份验证，则在请求头中添加认证信息
            return response.request().newBuilder()
                    .header("Proxy-Authorization", credential)
                    .build();
        }).build();

        //发送GET请求并获取响应：
        Request request = new Request.Builder().url(url).build();
        okhttp3.Response response = client.newCall(request).execute();
        //获取并打印响应内容：
        String responseString = response.body().string();
        System.out.println(responseString);
    }

    /**
     * Socks5代理
     */
    public static void testSocks5WithOkHttp() throws IOException {
        //请求地址
        String url = "https://www.bitip.com";
        //创建一个SOCKS类型的代理对象，设置实际的代理服务器主机名和端口号：
        Proxy proxy = new Proxy(Proxy.Type.SOCKS, new InetSocketAddress("host", "port"));//这里用到的"host"和"port"应替换为代理服务器地址和端口。
        //设置全局默认的认证器（Authenticator），用于处理所有网络连接需要的基本身份验证。这里预设了一个用户名和密码：
        java.net.Authenticator.setDefault(new java.net.Authenticator() {
            private PasswordAuthentication authentication =
                    new PasswordAuthentication("account", "password".toCharArray());//此处的账号密码 "account" 和 "password" 应替换为认证账户名和认证账户密码。

            @Override
            protected PasswordAuthentication getPasswordAuthentication() {//当网络连接需要身份验证时，系统会调用此方法获取认证信息。
                return authentication;
            }
        });
        //构建OkHttpClient实例，配置好SOCKS代理：
        OkHttpClient client = new OkHttpClient().newBuilder().proxy(proxy).build();
        //发送GET请求并获取响应：
        Request request = new Request.Builder().url(url).build();
        okhttp3.Response response = client.newCall(request).execute();
        //获取并打印响应内容：
        String responseString = response.body().string();
        System.out.println(responseString);
    }
}
`
export const python2 = `'''
导入thread，time，request包,
实现多线程控制，等待，http请求
'''
import _thread
import time
import requests

# 设置请求头
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 MicroMessenger
    /6.5.19 NetType/4G Language/zh_TW",
}

# 测试地址
mainUrl = 'https://www.bitip.com'

def testUrl():
    # 设置帐密代理
    proxy = {
        'http': 'http://认证账户名:认证账户密码@代理服务器地址:代理服务器端口',
        'https': 'http://认证账户名:认证账户密码@代理服务器地址:代理服务器端口',
    }
    try:
        res = requests.get(mainUrl, headers=headers, proxies=proxy, timeout=10)
        print(res.status_code, res.text)
    except Exception as e:
        print("访问失败", e)
        pass

# 开启10个线程进行测试
for i in range(0, 10):
    _thread.start_new_thread(testUrl, ())
    time.sleep(0.1)

time.sleep(10)`
export const selenium2 = `            
'''
注意：本方法需要安装seleniumwire库  pip install selenium-wire
其他情况下 可能需要配合selenium的webdriver使用  即selenium和seleniumwire都要导入
使用seleniumwire库的目的就是减少代码量和无意义的插件使用，方便快捷
'''


from seleniumwire import webdriver

# selenium-wire 代理设置
# username 用户名
# password 密码
# host 域名
# port 端口
seleniumwire_options = {
    'proxy': {
        'http': 'http://myusername:password@host:port',
        'https': 'http://myusername:password@host:port',
        'no_proxy': 'localhost,127.0.0.1'
    }
}

# other Chrome options
chrome_options = webdriver.ChromeOptions()
# 设置无头
chrome_options.add_argument('--headless')
# 忽视ssl报错
chrome_options.add_argument('--ignore-ssl-errors')
driver = webdriver.Chrome('chromedriver', options=chrome_options, seleniumwire_options=seleniumwire_options)
driver.get('https://www.bitip.com')`