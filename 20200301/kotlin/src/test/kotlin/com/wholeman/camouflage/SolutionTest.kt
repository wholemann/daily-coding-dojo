package com.wholeman.camouflage

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(clothes: Array<Array<String>>) =
        clothes
                .groupingBy { (_, category) ->
                    category
                }
                .eachCount()
                .values
                .fold(1) { acc, i ->
                    acc * (i + 1)
                } - 1

class SolutionTest {

    @Test
    fun `Find the number of different combinations of clothes`() {
        assertThat(
                solution(
                        arrayOf(
                                arrayOf("yellow_hat", "headgear"),
                                arrayOf("blue_sunglasses", "eyewear"),
                                arrayOf("green_turban", "headgear"))))
                .isEqualTo(5)
    }
}
