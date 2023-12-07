import numpy as np

alpha = np.array([500, 400, 200])
beta = np.array([5.3, 5.5, 5.8])
gamma = np.array([0.004, 0.006, 0.009])

PD = 800
Delp = 10

# Error in Delp is set to a high value

lambda_val = float(input('Enter estimated value of Lambda = '))

print('')

print(' Lambda P1 P3 DP...grad Delambda')

iter = 0
DelP = 1  # Initialize DelP

while abs(DelP) > 0.001:
    iter += 1

    P = (lambda_val - beta) / (2 * gamma)

    DelP = PD - np.sum(P)

    J = np.sum(1 / (2 * gamma))  # Gradient sum

    Delambda = DelP / J
    print([lambda_val, P[0], P[1], P[2], DelP, J, Delambda])
    lambda_val += Delambda

totalcost = np.sum(alpha + beta * P + gamma * P**2)
print(f'Total fuel cost will be consumed: {totalcost} $/hour')
