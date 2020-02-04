package com.wholeman.deletepairs

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(s: String): Int {
    tailrec fun step(head: String, tail: String): Int = when {
        (head + tail).isBlank() -> 1
        tail.isBlank() -> 0
        head.lastOrNull() == tail.firstOrNull() -> step(head.dropLast(1), tail.drop(1))
        else -> step(head + tail.firstOrNull(), tail.drop(1))
    }

    return step(s.firstOrNull().toString(), s.drop(1))
}

class SolutionTest {

    @Test
    fun `Delete pairs of adjacent letters in given string`() {
        assertThat(solution("baabaa")).isEqualTo(1)
        assertThat(solution("cdcd")).isEqualTo(0)
    }
}
