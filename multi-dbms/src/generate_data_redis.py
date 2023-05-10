import redis
import random
import datetime

r = redis.Redis(host='localhost', port=6379, db=0)


def random_date(start, end):
    return start + datetime.timedelta(
        seconds=random.randint(0, int((end - start).total_seconds())),
    )


def random_date_str(start, end):
    return random_date(start, end).strftime('%Y-%m-%d')


def random_int(start, end):
    return random.randint(start, end)


def random_str():
    return 'str' + str(random.randint(1, 100))


for i in range(1, 7001):
    r.hmset('Room:' + str(i), {
        'property_id': random_int(1, 1000),
        'property_name': random_str(),
        'price': random_int(500000, 10000000),
        'day_start': random_date_str(datetime.datetime(2018, 1, 1), datetime.datetime(2018, 12, 31)),
        'day_end': random_date_str(datetime.datetime(2018, 1, 1), datetime.datetime(2018, 12, 31))
    })

for i in range(1, 14000):
    r.zadd('Accommodations:' + str(random_int(1, 7001)), {random_int(1, 18000): random_int(1, 5)})

for i in range(1, 7001):
    r.hmset('Search:' + str(i), {
        'city': random_str(),
        'day_start': random_date_str(datetime.datetime(2018, 1, 1), datetime.datetime(2018, 12, 31)),
        'day_end': random_date_str(datetime.datetime(2018, 1, 1), datetime.datetime(2018, 12, 31)),
        'adults': random_int(1, 10),
        'children': random_int(1, 10),
        'room': random_int(1, 10),
        'is_looking_for_house_and_apartment': random.choice([0, 1]),
        'is_working': random.choice([0, 1])
    })