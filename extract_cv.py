from pypdf import PdfReader
import os

pdf_path = r'd:/Personnels/JOBS/CV_updated_2025/FR/__ALL__/CV_Yacouba_KONE_Data_Scientist.pdf'
output_path = r'd:/portfolio/cv_content.txt'

os.makedirs(os.path.dirname(output_path), exist_ok=True)

reader = PdfReader(pdf_path)
print(f"Nombre de pages: {len(reader.pages)}")

with open(output_path, 'w', encoding='utf-8') as f:
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        f.write(f"=== PAGE {i+1} ===\n")
        f.write(text)
        f.write("\n\n")

print(f"Extrait sauvegardé dans: {output_path}")
