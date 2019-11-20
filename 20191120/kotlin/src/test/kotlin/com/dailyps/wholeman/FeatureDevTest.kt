package com.dailyps.wholeman

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

tailrec fun getDeploymentCounts(progresses: IntArray, speeds: IntArray, acc: IntArray = intArrayOf()): IntArray = when {
    progresses.isEmpty() -> acc.reversed().toIntArray()
    progresses.first() >= 100 -> {
        val temp = progresses.takeWhile { it >= 100 }
        val size = temp.size
        getDeploymentCounts(progresses.drop(size).toIntArray(), speeds.drop(size).toIntArray(), intArrayOf(size).plus(acc))
    }
    else -> {
        val temp = zipping(progresses, speeds)
        getDeploymentCounts(temp, speeds, acc)
    }
}

fun zipping(progresses: IntArray, speeds: IntArray): IntArray {
    return progresses.zip(speeds) { p, s -> p + s }.toIntArray()
}


class FeatureDevTest {

    @Test
    fun `return deployment counts per day`() {
        assertThat(getDeploymentCounts(intArrayOf(93, 30, 55), intArrayOf(1, 30, 5))).isEqualTo(intArrayOf(2, 1))
    }
}