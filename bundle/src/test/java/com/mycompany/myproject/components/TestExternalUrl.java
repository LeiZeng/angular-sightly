package com.mycompany.myproject.components;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;
import junit.framework.Assert;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.runners.MockitoJUnitRunner;

import com.day.cq.wcm.api.Page;


@RunWith(MockitoJUnitRunner.class)
public class TestExternalUrl {

	@Spy
	private ExternalUrl externalUrl = new ExternalUrl(null);
	
	@Mock
	private Page page;
	
	@Before
	public void setup() {
		String path = "/content/adaptTo/example";
		when(page.getPath()).thenReturn(path);

		externalUrl.currentPage = page;

		doReturn("http://localhost:4502/adaptTo").when(externalUrl).externalize(path);
		
	}
	
	@Test
	public void testWhenNoPathParameterIsSpecified() {
		
		externalUrl.doWork();
		
		Assert.assertNotNull(externalUrl.absoluteUrl);
		
	}
	
	@Test
	public void testWhenPathParameterIsSpecified() {
		String path = "/content/adaptTo2014/examples";
		String extUrl = "http://localhost:4502/adaptTo2014";

		doReturn(extUrl).when(externalUrl).externalize(path);
		
		externalUrl.path = path;
		externalUrl.doWork();
		
		Assert.assertNotNull(externalUrl.absoluteUrl);
		Assert.assertEquals(extUrl, externalUrl.absoluteUrl);
		
	}
	
}
