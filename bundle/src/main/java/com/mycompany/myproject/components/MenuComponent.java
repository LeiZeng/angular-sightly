package com.mycompany.myproject.components;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.day.cq.wcm.api.Page;

@Model(adaptables=SlingHttpServletRequest.class)
public class MenuComponent {


	@Inject @Optional
	private Object subpages;
	
	@Inject
	private Page currentPage;
	
	@Inject
	private String test;
	
	public String returnValue;
	
	@PostConstruct
	public void doWork() {
		if ( subpages != null ) {
			returnValue = "has subpage" + subpages.getClass() + (currentPage.listChildren() != null) + test;
		} else {
			returnValue = "no subpages"+ (currentPage.listChildren() != null) + test;
		}
		
	}
	
}
