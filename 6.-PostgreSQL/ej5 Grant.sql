CREATE ROLE bookstore_assistant;
GRANT SELECT, INSERT, UPDATE ON Books TO bookstore_assistant;

/*Después, dar los privilegios a su cuenta de email para validar la operación: */
GRANT bookstore_assistant TO martin@localhost;