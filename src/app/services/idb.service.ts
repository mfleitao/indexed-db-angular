import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class IdbService {

    BOOKS: string = "books-store";
    BORROWED_BOOKS: string = "borrowed-books-store";
    STUDENTS: string = "students-store";
    
    constructor(private dataService: DataService) {
        let open = this.openDB();
        open.onupgradeneeded = () => {
            let db = open.result;
            
            db.createObjectStore('books-store', { keyPath: '_id', autoIncrement: true });
            dataService.getBooks().subscribe(data => {
                data.forEach(book => this.add('books-store', book));
            });

            db.createObjectStore('students-store', { keyPath: '_id',  autoIncrement: true });
            dataService.getStudents().subscribe(data => {
                data.forEach(student => this.add('students-store', student));
            });

            db.createObjectStore('borrowed-books-store', { keyPath: '_id', autoIncrement: true });
            db.createObjectStore('reviews-store', { keyPath: '_id', autoIncrement: true });
        }
    }

    private openDB() {
        return window.indexedDB.open('idb-my-library', 1);
    } 

    public add(objectStore, value) {
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.add(value);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
    public update(objectStore, value, key) {
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.put(value);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
    public get(objectStore, key: number) {
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

    public getAllBooksByStudent(objectStore, key) {
        let items: Array<any> = [];
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.getAll();
                request.onsuccess = () => {
                    request.result.forEach(data => {
                        if (data.student._id == key)
                            items.push(data);
                    });
                    resolve(items);
                }
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
    public delete(objectStore, key) {
        return new Promise((resolve, reject) => {
            let open = this.openDB();
            open.onsuccess = () => {
                let db = open.result;
                let tx = db.transaction(objectStore, 'readwrite');
                let store = tx.objectStore(objectStore);
                let request = store.delete(key);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
                tx.oncomplete = () => db.close();
            }
        });
    }
    
}
