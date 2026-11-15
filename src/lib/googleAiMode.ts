export const GOOGLE_AI_MODE_SEARCH_URL = 'https://www.google.com/search?udm=50&q=';

export const GOOGLE_AI_IMPORT_PROMPT = 'Lütfen görseldeki ya da belgedeki metni incele. Metindeki tüm Fince kelimeleri cümle içindeki çekim eklerinden (durum ekleri, çoğul ekleri vb.) arındırarak yalın hallerine (perusmuoto) getir. Eğer metin Türkçe ise, tüm Türkçe kelimeleri de yalın hallerine ayıkla. Ardından, elde ettiğin bu yalın kelimelerin çevirilerini yap ve sadece \'Fince - Türkçe\' formatında, alt alta yeni bir liste olarak yaz. Başka hiçbir açıklama veya cümle ekleme, sadece listeyi kopyala yapıştır yapabileceğim şekilde ver.';

export function buildTranslationPrompt(wordsText: string): string {
  const trimmed = wordsText.trim();
  if (!trimmed) return '';
  return [
    'Lütfen aşağıdaki metni incele. Metindeki Fince kelimeleri cümle içindeki çekim eklerinden (durum ekleri, çoğul ekleri vb.) arındırarak yalın hallerine (perusmuoto) getir. Eğer metin Türkçe ise, Türkçe kelimeleri de yalın hallerine ayıkla. Ardından, elde ettiğin bu yalın kelimeleri sadece \'Fince - Türkçe\' formatında, alt alta yeni bir liste olarak yaz. Başka hiçbir açıklama veya cümle ekleme, sadece listeyi ver.',
    '',
    'Metin:',
    trimmed,
  ].join('\n');
}
