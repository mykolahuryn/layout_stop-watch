report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_started.png",
        "test": "..\\bitmaps_test\\20250124-150509\\Stopwatch_started.png",
        "selector": "body",
        "fileName": "Stopwatch_started.png",
        "label": "Stopwatch started",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.7503509521484375,
          "misMatchPercentage": "0.75",
          "analysisTime": 159
        },
        "diffImage": "..\\bitmaps_test\\20250124-150509\\failed_diff_Stopwatch_started.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_before_one_circle.png",
        "test": "..\\bitmaps_test\\20250124-150509\\Stopwatch_before_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_before_one_circle.png",
        "label": "Stopwatch before one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8359273274739584,
          "misMatchPercentage": "0.84",
          "analysisTime": 145
        },
        "diffImage": "..\\bitmaps_test\\20250124-150509\\failed_diff_Stopwatch_before_one_circle.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_after_one_circle.png",
        "test": "..\\bitmaps_test\\20250124-150509\\Stopwatch_after_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_after_one_circle.png",
        "label": "Stopwatch after one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.180816650390625,
          "misMatchPercentage": "0.18",
          "analysisTime": 142
        }
      },
      "status": "pass"
    }
  ]
});