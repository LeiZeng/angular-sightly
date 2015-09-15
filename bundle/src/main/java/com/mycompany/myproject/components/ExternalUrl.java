package com.mycompany.myproject.components;

import javax.inject.Inject;
import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.day.cq.commons.Externalizer;
import com.day.cq.wcm.api.Page;

@Model(adaptables = SlingHttpServletRequest.class)
public class ExternalUrl {

	@Inject
	private Externalizer externalizer;
	
	private SlingHttpServletRequest request;
	
	@Inject @Optional
	protected String path; // specified via @ path = currentPage.path
	
	@Inject
	protected Page currentPage; // injected by default via bindings
	
	public String absoluteUrl; // called via ${externalizer.absoluteUrl}
	
	public ExternalUrl(SlingHttpServletRequest request) {
		this.request = request;
	}
	
	@PostConstruct
	public void doWork() {
		String relPath = currentPage.getPath();
		if ( path != null) {
			relPath = path;
		}
		absoluteUrl = externalize(relPath);
	}
	
	protected String externalize(String path) {
		return externalizer.absoluteLink(request, "http", path);
	}
	
}
