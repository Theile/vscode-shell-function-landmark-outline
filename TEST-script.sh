#!/bin/zsh --no-rcs
# shellcheck shell=bash # zsh differences disabled
# shellcheck disable=SC2086,SC2001,SC1111,SC1112 #,SC2143,SC2145,SC2089,SC2090
# shellcheck disable=SC2206,SC2296,SC1058,SC1063,SC1072,SC1073,SC2068

###################################################################
# MARK: Constants
###################################################################
# *****************************************************************
# REVIEW: Blocking processes for special software
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# NOTE: Calculated constants with checks

printlog() { # 1: Argument to print
    timestamp=$(date +%F\ %T)
    # ???: Is this working?
    echo "$timestamp : [${funcstack[2]}] $1"
}

function testing () (
    # Test function
    # FIXME: Not done with this function
)

function extra_test () {
    # TODO: Also needed
}
# TODO: Also needed functionality
# !!!: Important addition
