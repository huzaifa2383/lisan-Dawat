LISAAN UD DAWAT TRANSLITERATION — GITHUB PAGES + FIREBASE

YOUR PROJECT
Firebase project ID: lisaan-ud-dawat
GitHub repository: huzaifa2383/lisan-Dawat
Expected website: https://huzaifa2383.github.io/lisan-Dawat/

FILES TO UPLOAD TO THE ROOT OF YOUR EXISTING GITHUB REPOSITORY
- index.html                 Website (already connected to lisaan-ud-dawat Firebase)
- dictionary.csv             Supplied dictionary export (8,384 entries)
- firestore.rules            Complete rules for the SEPARATE Lisaan Firebase project
- manifest.webmanifest       PWA metadata
- sw.js                      Service worker
- README.txt                 These instructions

IMPORTANT: Extract the ZIP and upload these files themselves, not the ZIP. They should appear beside each other in the repository root. Replacing index.html and uploading the other files is safe for the attendance website because this is a separate repository and Firebase project.

PART 1 — UPDATE YOUR EXISTING GITHUB REPOSITORY
1. Open https://github.com/huzaifa2383/lisan-Dawat
2. Choose Add file > Upload files.
3. Upload all six files listed above from this folder. If GitHub asks whether to replace index.html or other existing files, confirm the replacement.
4. Commit directly to the main branch.
5. Wait for Actions > pages-build-deployment to show a green check.
6. Open https://huzaifa2383.github.io/lisan-Dawat/ and hard-refresh with Ctrl+Shift+R.

PART 2 — FIRESTORE RULES (NEW PROJECT ONLY)
You have already created the separate Firebase project `lisaan-ud-dawat` and the `dictionary_admins` document for your admin UID.
1. Open Firebase Console > project `lisaan-ud-dawat` > Firestore Database > Rules.
2. Replace the rules in THIS NEW PROJECT with the complete contents of firestore.rules.
3. Click Publish.
Do not paste these rules into the Madrasa Attendance Firebase project. Do not change the attendance project's rules.

PART 3 — AUTHORISED DOMAIN
1. In Firebase Console, open Authentication > Settings > Authorized domains.
2. Add `huzaifa2383.github.io` if it is not already listed. Do not include https:// or a path.

PART 4 — IMPORT THE DICTIONARY
1. Open the published GitHub Pages website.
2. Click Admin.
3. Sign in with the email/password user you created in Firebase Authentication.
4. Confirm the admin panel appears. The user must have a document in dictionary_admins whose document ID is their exact Firebase UID.
5. Open the Import CSV tab, choose dictionary.csv from your computer, and click Import CSV to shared dictionary.
6. Keep the page open until the import reports completion. It imports in batches. If it stops partway, you may safely run the same import again because the CSV IDs are used as document IDs.

HOW IT WORKS
- Anyone can read and search dictionary_words without signing in.
- Only a signed-in user whose UID has an approval document in dictionary_admins can add, edit, delete, or import words.
- The website uses Firebase project `lisaan-ud-dawat` only. It does not connect to the attendance project.
- Firebase web configuration values in index.html are public client configuration, not admin passwords or private service-account keys. Never put a service-account private key in this website.

COST
GitHub Pages and Firebase Spark have free usage tiers. Stay on Spark and monitor Firebase usage. Do not enable paid services unless you intentionally choose to.
