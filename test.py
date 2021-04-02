answer = []
def solution():
    for i in range(51):
        if i % 2 == 0:
            answer.append(i)
    return answer

print(solution())