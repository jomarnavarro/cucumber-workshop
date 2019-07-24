package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features/merchant_dashboard.feature"},
        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/md.json",
        "html:target/poc-html"},
        glue = {"hooks",
                "steps"})
public class RFCRunner {
}
