package com.wholeman.strangestring

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun createStrangeString(s: String) =
        s.split(" ").joinToString(" ") { word ->
            word
                    .mapIndexed { index, char ->
                        if (index % 2 == 0) char.toUpperCase() else char.toLowerCase()
                    }
                    .joinToString("")
        }

class SolutionTest {

    @Test
    fun `Make a strange string by following the rules`() {
        assertThat(createStrangeString("try hello world")).isEqualTo("TrY HeLlO WoRlD")
    }
}