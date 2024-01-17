export type Message = {
   message: Student[],
   success: boolean,
}

export type Student = {
    _id: string,
    firstname: string,
    lastname: string,
    courseNumber: number,
    specialty: string,
    scholarship: string,
    formOfTraining: string,
    grades: Grade[],
    passList: PassList[]
}

export type Grade = {
    number: number,
    date: string,
}

export type PassList = {
    lack: string,
    date: string,
}