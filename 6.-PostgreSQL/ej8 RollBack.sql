-- Comienza la transacción
BEGIN;

-- Elimina el libro con BookID = 103
DELETE FROM Books
WHERE book_id = 103;

-- Si el test es correcto, comenta la transacción para crear el cambio permanentemente
COMMIT;

-- Si quieres revertir el cambio inmediatamente, resetea la transacción con "ROLLBACK"
ROLLBACK;