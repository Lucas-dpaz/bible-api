class cache {
    constructor () {
        this.store = new Map();
    };

    set(key, value, ttl) {
        const expireTime = Date.now() + ttl;
        this.store.set(key, {value, expireTime});
        setTimeout(() => {
            this.store.delete(key)
        }, ttl);
    }

    get(key){
        const entry = this.store.get(key);
        
        if(!entry){return null};
        if(Date.now() > entry.expireTime) {
            this.store.delete(key);
            return null;
        };

        return entry.value;
    };

    delete(key) {
        this.store.delete(key);
    };
};

module.exports = cache