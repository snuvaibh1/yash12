// Cache management utilities
export class CacheManager {
  private static instance: CacheManager;
  
  private constructor() {}
  
  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  // Clear browser cache programmatically
  public async clearBrowserCache(): Promise<void> {
    try {
      // Clear localStorage
      localStorage.clear();
      
      // Clear sessionStorage
      sessionStorage.clear();
      
      // Clear service worker cache if available
      if ('serviceWorker' in navigator && 'caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }
      
      console.log('Browser cache cleared successfully');
    } catch (error) {
      console.error('Error clearing browser cache:', error);
    }
  }

  // Clear service worker cache via message
  public async clearServiceWorkerCache(): Promise<boolean> {
    return new Promise((resolve) => {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        const messageChannel = new MessageChannel();
        
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data.success);
        };
        
        navigator.serviceWorker.controller.postMessage(
          { type: 'CLEAR_CACHE' },
          [messageChannel.port2]
        );
      } else {
        resolve(false);
      }
    });
  }

  // Force reload without cache
  public forceReload(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
        window.location.reload();
      });
    } else {
      // Fallback: reload with cache bypass
      window.location.reload();
    }
  }

  // Check if cache needs clearing (based on version or timestamp)
  public shouldClearCache(): boolean {
    const lastClearTime = localStorage.getItem('lastCacheClear');
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
    
    if (!lastClearTime || (currentTime - parseInt(lastClearTime)) > oneHour) {
      localStorage.setItem('lastCacheClear', currentTime.toString());
      return true;
    }
    
    return false;
  }

  // Clear image cache specifically
  public clearImageCache(): void {
    // Force reload images by adding timestamp
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const src = img.src;
      if (src && !src.includes('?t=')) {
        img.src = `${src}${src.includes('?') ? '&' : '?'}t=${Date.now()}`;
      }
    });
  }
}