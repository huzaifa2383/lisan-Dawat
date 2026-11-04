LISAAN UD DAWAT TRANSLITERATION - GITHUB PAGES

FILES
- index.html: website
- dictionary.csv: your supplied 8,384-entry dictionary export
- firestore.rules: secure Firestore rules (apply in Firebase Console)
- manifest.webmanifest and sw.js: installable/PWA support

IMPORTANT: This is a static GitHub Pages website. GitHub Pages does not run PHP.
The dictionary is stored in the separate Firestore collection `dictionary_words`.
The attendance collections are not used or changed.

PART 1 - CREATE THE GITHUB WEBSITE
1. Sign in to GitHub.
2. Create a NEW repository, for example: lisaan-transliteration
3. Choose Public and create it.
4. Open the repository and choose Add file > Upload files.
5. Extract this ZIP on your computer first. Upload the FILES inside the folder (not the ZIP itself):
   index.html, dictionary.csv, firestore.rules, manifest.webmanifest, sw.js, README.txt
6. Commit changes to the main branch.
7. Open Settings > Pages.
8. Under Build and deployment choose Deploy from a branch.
9. Select Branch: main and Folder: / (root), then Save.
10. Your website will be at https://YOUR-GITHUB-USERNAME.github.io/lisaan-transliteration/

PART 2 - FIREBASE SETUP (ONE TIME)
1. Open https://console.firebase.google.com/ and choose project: madrasa-attendance-47e69
2. Open Firestore Database. If it has not been created, create the database.
3. Open the Rules tab. IMPORTANT: do NOT replace your existing attendance rules. Merge the two `match` blocks from firestore.rules in this package inside your existing `match /databases/{database}/documents { ... }` block, before its closing brace. Keep all existing attendance rules unchanged, then Publish. If you are unsure, send me your current Firestore Rules text before changing anything.
   The supplied rules add public read access for dictionary_words and admin-only writes; dictionary_admins documents are readable only by the matching signed-in user and cannot be written from the website.
4. Open Authentication > Get started > Sign-in method. Enable Email/Password.
5. Open Authentication > Users > Add user. Create the admin email and password you will use.
6. Copy the new user's UID from the Users page.
7. Open Firestore Database > Data. Create collection `dictionary_admins`.
8. Set the document ID to the exact UID copied above. Add a field `role` (string) with value `admin`.
   Do NOT make the dictionary_admins collection publicly writable.
9. Open your GitHub Pages website, click Admin, sign in with that email/password.
10. Open Import CSV, choose dictionary.csv, and click Import CSV to shared dictionary. Keep the page open until it says Done.
   Import writes in batches; if interrupted, run it again. Matching IDs are safely overwritten.

HOW IT WORKS
- Visitors can search and use the shared dictionary without signing in.
- Only an approved Firebase user whose UID has a document in dictionary_admins can add/edit/delete/import.
- New admin accounts created from the website are NOT automatically approved. An owner must add their UID document in Firebase Console.
- This uses the same Firebase project config as your attendance app but stores words in dictionary_words only.
- Keep your Firebase rules as supplied. Do not use open write rules such as allow read, write: if true.

NOTE
Firebase may have usage limits and billing settings. The app itself and GitHub Pages are free to host; avoid enabling paid services unless you intentionally choose to.
