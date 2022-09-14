<-- INSERT !-->
CREATE  OR ALTER PROCEDURE insertEmployee(
 
@Code VARCHAR(255),
    @Name        VARCHAR(255),
	@Job         VARCHAR(255),
    @Salary         int,
	@Department       VARCHAR(255)
	  
	  )

AS
BEGIN

    BEGIN
        INSERT INTO Employee 
		(
		   Code,    
	        Name,   
			  Job, 
			 Salary ,
			Department)
			Values(
			 @Code,
			@Name,
			@Job,
			@Salary,
			@Department)
		
	END
	END

<--Update !->
CREATE PROCEDURE updateEmployee(
@Id int ,  
@Code VARCHAR(255),
    @Name        VARCHAR(255),
	@Job         VARCHAR(255),
    @Salary         int,
	@Department       VARCHAR(255)
	  
	  )

AS
BEGIN

    BEGIN
        UPDATE Employee SET 
		   Code = @Code,
	        Name=@Name,
			  Job=@Job,
			 Salary=@Salary,
			Department=@Department
			      
	       WHERE Id= @Id
	
    END
	END

<--DELETE! -->
	CREATE PROCEDURE deleteEmployee(
@Id int   

	  
	  )

AS
BEGIN
	      
	     DELETE FROM Employee  WHERE Id= @Id
	
   
	END
   