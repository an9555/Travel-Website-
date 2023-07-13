function googleTranslateElementInit(){
    new google.translate.TranslateElement({
        defaultLanguage: 'en',
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,zh-CN,zh-TW,ja,ko',
        layout:google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true},
        'google_translate_element');
};