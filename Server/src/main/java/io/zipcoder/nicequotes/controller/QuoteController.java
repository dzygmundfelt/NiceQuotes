package io.zipcoder.nicequotes.controller;

import io.zipcoder.nicequotes.model.Quote;
import io.zipcoder.nicequotes.repository.QuoteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RequestMapping("/quotes")
@RestController
@CrossOrigin("http://localhost:8100")
public class QuoteController {

    @Inject
    QuoteRepository qr;

    @RequestMapping("/")
    public ResponseEntity<Iterable<Quote>> getAllQuotes() {
        Iterable<Quote> quotes = qr.findAll();
        return new ResponseEntity<>(quotes, HttpStatus.OK);
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Quote> getQuote(@PathVariable Long id) {
        Quote result = qr.findOne(id);
        if(result ==  null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteQuote(@PathVariable String id) {
        try {
            qr.delete(Long.parseLong(id));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Quote> postQuote(@RequestParam String author, @RequestParam String words) {
        Quote quote = new Quote(author, words);
        qr.save(quote);
        return new ResponseEntity<>(quote, HttpStatus.CREATED);
    }

}
