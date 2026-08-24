import { useState, useEffect } from 'react';

export const useTyped = (phrases: string[], typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setText(currentPhrase.substring(0, text.length - 1));
            }, deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText(currentPhrase.substring(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === currentPhrase) {
            timeout = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delay]);

    return text;
};
