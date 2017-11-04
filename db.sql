BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "Subjects" (
	`ID` 	INTEGER PRIMARY KEY AUTOINCREMENT,
	`Code`  TEXT,
	`Name` 	TEXT
);

/*CREATE TABLE IF NOT EXISTS "Courses" (
	`ID` 	INTEGER,
	`CRN`  INTEGER,
	`CourseNumber` 	INTEGER,
	`Room` INTEGER,
	`Section` TEXT,
	`Name` TEXT,
	`StartTime` TEXT,
	`EndTime` TEXT,
	`Days` TEXT,
	`StartDate` Date,
	`EndDate` Date,
	FOREIGN KEY(ID) REFERENCES Subjects(ID)
);*/

CREATE TABLE IF NOT EXISTS "Buildings" (
	`ID` INTEGER PRIMARY KEY AUTOINCREMENT,
	`Name` 	TEXT
);

CREATE TABLE IF NOT EXISTS "ClassRooms" (
	`ID` 	INTEGER PRIMARY KEY AUTOINCREMENT,
	'BuildingID' INTEGER,
	`Number`	INTEGER,
	FOREIGN KEY(BuildingID) REFERENCES Buildings(ID),
	FOREIGN KEY(Number) REFERENCES Courses(Room)
);

END TRANSACTION;