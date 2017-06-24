package io.zipcoder.nicequotes.model;


public class Quote {

    private String words;
    private String author;

    public Quote(String words, String author) {
        this.words = words;
        this.author = author;
    }

    public String getWords() {
        return words;
    }

    public void setWords(String words) {
        this.words = words;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

}
