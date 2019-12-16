# 다리를 지나는 트럭

## 이해

bridge: 다리 위에 있는 트럭을 담아두는 배열

## 계획

1. bridge 위의 트럭 총 무게와 대기 중인 첫번째 트럭의 무게의 합이 weight 이하일 경우 bridge에 push한다.
2. [트럭무게, 다리 위에 머문 시간]을 bridge 배열에 넣는다.
3. 총 진행시간(time)을 1초 추가한다.
4. 이 때 bridge 위 트럭들의 머문 시간을 모두 1초씩 추가한다.
5. 1번부터 반복하여 bridge의 첫번째 트럭의 머문 시간이 bridge_length와 같으면 shift하여 bridge에서 제거한다.
6. bridge와 truck_weights에 트럭이 없을 때까지 소요된 총 진행시간(time)을 반환한다.
