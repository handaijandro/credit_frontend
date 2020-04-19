import pandas as pd
import csv
import json
from lesson import Lesson

credit_csv_df = pd.read_csv('camelot-page-19-table-1.csv', delimiter=',')

data = credit_csv_df.values.tolist()

lessons = []
# create Lesson object
id = 1
for d in data:
    l = Lesson(d, id)
    id += 1
    # for information system course
    lessons.append(l.to_representation(Lesson.INFORMATION_COURSE))


with open('lesson.json', 'w') as f:
    f.write(json.dumps(lessons))
