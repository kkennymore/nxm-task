const dbName = 'nxm';
const storeName = 'nxmTableName';

// Open IndexedDB
function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = (event) => {
      reject('Database error: ' + event.target.errorCode);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(storeName, { keyPath: 'id' });
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
}

// Get splash screen state
export function getOnboardingState() {
  return new Promise((resolve, reject) => {
    openDb().then(db => {
      const transaction = db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(1);

      request.onsuccess = (event) => {
        resolve(event.target.result?.seen || false);
      };

      request.onerror = () => {
        reject('Error fetching data');
      };
    });
  });
}

// Get data from IndexedDB
export function getIndexDb(id) {
  return new Promise((resolve, reject) => {
    openDb().then(db => {
      const transaction = db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(id);

      request.onsuccess = event => {
        const result = event.target.result;
        resolve(result ? JSON.parse(result.jsonData) : null);
      };

      request.onerror = () => {
        reject('Error fetching data from IndexedDB');
      };
    }).catch(err => reject('Error opening IndexedDB: ' + err.message));
  });
}

// Save data to IndexedDB
export function setIndexDb(id, data) {
  return new Promise((resolve, reject) => {
    openDb().then(db => {
      const transaction = db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);

      const request = store.put({ id, jsonData: JSON.stringify(data) });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject('Error saving data to IndexedDB');
      };
    }).catch(err => reject('Error opening IndexedDB: ' + err.message));
  });
}

// Set splash screen state
export function setOnboardingState(seen) {
  return new Promise((resolve, reject) => {
    openDb().then(db => {
      const transaction = db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put({ id: 1, seen });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject('Error saving data');
      };
    });
  });
}

// Delete data from IndexedDB
export function deleteIndexDbKey(keyName) {
  return new Promise((resolve, reject) => {
    openDb()
      .then((db) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(keyName);

        request.onsuccess = () => {
          resolve(`Key "${keyName}" successfully deleted.`);
        };

        request.onerror = () => {
          reject(`Error deleting key "${keyName}".`);
        };
      })
      .catch((error) => {
        reject(`Failed to open database: ${error}`);
      });
  });
}

// Update data in IndexedDB
export function updateIndexDb(id, newData) {
  return new Promise((resolve, reject) => {
    openDb().then(db => {
      const transaction = db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);

      const getRequest = store.get(id);

      getRequest.onsuccess = (event) => {
        const record = event.target.result;

        if (!record) {
          reject('Record not found to update');
          return;
        }

        // Merge old data with new data
        const updatedData = {
          ...JSON.parse(record.jsonData),
          ...newData,
        };

        // Save the updated data back to the store
        const updateRequest = store.put({ id, jsonData: JSON.stringify(updatedData) });

        updateRequest.onsuccess = () => {
          // Notify success and reload the data
          resolve(updatedData);
        };

        updateRequest.onerror = () => {
          reject('Error updating data');
        };
      };

      getRequest.onerror = () => {
        reject('Error fetching record to update');
      };
    }).catch(err => reject('Error opening IndexedDB: ' + err.message));
  });
}
