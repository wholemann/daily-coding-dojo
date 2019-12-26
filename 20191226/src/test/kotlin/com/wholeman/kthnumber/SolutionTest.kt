package com.wholeman.kthnumber

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun getKthNumber(array: IntArray, commands: Array<IntArray>) =
        commands.map { (i, j, k) ->
            array.sliceArray(i - 1 until j).sorted()[k - 1]
        }.toIntArray()

class SolutionTest {

    @Test
    fun `get k-th number in numbers`() {
        assertThat(getKthNumber(intArrayOf(1, 5, 2, 6, 3, 7, 4),
                arrayOf(
                        intArrayOf(2, 5, 3),
                        intArrayOf(4, 4, 1),
                        intArrayOf(1, 7, 3)
                )
        )).isEqualTo(intArrayOf(5, 6, 3))
    }
}
