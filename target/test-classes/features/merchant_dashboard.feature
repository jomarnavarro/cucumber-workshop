#Author: omar.navarro@payclip.com
Feature: RFC
  As an Admin User
  I want to create and update my Tax Code (RFC)

  Scenario: Crear un RFC Nuevo
    Given Nuevo Usuario esta registrado
    And Usuario no tiene RFC
    When Usuario se logea a la MD
    And Usiario crea un nuevo RFC
    Then Mensaje de confirmation desplegado
    And debe existir el RFC en la pantalla de facturas
    And debe existir en la DB

  Scenario: Editar RFC
    Given amin_user already have an RFC
    And Usuario se logea a la MD
    When he edit the existing RFC
    Then Mensaje de confirmation desplegado
    And debe existir el RFC en la pantalla de facturas
    And debe existir en la DB

  Scenario: Intentar eliminar el RFC
  Given amin_user already have an RFC
    And Usuario se logea a la MD
    When he tries to eliminate the existing RFC
    Then Mensaje de error es desplegado
    And debe existir el RFC en la pantalla de facturas
    And debe existir en la DB
  
#
  #Scenario: Crear RFC invalido
#
  #Scenario: Editar RFC invalido
#
  #Scenario: Editar con RFC Vacio
#
  #@tag1
  #Scenario: Title of your scenario
    #Given I want to write a step with precondition
    #And some other precondition
    #When I complete action
    #And some other action
    #And yet another action
    #Then I validate the outcomes
    #And check more outcomes
#
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
