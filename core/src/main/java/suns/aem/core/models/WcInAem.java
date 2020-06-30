package suns.aem.core.models;
import org.apache.sling.api.SlingHttpServletRequest;
import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.settings.SlingSettingsService;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;

import java.util.Optional;
import javax.inject.Inject;

@Model(adaptables = SlingHttpServletRequest.class)
public class WcInAem
{

    @Inject
    SlingHttpServletRequest request;

    @PostConstruct protected void init()
    {
        String url = request.getRequestPathInfo().getResourcePath();

        request.setAttribute("WcInAem.html", "ZZZZZZZZZZZZ"+ url );
    }
    public String getHtml()
    {
        String ret = (String)request.getAttribute("WcInAem.html");
        if( null != ret )
        {   request.setAttribute("WcInAem.html", null );
            return ret;
        }
        return null;
    }
}