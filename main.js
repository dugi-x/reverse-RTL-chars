function reverseRTLchars(text){
	//Hebrew U+0590 to U+05FF
  //Arabic U+0600 to U+06FF
	return text.replace(/([\u0590-\u06FF]+.)+/g, function(m){
		m = m.split('').reverse();
		if(/[^\u0590-\u06FF]/.test(m[0])){
			m.push(m.shift())
		} 
		return m.join('');
	})
}
