import useUserStore from '../store/user'

//是否实名认证
export const isVerify = () => {
    const sotre = useUserStore()
    return sotre.userInfo?.isVerify
}

export const isLogin = () => {
    const sotre = useUserStore()
    return !!sotre.token
}

//加载阿里js
export const loadScript = (url: string, id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.getElementById(id)) return resolve(); // 防止重复加载
      
      const script = document.createElement('script');
      script.id = id;
      script.src = url;
      script.async = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`加载失败: ${url}`));
      
      document.head.appendChild(script);
    });
};