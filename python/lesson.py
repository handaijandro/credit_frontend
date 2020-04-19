import numpy as np

class Lesson:
    CIRCLE = '◎'
    # 単位タイプ
    sbj_type = {}
    TYPE_A = 1
    TYPE_B = 2
    TYPE_C = 3
    TYPE_D = 4
    TYPE_E = 5
    TYPE_F = 6
    TYPE_G = 7
    TYPE_COMPULSORY = 8  # 必修
    TYPE_ELECTIVE = 9  # 専門教養教育科目
    TYPE_NONE = 10  # タイプなし
    TYPE_CHOICES = (
        (TYPE_A, 'A'),
        (TYPE_B, 'B'),
        (TYPE_C, 'C'),
        (TYPE_D, 'D'),
        (TYPE_E, 'E'),
        (TYPE_F, 'F'),
        (TYPE_G, 'G'),
        (TYPE_E, 'E'),
        (TYPE_COMPULSORY, '必修'),
        (TYPE_ELECTIVE, '専門教養教育科目'),
        (TYPE_NONE, 'なし'),
    )
    ELECTRICAL_COURSE = 1
    ELECTRONIC_COURSE = 2
    COMMUNICATION_COURSE = 3
    INFORMATION_COURSE = 4

    def __init__(self, src, id):
        self.id = id
        self.subject_name = str(src[2]) if isinstance(src[2], str) else None
        self.credit = None if np.isnan(src[3]) else src[3]
        self.sbj_type[self.ELECTRICAL_COURSE] =  self._convert_subject_type(src[4])
        self.sbj_type[self.ELECTRONIC_COURSE] =  self._convert_subject_type(src[5])
        self.sbj_type[self.COMMUNICATION_COURSE] =  self._convert_subject_type(src[6])
        self.sbj_type[self.INFORMATION_COURSE] =  self._convert_subject_type(src[7])
        self.remark = src[13] if isinstance(src[13], str) else None


    def _convert_subject_type(self, type_src):
        if type_src == self.CIRCLE:
            return self.TYPE_COMPULSORY
        elif type_src == 'A':
            return self.TYPE_A
        elif type_src == 'B':
            return self.TYPE_B
        elif type_src == 'C':
            return self.TYPE_C
        elif type_src == 'D':
            return self.TYPE_D
        elif type_src == 'E':
            return self.TYPE_E
        elif type_src == 'F':
            return self.TYPE_F
        elif type_src == 'G':
            return self.TYPE_G
        else:
            return self.TYPE_NONE
    
    # course: Int
    def get_type_label(self, course):
        return self.TYPE_CHOICES[self.sbj_type[course]][1]
    def get_type_value(self, course):
        return self.TYPE_CHOICES[self.sbj_type[course]][0]
    
    def to_representation(self, course):
        lesson_obj = {
            'id': self.id,
            'subject_name': self.subject_name,
            'credit': self.credit,
            'remark': self.remark,
            'subject_type_label': self.get_type_label(course),
            'subject_type': self.get_type_value(course)
        }
        return lesson_obj
