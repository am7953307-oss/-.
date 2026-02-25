دليل نشر موقع "دليل العمرة"

هذا المستودع يحتوي على ملفات الموقع (HTML, CSS, JS). أدناه طريقتان سريعتان للحصول على رابط دائم (URL) يمكنك مشاركته أو نشره على Google.

1) GitHub Pages (مقترح، مجاني وسهل)

- تهيئة محليّة (إذا لم يكن لديك مستودع Git محلي):

```bash
cd path/to/htlm
git init
git add .
git commit -m "Initial commit"
```

- أنشئ مستودعًا جديدًا على GitHub (يدويًا عبر الموقع) ثم اربطه ودفع التغييرات:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

- تفعيل GitHub Pages:
  - افتح صفحة المستودع على GitHub → Settings → Pages.
  - تحت Source اختر branch `main` و folder `/ (root)` ثم اضغط Save.
  - بعد ثوانٍ سيظهر لك رابط مثل: `https://YOUR_USERNAME.github.io/YOUR_REPO/` — هذا هو الرابط الدائم.

ملاحظة: إذا أردت، أستطيع تجهيز أوامر `gh` (GitHub CLI) لإنشاء المستودع أوتوماتيكيًا، لكن سأحتاج إذن منك لتشغيلها محليًا أو بيانات `gh`.

2) Netlify (سهل، يدعم السحب والإفلات أو الربط مع Git)

- الطريقة السريعة (بدون Git):
  1. ضغط مجلد `htlm` إلى ملف ZIP.
  2. سجل دخول إلى https://app.netlify.com/ (مجاناً) → Sites → New site from drag & drop → اسحب ملف ZIP وسيتم نشره.
  3. ستحصل على رابط فرعي مثل `https://some-name.netlify.app`، يمكنك تغيير النطاق لاحقًا.

- الطريقة عبر Git (يعمل تلقائيًا عند كل دفع Push):
  1. اربط حساب Netlify مع GitHub واختر المستودع.
  2. اختر الفرع `main` واضغط Deploy.
  3. ستتلقى رابطًا دائمًا بعد انتهاء النشر.

روابط مفيدة:
- رابط الصورة المباشر (خريطة الكعبة): https://i.ibb.co/n8zMp2tk/A-3aesthetic-aerial-wide-angle-digitally-rendere-1.png

ماذا أستطيع أن أفعل الآن؟
- أجهز أوامر `gh` وأُرشدك لتشغيلها محليًا (لإنشاء المستودع ودفع الملفات تلقائياً).
- أجهز ملف ZIP هنا وأرشدك لرفعها إلى Netlify.
- أو أقدّم تعليمات مفصّلة بالصور (خطوة بخطوة) للنشر عبر GitHub Pages.

اختر الإجراء الذي تريده وسأكمل الخطوات.