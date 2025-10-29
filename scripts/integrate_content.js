// اسکریپت اجرا شده توسط Node.js (نه در مرورگر)
const fs = require('fs');
const path = require('path');

const articlesJsonPath = path.join(process.cwd(), 'data', 'articles.json');
const contentDirPath = path.join(process.cwd(), 'data', 'content');
const outputPath = path.join(process.cwd(), 'data', 'final_articles.json'); // خروجی نهایی

function integrateContent() {
    try {
        // ۱. خواندن لیست مقالات (Metadata)
        const articlesData = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf-8'));
        
        const finalArticles = articlesData.map(article => {
            // فرض می‌کنیم نام فایل متنی از روی 'slug' مقاله تعیین می‌شود
            const contentFileName = `${article.slug}.txt`;
            const contentFilePath = path.join(contentDirPath, contentFileName);

            if (!fs.existsSync(contentFilePath)) {
                console.warn(`⚠️ Warning: Content file not found for slug: ${article.slug}`);
                article.content = "محتوای مقاله در دسترس نیست.";
                return article;
            }

            // ۲. خواندن محتوای فایل متنی مرتبط
            const textContent = fs.readFileSync(contentFilePath, 'utf-8');
            
            // ۳. لینک دهی: اضافه کردن محتوا به شیء مقاله
            return {
                ...article,
                content: textContent 
            };
        });

        // ۴. نوشتن آرایه‌ی نهایی در یک فایل JSON جدید
        fs.writeFileSync(outputPath, JSON.stringify(finalArticles, null, 2), 'utf-8');
        console.log(`✅ موفقیت! ${finalArticles.length} مقاله با محتوا ترکیب شد و در ${outputPath} ذخیره گردید.`);

    } catch (error) {
        console.error("❌ خطای اسکریپت:", error.message);
        process.exit(1);
    }
}

integrateContent();