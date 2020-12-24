USE striker;

insert into SCHOOLS(NAME, ADDRESS)
values(N'Unknow', N'Unknow'), (N'Đại học Bách khoa Hà Nội', N'Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội');

insert into INFORS(BIRTHDAY, SEX, FIRST_NAME, LAST_NAME, SCHOOL_ID)
select str_to_date('18-01-2000', '%d-%m-%Y'), 'male', N'Đạt', N'Lê Trọng', s.ID
from SCHOOLS as s
where lower(s.NAME) like N'đại học bách khoa hà nội'
limit 1;

insert into ACCOUNTS(PASSWORD, EMAIL, AUTHORITY, INFOR_ID)
select 'dat12345678', 'dat@gmail.com', 'ADMIN', INFORS.ID
from INFORS
where INFORS.BIRTHDAY = str_to_date('18-01-2000', '%d-%m-%Y')
limit 1;

insert into long_scheduler(ACCOUNT_ID, END_TIME, START_TIME, TITLE, DECRIPTION, OFFICE, TYPE, PRIORITY, COMPLETE)
values(1, '2020-12-30', '2020-11-30', 'Test', 'No Decription', 'Personal', 'Project', 'High', "false");

insert into short_scheduler(ACCOUNT_ID, START_TIME, END_TIME, TITLE, DECRIPTION, OFFICE, TYPE, PRIORITY, REPEAT_ROLE, COMPLETE, location)
values(1, '2020-11-30 10:00:00', '2020-11-30 10:45:00', 'Short Event', 'No Decription', 'Personal', "Homework", "High", "FREQ=DAILY;INTERVAL=1;COUNT=2", "false", 'home');