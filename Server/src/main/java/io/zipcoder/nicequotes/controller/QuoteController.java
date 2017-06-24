package io.zipcoder.nicequotes.controller;

import io.zipcoder.nicequotes.model.Quote;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RequestMapping("/quotes")
@RestController
@CrossOrigin("http://localhost:8100")
public class QuoteController {

    @RequestMapping("/")
    public ResponseEntity<ArrayList<Quote>> getAllQuotes() {
        Quote quote = new Quote("Come on people, now. Smile on your brother. Everybody get together, etc.");
        Quote another = new Quote("We're born to live a life and die. Life's so damn hard, man I wonder why.");
        ArrayList<Quote> quotes = new ArrayList<>();
        quotes.add(quote);
        quotes.add(another);
        return new ResponseEntity<>(quotes, HttpStatus.OK);
    }

}
