package com.mycompany.myproject.components;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;

import com.adobe.cq.address.api.AddressException;
import com.adobe.cq.address.api.location.Coordinates;
import com.adobe.cq.address.api.location.GeocodeProvider;

@Model(adaptables=Resource.class)
public class LatLongComponent {

	public static final String DEFAULT = "Hoogoorddreef 54a, Amsterdam ZuidOost, Netherlands";
	
	@Inject @Named("address") @Default(values=DEFAULT)
	protected String addressDescription;
	
	@Inject // OSGi service
	private GeocodeProvider geocode;
	
	// will be called from the Sightly component
	public Coordinates coordinates;
	
	@PostConstruct
	public void doWork() throws AddressException {
		coordinates = geocode.geocode(addressDescription);
	}
	
}
