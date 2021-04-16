from decimal import *

point1 = [Decimal('5148211.05761632'), Decimal('6288288.69549710')]
point3 = [Decimal('5148207.62656383'), Decimal('6288313.12177964')]
point4 = [Decimal('5148197.01030417'), Decimal('6288301.08444061')]
point2 = [Decimal('5148221.67387598'), Decimal('6288300.73283613')]

points = [point1, point2, point3, point4]

def find_area(points):
    sum1 = Decimal('0')
    sum2 = Decimal('0')
    for i in range(3):
        sum1 += points[i][0]*points[i+1][1]
        sum2 += points[i+1][0]*points[i][1]

    modulOfSum = sum1 + points[3][0] * points[0][1] - sum2 - points[0][0] * points[3][1]
    modulOfSum = abs(modulOfSum)
    result = Decimal('0.5') * modulOfSum

    return result

print(find_area(points))

