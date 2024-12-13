export const mockData3 = {
  value: `
    -- Complex Lua script example

    -- Define a table with some data
    local person = {
      name = "John Doe",
      age = 30,
      hobbies = {"reading", "gaming", "coding"}
    }

    -- Function to print person details
    function printPersonDetails(p)
      print("Name: " .. p.name)
      print("Age: " .. p.age)
      print("Hobbies: " .. table.concat(p.hobbies, ", "))
    end

    -- Function to add a hobby
    function addHobby(p, hobby)
      table.insert(p.hobbies, hobby)
    end

    -- Add a new hobby
    addHobby(person, "hiking")

    -- Print the updated person details
    printPersonDetails(person)
  `
};
