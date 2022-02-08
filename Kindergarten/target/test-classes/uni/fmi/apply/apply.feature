Feature: Kindergarten application

  Scenario Outline: Kindergarten application
    Given Kid applies for kindergarten
    When Entered kids name: "<Kid name>"
    And Has working parents: "<Working parents>"
    And has disability: "<Has disability>"
    And has twin: "<Has twin>"
    And has sibling: "<Has sibling>"
    And clicks on the application button
    Then a message pops up: "<Message>"

    Examples: 
      | Kid name  | Working parents | Has disability  | Has twin | Has sibling | Message | 
      | Gencho    | 2               | true            | true     | true        | Applied successfuly! Advantage points: 6|
      | Gencho    | 1               | true            | true     | true        | Applied successfuly! Advantage points: 5|
      | Gencho    | 0               | true            | true     | true        | Applied successfuly! Advantage points: 4|
      |           | 2               | true            | true     | true        | Please enter name!                      |
      | Gencho    | 1               | false           | true     | true        | Applied successfuly! Advantage points: 3|
      | Gencho    | 0               | false           | false    | true        | Applied successfuly! Advantage points: 1|