def add(students):
    id=int(input("Enter student's ID: "))

    while (True): 
        exists=False

        for student in students:
            if (student["ID"]==id):
                exists=True
                id=int(input("Student with same ID number already exists! Enter a new ID number: "))
        
        if (not exists):
            break

    name=str(input("Enter student's name: "))
    age=int(input("Enter student's age: "))

    while (age<0 and age>100):
        score=int(input("Age must be between 0 and 100: "))
    
    score=int(input("Enter student's current score in percentage (0 to 100): "))

    while (score<0 and score>100):
        score=int(input("Score must be between 0 and 100: "))

    gpa=float((score*4)/100)

    new_student={"ID": id, "name": name, "age": age, "score": score, "gpa": gpa}
    students.append(new_student)

    return students



def update(students):
    id=int(input("Enter student's ID number: "))

    for student in students:
        if (student["ID"]==id):
            print("Student record exists!")

            check=str(input("Update name? (y/n): "))
            
            if (check=="y"):
                name=str(input("Enter updated name: "))
                student["name"]=name

            check=str(input("Update age? (y/n): "))
            
            if (check=="y"):
                age=int(input("Enter updated age: "))
                while (age<0 and age>100):
                    age=int(input("Age must be between 0 and 100: "))
                    
                student["age"]=age

            check=str(input("Update score? (y/n): "))
            
            if (check=="y"):
                score=int(input("Enter updated score: "))
                while (score<0 and score>100):
                    score=int(input("Score must be between 0 and 100: "))
                
                gpa=float((score*4)/100)
                student["score"]=score    
                student["gpa"]=gpa

            print("Student record updated!")
            return students
    
    print("Student with the given ID number does not exist!")
        




def remove(students):
    id=int(input("Enter student's ID number: "))

    for student in students:
        if (student["ID"]==id):
            print("Student record exists!")

            students.pop(students.index(student))

            print("Student removed!")
            return
    
    print("Student with the given ID number does not exist!")

def sort(students):
    students = sorted(students, key=lambda student: student["score"])
    print("Students' data sorted!")
    return students

def top(students):
    top_students = sorted(students, key=lambda student: student["score"], reverse=True)
    print("Top students are: ")

    for i in range(5):
        print(i+1, ":", top_students[i])


def report(students):
    for student in students:
        print("----------------------")
        print("ID Number:", student["ID"])
        print("Name:", student["name"])
        print("-SUMMARY-")
        
        if (student["score"]>80):
            print("The student is performing excellent in his/her studies. Keep up the good work!")
        elif (student["score"]>70):
            print("The student is doing well in his/her studies but can do excellent.")
        elif (student["score"]>60):
            print("The student is performing quite average in his/her studies and needs improvements.")
        elif (student["score"]>=50):
            print("The student is performing below the average score in his/her studies and needs significant improvementsz!")
        elif (student["score"]<50):
            print("The student needs to pay a lot of attention towards his/her studies!")

        print("----------------------")

def main():
    students=[]

    while (True): 
        print("Student Management System By Mustafa")
        print("You have the following options:")
        print("1 - Add a new student\n2 - Update a student record\n3 - Remove a student\n4 - Sort students by scores\n5 - List top performing students\n6 - Generate students' summary report\nAny Key - Exit")
        
        choice=str(input("What do you want to do? "))

        if (choice=="1"):
            add(students)
        elif (choice=="2"):
            update(students)
        elif (choice=="3"):
            remove(students)
        elif (choice=="4"):
            sort()
        elif (choice=="5"):
            top(students)
        elif (choice=="6"):
            report(students)
        else:
            break

        print(students)

main()