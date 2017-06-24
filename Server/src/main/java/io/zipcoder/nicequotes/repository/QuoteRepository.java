package io.zipcoder.nicequotes.repository;

import io.zipcoder.nicequotes.model.Quote;
import org.springframework.data.repository.CrudRepository;

public interface QuoteRepository extends CrudRepository<Quote, Long> {

}
