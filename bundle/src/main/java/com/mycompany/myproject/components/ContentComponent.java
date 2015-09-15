package com.mycompany.myproject.components;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;

@Model(adaptables=SlingHttpServletRequest.class)
public class ContentComponent {

	@Inject
	private MyCustomPage customPage;
	
	public String title;
	
	@PostConstruct
	public void doWork() {
		title = customPage.getTitle();
	}
	
}
