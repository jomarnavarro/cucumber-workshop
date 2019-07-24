$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/merchant_dashboard.feature");
formatter.feature({
  "name": "RFC",
  "description": "  As an Admin User\n  I want to create and update my Tax Code (RFC)",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Crear un RFC Nuevo",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Nuevo Usuario esta registrado",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.nuevo_Usuario_esta_registrado()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps.StepDefinitions.nuevo_Usuario_esta_registrado(StepDefinitions.java:12)\n\tat ✽.Nuevo Usuario esta registrado(file:src/test/resources/features/merchant_dashboard.feature:7)\n",
  "status": "pending"
});
formatter.step({
  "name": "Usuario no tiene RFC",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.usuario_no_tiene_RFC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Usuario se logea a la MD",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.usuario_se_logea_a_la_MD()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Usiario crea un nuevo RFC",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.usiario_crea_un_nuevo_RFC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Mensaje de confirmation desplegado",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.mensaje_de_confirmation_desplegado()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir el RFC en la pantalla de facturas",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_el_RFC_en_la_pantalla_de_facturas()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir en la DB",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_en_la_DB()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Editar RFC",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "amin_user already have an RFC",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.amin_user_already_have_an_RFC()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps.StepDefinitions.amin_user_already_have_an_RFC(StepDefinitions.java:54)\n\tat ✽.amin_user already have an RFC(file:src/test/resources/features/merchant_dashboard.feature:16)\n",
  "status": "pending"
});
formatter.step({
  "name": "Usuario se logea a la MD",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.usuario_se_logea_a_la_MD()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he edit the existing RFC",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_edit_the_existing_RFC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Mensaje de confirmation desplegado",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.mensaje_de_confirmation_desplegado()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir el RFC en la pantalla de facturas",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_el_RFC_en_la_pantalla_de_facturas()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir en la DB",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_en_la_DB()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Intentar eliminar el RFC",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "amin_user already have an RFC",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.amin_user_already_have_an_RFC()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps.StepDefinitions.amin_user_already_have_an_RFC(StepDefinitions.java:54)\n\tat ✽.amin_user already have an RFC(file:src/test/resources/features/merchant_dashboard.feature:24)\n",
  "status": "pending"
});
formatter.step({
  "name": "Usuario se logea a la MD",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.usuario_se_logea_a_la_MD()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he tries to eliminate the existing RFC",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_tries_to_eliminate_the_existing_RFC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Mensaje de error es desplegado",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.mensaje_de_error_es_desplegado()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir el RFC en la pantalla de facturas",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_el_RFC_en_la_pantalla_de_facturas()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe existir en la DB",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.debe_existir_en_la_DB()"
});
formatter.result({
  "status": "skipped"
});
});