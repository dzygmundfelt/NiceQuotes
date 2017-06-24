package io.zipcoder.nicequotes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Quote {

    @Id
    @GeneratedValue
    @Column(name="QUOTE_ID")
    private Long id;

    @Column(name="AUTHOR")
    private String author;

    @Column(name="WORDS")
    private String words;

    public Quote() {}

    public Quote(String author, String words) {
        this.author = author;
        this.words = words;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
