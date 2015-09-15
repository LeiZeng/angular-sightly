package com.mycompany.myproject.components;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables=SlingHttpServletRequest.class)
public class Header {

	@Inject
	private String pageTitle;
	
	@Inject @Optional
	private String subTitle; // optional needed here, because it might be empty
	
	public String title;
	
	@PostConstruct
	public void doWork() {
		if (StringUtils.isNotBlank(subTitle)) {
			title = subTitle + " " + pageTitle;
		} else {
			title = pageTitle;
		}
	}
	
}
