package com.wholeman.trucks

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(length: Int, weight: Int, trucks: IntArray): Int {
    var second = 0
    var bridges = mutableListOf<Pair<Int, Int>>()
    var trucks = trucks.toMutableList()

    while (bridges.isNotEmpty() or trucks.isNotEmpty()) {
        if (trucks.isNotEmpty()) {
            if (isReady(weight, bridges, trucks)) {
                bridges.add(trucks.first() to 0)
                trucks.removeAt(0)
            }
        }
        bridges = shift(length, bridges).toMutableList()
        second += 1
    }

    return second + 1
}

fun isReady(weight: Int, bridges: List<Pair<Int, Int>>, trucks: List<Int>): Boolean {
    return bridges.sumBy { it.first } + trucks.first() <= weight
}

fun shift(length: Int, bridges: List<Pair<Int, Int>>): List<Pair<Int, Int>> {
    val shiftedBridges = bridges.map { (w, t) -> w to t + 1 }
    if (shiftedBridges.isNotEmpty() && shiftedBridges.first().second == length) {
        return shiftedBridges.drop(1)
    }
    return shiftedBridges
}

fun solution2(length: Int, weight: Int, truck_weights: IntArray): Int {
    tailrec fun step(weight: Int, truck_weights: List<Int>, bridges: List<Pair<Int, Int>>, second: Int): Int = when {
        bridges.isEmpty() && truck_weights.isEmpty() -> second + 1
        bridges.ready(weight, truck_weights) ->
            step(weight, truck_weights.drop(1), move(length, bridges + (truck_weights.first() to 0)), second + 1)
        else -> step(weight, truck_weights, move(length, bridges), second + 1)
    }

    return step(weight, truck_weights.toList(), listOf(), 0)
}

fun Collection<Pair<Int, Int>>.ready(weight: Int, truck_weights: List<Int>) =
        truck_weights.isNotEmpty() && (sumBy { it.first } + truck_weights.first()) <= weight

fun move(length: Int, bridges: List<Pair<Int, Int>>) =
        bridges.map { (w, t) -> w to t + 1 }.run {
            when (first().second) {
                length -> drop(1)
                else -> this
            }
        }

class SolutionTest {

    @Test
    fun `Find the time it takes for all trucks to cross the bridge`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution(2, 10, intArrayOf(7, 4, 5, 6))).isEqualTo(8)
        }
    }

    @Test
    fun `Check if the truck is ready to climb the bridge`() {
        assertThat(isReady(10, listOf(7 to 0), listOf(4, 5, 6))).isEqualTo(false)
        assertThat(isReady(100, listOf(7 to 0), listOf(4, 5, 6))).isEqualTo(true)
    }

    @Test
    fun `The truck moves on the bridge`() {
        assertThat(shift(2, listOf(7 to 1, 4 to 0))).isEqualTo(listOf(4 to 1))
    }
}
