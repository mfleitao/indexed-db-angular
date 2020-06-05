import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdbService {
    
    constructor() {
        let open = this.openDB();
        open.onupgradeneeded = () => {
          let db = open.result;
          db.createObjectStore('books-store', { autoIncrement: true });
          db.createObjectStore('borrowed-books-store', { autoIncrement: true });
          db.createObjectStore('students-store', { autoIncrement: true });
        }
    }

    private openDB() {
        return window.indexedDB.open('idb-my-library', 1);
    } 

    public add(objectStore, value): void {
        let open = this.openDB();
        open.onsuccess = () => {
            let db = open.result;
            let tx = db.transaction(objectStore, 'readwrite');
            let store = tx.objectStore(objectStore);
            store.add(value);
            tx.oncomplete = () => db.close();
        }
    }
    
    public update(objectStore, value, key): void {
        let open = this.openDB();
        open.onsuccess = () => {
            let db = open.result;
            let tx = db.transaction(objectStore, 'readwrite');
            let store = tx.objectStore(objectStore);
            store.put(value, key);
            tx.oncomplete = () => db.close();
        }
    }
    
    public get(objectStore, key) {
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.get(key);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
    public getAll(objectStore) {
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.getAll();
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
    public delete(objectStore, key): void {
        let open = this.openDB();
        open.onsuccess = () => {
            let db = open.result;
            let tx = db.transaction(objectStore, 'readwrite');
            let store = tx.objectStore(objectStore);
            store.delete(key);
            tx.oncomplete = () => db.close();
        }
    }
    
}
