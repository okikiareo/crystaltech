import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    orderBy, 
    limit 
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOQvCr3_kNlO9IWjup0jGITtVDaocx_7I",
    authDomain: "aicrystaltech-dc0db.firebaseapp.com",
    projectId: "aicrystaltech-dc0db",
    storageBucket: "aicrystaltech-dc0db.firebasestorage.app",
    messagingSenderId: "335149714685",
    appId: "1:335149714685:web:896527e8bcc49b593c0294",
    //   measurementId: "G-H9PCQ0889V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function homeLoader() {
    try {
        const promise1Col = collection(db, "testimonials");
        const promise2Col = query(
            collection(db, "blogs"), 
            orderBy("createdAt", "desc"), 
            limit(3)
        );
    
        const promisesReq = [
            getDocs(promise1Col), 
            getDocs(promise2Col)
        ];
       
        const promisesArr = await Promise.all(promisesReq);
        const promisesRes = promisesArr.map((val) => (
            val.docs.map((doc) => ({ 
                id: doc.id, 
                ...doc.data() 
            }))
        ));
            
        return { 
            testimonials: promisesRes[0],
            posts: promisesRes[1], 
        };
    } catch (error) {
        return {
            testimonials: [],
            posts: []
        };
    }
}

export async function blogLoader() {
    try {
        const bCol = query(
            collection(db, "blogs"),
            orderBy("createdAt", "desc"),
        );
        const data = await getDocs(bCol);
        const docs = data.docs.map(doc => (
            { id: doc.id, ...doc.data() }
        ));
        
        return {
            posts: docs
        };
    } catch (error) {
        return {
            posts: []
        };
    }
}


