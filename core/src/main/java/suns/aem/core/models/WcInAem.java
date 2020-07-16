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

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import javax.inject.Inject;

import ua_parser.Parser;
import ua_parser.Client;
@Model(adaptables = SlingHttpServletRequest.class)
public class WcInAem
{

    @Inject
    SlingHttpServletRequest request;

    @PostConstruct protected void init()
    {
        String url = request.getRequestPathInfo().getResourcePath();
        String userAgent = "" + request.getHeader("User-Agent" );
        try
        {   Parser uaParser = new Parser();
            Client c = uaParser.parse(userAgent);
            System.out.println(c.userAgent.family); // => "Mobile Safari"
            System.out.println(c.userAgent.major);  // => "5"
            System.out.println(c.userAgent.minor);  // => "1"


            String browser = c.userAgent.family.toLowerCase();
            float version = Float.parseFloat( c.userAgent.major )
            ,       minor = Float.parseFloat( c.userAgent.minor );
            boolean isWebkit  = browser.contains("chrome"   )
            ,       isChrome  = browser.contains("chrome"   )
            ,       isFirefox = browser.contains("firefox"  )
            ,       isSafari  = browser.contains("safari"   )
            ,       isOpera   = browser.contains("opera"    )
            ,       isEdge    = browser.contains("edge"     );
            boolean hasModule
                    =  (  version >= 16   && isEdge )
                    || (  version >= 60   && isFirefox  )
                    || (  version >= 61   && isChrome   )
                    || (  version >= 11   && isSafari   )
                    || (  version >= 48   && isOpera    )
                    ;
            boolean hasWebComponent
                    =  (  version >= 18   && isEdge		)
                    || (  version >= 63   && isFirefox	)
                    || (  version >= 67   && isChrome	)
                    || (  version >= 12.1 && isSafari	)
                    || (  version >= 58   && isOpera	)
                    ;
            // wcmmode=disabled or debugClientLibs=true or debug=true
            String build =  (   hasParameter( request, "wcmmode", "disabled")
                            ||  hasParameter( request, "debugClientLibs", "true")
                            ||  hasParameter( request, "debug", "true")
                            )
                            ? "esm-debug"
                            : (hasModule && hasWebComponent)
                                ? "esm-unbundled"
                                : "es5-bundled";
            String bundleOverride = request.getParameter("bundle");
            if( null != bundleOverride )
                build = bundleOverride;

            ResourceResolver res = request.getResourceResolver();
            Resource r =  res.getResource("/apps/wc-in-aem/clientlibs/clientlib-site/resources/build/"+build+"/index.html/jcr:content");
            try( InputStream is = r.adaptTo( InputStream.class ) )
            {
                String s = new String( is.readAllBytes(), StandardCharsets.UTF_8 );
                request.setAttribute("WcInAem.html", "browser="+browser+" version="+version+" minor="+minor+" build="+build+" ================== "+ s );
            }catch( IOException e )
                { e.printStackTrace(); }
        }catch( IOException e )
            { e.printStackTrace(); }
    }
    boolean hasParameter( SlingHttpServletRequest request, String parameter, String value )
    {   String p = request.getParameter( parameter);
        return p!=null && value.equals(p);
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