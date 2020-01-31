package com.wholeman.failurerate

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/*
실패율:
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

전체 스테이지의 개수 N,
게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages

스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.

만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

1. 각 스테이지(1...N)까지 별 실패율을 구한다.
2. 일단 정렬하고 (n에 머물러 있는 유저들 수 / 머무른 스테이지가 n이상인 유저들 수)
3. Pair<스테이지번호, 실패율>로 순차적으로 리스트에 넣어둔 뒤 실패율을 기준으로 내림차순 정렬.
4. 동률일 땐 스테이지 번호 순으로 나열.

 */

fun solution(N: Int, stages: IntArray) = (1..N).map { s ->
        Pair(s, failureRate(s, stages))
    }.sortedByDescending { it.second }.map { it.first }.toIntArray()

fun failureRate(s: Int, stages: IntArray) =
        if (stages.count { it >= s } == 0) 0.0
        else stages.count { it == s }.toDouble() / stages.count { it >= s }

class SolutionTest {

    @Test
    fun `각 스테이지별 실패율을 내림차순으로 정렬한 배열을 리턴한다`() {
        assertThat(solution(5, intArrayOf(2, 1, 2, 6, 2, 4, 3, 3))).isEqualTo(intArrayOf(3, 4, 2, 1, 5))
        assertThat(solution(4, intArrayOf(4, 4, 4, 4, 4))).isEqualTo(intArrayOf(4, 1, 2, 3))
    }

    @Test
    fun `각 스테이지별 실패율을 리턴한다`() {
        assertThat(failureRate(1, intArrayOf(2, 1, 2, 6, 2, 4, 3, 3))).isEqualTo(1.toDouble() / 8)
        assertThat(failureRate(5, intArrayOf(2, 1, 2, 6, 2, 4, 3, 3))).isEqualTo(0.toDouble() / 1)
    }
}
