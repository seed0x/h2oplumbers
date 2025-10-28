// Simple in-memory rate limiter for deployment without Redis
// For production, replace with Redis-based solution

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const WINDOW_SIZE = parseInt(process.env.RATE_LIMIT_WINDOW || '15') * 60 * 1000; // Convert to milliseconds
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  rateLimitStore.forEach((entry, key) => {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  });
}, 60000); // Clean every minute

export const rateLimit = {
  async limit(identifier: string) {
    const now = Date.now();
    const entry = rateLimitStore.get(identifier);

    if (!entry) {
      rateLimitStore.set(identifier, {
        count: 1,
        resetTime: now + WINDOW_SIZE
      });
      return { success: true };
    }

    if (now > entry.resetTime) {
      rateLimitStore.set(identifier, {
        count: 1,
        resetTime: now + WINDOW_SIZE
      });
      return { success: true };
    }

    if (entry.count >= MAX_REQUESTS) {
      return { success: false };
    }

    entry.count++;
    return { success: true };
  }
};


