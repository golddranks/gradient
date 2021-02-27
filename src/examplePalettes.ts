// via https://observablehq.com/@mattdesl/perceptually-smooth-multi-color-linear-gradients
import { ColorStop } from "./types";

type RgbTriple = [number, number, number];

// via https://github.com/mattdesl/dictionary-of-colour-combinations
export const palettes: RgbTriple[][] = [
  [
    [188, 137, 43],
    [120, 205, 208],
    [181, 177, 216],
  ],
  [
    [166, 161, 89],
    [0, 180, 155],
    [0, 91, 141],
    [185, 132, 175],
  ],
  [
    [216, 163, 123],
    [80, 19, 69],
    [161, 163, 154],
  ],
  [
    [181, 147, 146],
    [226, 181, 64],
    [0, 110, 184],
  ],
  [
    [183, 31, 87],
    [216, 163, 123],
    [163, 106, 165],
  ],
  [
    [255, 239, 174],
    [238, 167, 140],
    [85, 88, 50],
  ],
  [
    [243, 162, 87],
    [248, 237, 67],
    [98, 198, 191],
  ],
  [
    [248, 237, 67],
    [0, 151, 141],
    [0, 148, 101],
    [188, 228, 229],
  ],
  [
    [218, 82, 93],
    [197, 159, 107],
    [150, 209, 170],
    [185, 132, 175],
  ],
  [
    [193, 159, 44],
    [113, 80, 47],
    [84, 112, 118],
  ],
  [
    [243, 162, 87],
    [37, 49, 34],
    [182, 191, 193],
  ],
  [
    [244, 128, 103],
    [131, 126, 49],
    [150, 209, 170],
  ],
  [
    [253, 212, 189],
    [131, 126, 49],
    [175, 212, 114],
    [0, 113, 144],
  ],
  [
    [253, 212, 189],
    [178, 183, 62],
    [180, 205, 194],
  ],
  [
    [209, 176, 167],
    [0, 147, 165],
    [64, 69, 106],
  ],
  [
    [197, 83, 71],
    [121, 51, 39],
    [165, 200, 209],
  ],
  [
    [226, 181, 64],
    [249, 157, 27],
    [193, 107, 39],
  ],
  [
    [204, 18, 54],
    [255, 242, 0],
    [26, 116, 68],
    [17, 19, 20],
  ],
  [
    [128, 38, 38],
    [226, 181, 64],
    [166, 161, 89],
  ],
  [
    [253, 197, 126],
    [178, 183, 62],
    [118, 44, 25],
    [17, 19, 20],
  ],
  [
    [128, 38, 38],
    [238, 180, 128],
    [131, 126, 49],
    [0, 113, 144],
  ],
  [
    [248, 182, 186],
    [221, 64, 39],
    [183, 194, 169],
    [0, 147, 165],
  ],
  [
    [188, 137, 43],
    [99, 90, 58],
    [26, 116, 68],
  ],
  [
    [235, 211, 162],
    [249, 157, 27],
    [151, 172, 200],
  ],
  [
    [244, 128, 103],
    [181, 222, 204],
    [150, 209, 170],
  ],
  [
    [174, 82, 36],
    [235, 211, 162],
    [99, 90, 58],
    [6, 79, 110],
  ],
  [
    [244, 128, 103],
    [251, 230, 160],
    [17, 47, 44],
  ],
  [
    [168, 66, 34],
    [246, 140, 80],
    [75, 51, 23],
    [0, 144, 138],
  ],
  [
    [238, 180, 128],
    [193, 196, 148],
    [100, 80, 161],
  ],
  [
    [128, 38, 38],
    [249, 157, 27],
    [180, 205, 194],
  ],
  [
    [181, 222, 204],
    [150, 209, 170],
    [52, 69, 76],
  ],
  [
    [181, 147, 146],
    [245, 236, 194],
    [37, 49, 34],
    [151, 172, 200],
  ],
  [
    [181, 147, 146],
    [216, 163, 123],
    [181, 222, 204],
  ],
  [
    [235, 83, 36],
    [113, 148, 112],
    [0, 79, 70],
  ],
  [
    [243, 127, 148],
    [253, 212, 189],
    [175, 212, 114],
    [17, 19, 20],
  ],
  [
    [193, 196, 148],
    [67, 119, 66],
    [37, 49, 34],
    [80, 19, 69],
  ],
  [
    [248, 237, 67],
    [118, 44, 25],
    [181, 222, 204],
  ],
  [
    [174, 82, 36],
    [252, 179, 21],
    [0, 147, 155],
    [64, 69, 106],
  ],
  [
    [243, 162, 87],
    [246, 140, 80],
    [64, 69, 106],
    [6, 79, 110],
  ],
  [
    [151, 172, 200],
    [5, 18, 48],
    [182, 191, 193],
  ],
  [
    [253, 191, 104],
    [249, 157, 27],
    [0, 151, 141],
    [0, 110, 184],
  ],
  [
    [112, 114, 124],
    [140, 76, 98],
    [89, 37, 106],
  ],
  [
    [187, 113, 37],
    [235, 211, 162],
    [107, 113, 64],
    [52, 69, 76],
  ],
  [
    [243, 127, 148],
    [154, 114, 170],
    [89, 37, 106],
  ],
  [
    [202, 179, 86],
    [241, 90, 48],
    [0, 180, 155],
    [188, 228, 229],
  ],
  [
    [242, 114, 145],
    [84, 112, 118],
    [122, 68, 86],
  ],
  [
    [183, 31, 87],
    [150, 209, 170],
    [9, 145, 151],
    [17, 47, 44],
  ],
  [
    [163, 103, 82],
    [180, 205, 194],
    [17, 19, 20],
  ],
  [
    [174, 82, 36],
    [249, 157, 27],
    [107, 113, 64],
    [64, 69, 106],
  ],
  [
    [0, 91, 141],
    [192, 169, 179],
    [163, 106, 165],
  ],
  [
    [248, 182, 186],
    [98, 198, 191],
    [154, 114, 170],
  ],
  [
    [181, 147, 146],
    [174, 82, 36],
    [241, 90, 48],
    [181, 222, 204],
  ],
  [
    [249, 193, 206],
    [253, 212, 189],
    [120, 205, 208],
  ],
  [
    [187, 113, 37],
    [255, 221, 0],
    [0, 151, 141],
    [28, 66, 134],
  ],
  [
    [128, 38, 38],
    [238, 167, 140],
    [79, 64, 134],
  ],
  [
    [214, 180, 62],
    [243, 116, 32],
    [17, 47, 44],
  ],
  [
    [199, 209, 79],
    [0, 180, 155],
    [150, 209, 170],
    [120, 205, 208],
  ],
  [
    [245, 236, 194],
    [241, 90, 48],
    [175, 212, 114],
    [135, 197, 64],
  ],
  [
    [224, 179, 182],
    [121, 51, 39],
    [90, 130, 179],
  ],
  [
    [166, 44, 55],
    [255, 239, 174],
    [182, 191, 193],
  ],
  [
    [218, 82, 93],
    [187, 113, 37],
    [193, 159, 44],
    [9, 145, 151],
  ],
  [
    [174, 82, 36],
    [238, 180, 128],
    [181, 222, 204],
    [52, 69, 76],
  ],
  [
    [121, 51, 39],
    [194, 174, 147],
    [214, 180, 62],
    [84, 112, 118],
  ],
  [
    [253, 191, 104],
    [194, 174, 147],
    [188, 228, 229],
    [0, 113, 144],
  ],
  [
    [187, 113, 37],
    [217, 102, 41],
    [0, 147, 155],
  ],
  [
    [171, 36, 57],
    [152, 111, 45],
    [151, 172, 200],
  ],
  [
    [171, 84, 77],
    [128, 38, 38],
    [113, 148, 112],
    [98, 198, 191],
  ],
  [
    [246, 140, 80],
    [166, 161, 89],
    [5, 18, 48],
  ],
  [
    [245, 142, 132],
    [245, 236, 194],
    [129, 146, 56],
    [165, 200, 209],
  ],
  [
    [248, 237, 67],
    [37, 49, 34],
    [98, 198, 191],
  ],
  [
    [130, 36, 31],
    [249, 157, 27],
    [79, 64, 134],
    [52, 69, 76],
  ],
  [
    [238, 167, 140],
    [255, 221, 0],
    [167, 212, 228],
  ],
  [
    [124, 66, 38],
    [216, 163, 123],
    [85, 88, 50],
  ],
  [
    [166, 44, 55],
    [252, 179, 21],
    [0, 79, 70],
    [192, 169, 179],
  ],
  [
    [226, 98, 94],
    [255, 221, 0],
    [0, 180, 155],
    [0, 79, 70],
  ],
  [
    [121, 51, 39],
    [216, 163, 123],
    [0, 110, 184],
  ],
  [
    [174, 82, 36],
    [248, 237, 67],
    [150, 209, 170],
    [0, 110, 184],
  ],
  [
    [187, 113, 37],
    [181, 222, 204],
    [112, 147, 144],
    [72, 155, 110],
  ],
  [
    [243, 127, 148],
    [252, 179, 21],
    [178, 183, 62],
  ],
  [
    [221, 64, 39],
    [252, 179, 21],
    [79, 64, 134],
  ],
  [
    [187, 113, 37],
    [255, 221, 0],
    [249, 157, 27],
    [67, 119, 66],
  ],
  [
    [166, 44, 55],
    [193, 196, 148],
    [113, 148, 112],
  ],
  [
    [130, 36, 31],
    [176, 159, 54],
    [0, 180, 155],
  ],
  [
    [242, 114, 145],
    [183, 63, 116],
    [131, 126, 49],
    [30, 14, 63],
  ],
  [
    [204, 18, 54],
    [253, 191, 104],
    [0, 151, 141],
  ],
  [
    [241, 90, 48],
    [0, 180, 155],
    [182, 191, 193],
    [17, 19, 20],
  ],
  [
    [245, 236, 194],
    [67, 119, 66],
    [151, 172, 200],
  ],
  [
    [235, 83, 36],
    [72, 155, 110],
    [17, 19, 20],
  ],
  [
    [128, 38, 38],
    [216, 163, 123],
    [26, 116, 68],
  ],
  [
    [218, 82, 93],
    [251, 230, 160],
    [226, 181, 64],
    [17, 47, 44],
  ],
  [
    [174, 82, 36],
    [255, 221, 0],
    [72, 155, 110],
  ],
  [
    [253, 191, 104],
    [192, 169, 179],
    [80, 19, 69],
    [52, 69, 76],
  ],
  [
    [243, 127, 148],
    [121, 51, 39],
    [255, 239, 174],
    [66, 83, 62],
  ],
  [
    [253, 197, 126],
    [28, 66, 134],
    [163, 106, 165],
    [17, 19, 20],
  ],
  [
    [235, 211, 162],
    [226, 181, 64],
    [28, 66, 134],
  ],
  [
    [174, 82, 36],
    [249, 157, 27],
    [112, 147, 144],
    [0, 91, 141],
  ],
  [
    [253, 197, 126],
    [113, 80, 47],
    [167, 212, 228],
  ],
  [
    [244, 128, 103],
    [67, 119, 66],
    [37, 49, 34],
    [165, 200, 209],
  ],
  [
    [188, 137, 43],
    [28, 66, 134],
    [132, 86, 91],
  ],
  [
    [245, 236, 194],
    [238, 180, 128],
    [131, 126, 49],
    [37, 49, 34],
  ],
  [
    [255, 239, 174],
    [0, 151, 141],
    [150, 209, 170],
    [0, 113, 144],
  ],
  [
    [171, 84, 77],
    [128, 110, 75],
    [28, 66, 134],
  ],
  [
    [248, 182, 186],
    [243, 162, 87],
    [194, 117, 68],
  ],
  [
    [166, 44, 55],
    [79, 64, 134],
    [80, 19, 69],
  ],
  [
    [181, 147, 146],
    [202, 179, 86],
    [180, 205, 194],
  ],
  [
    [0, 110, 184],
    [185, 132, 175],
    [161, 163, 154],
  ],
  [
    [243, 127, 148],
    [102, 98, 156],
    [182, 191, 193],
  ],
  [
    [183, 63, 116],
    [194, 117, 68],
    [165, 200, 209],
  ],
  [
    [197, 60, 105],
    [238, 167, 140],
    [129, 146, 56],
    [0, 113, 144],
  ],
  [
    [187, 113, 37],
    [238, 167, 140],
    [194, 174, 147],
    [18, 53, 78],
  ],
  [
    [235, 211, 162],
    [249, 157, 27],
    [192, 169, 179],
  ],
  [
    [249, 157, 27],
    [100, 75, 30],
    [122, 68, 86],
    [17, 19, 20],
  ],
  [
    [245, 236, 194],
    [243, 162, 87],
    [176, 159, 54],
  ],
  [
    [204, 18, 54],
    [238, 180, 128],
    [5, 18, 48],
  ],
  [
    [243, 127, 148],
    [174, 82, 36],
    [26, 116, 68],
    [17, 19, 20],
  ],
  [
    [245, 142, 132],
    [203, 47, 67],
    [37, 49, 34],
    [0, 79, 70],
  ],
  [
    [221, 64, 39],
    [255, 239, 174],
    [197, 165, 110],
    [84, 112, 118],
  ],
  [
    [248, 237, 67],
    [246, 140, 80],
    [80, 19, 69],
    [52, 69, 76],
  ],
  [
    [209, 176, 167],
    [203, 47, 67],
    [217, 102, 41],
    [150, 209, 170],
  ],
  [
    [204, 18, 54],
    [181, 177, 216],
    [163, 106, 165],
    [80, 19, 69],
  ],
  [
    [187, 113, 37],
    [166, 44, 55],
    [79, 64, 134],
  ],
  [
    [121, 51, 39],
    [253, 191, 104],
    [139, 131, 91],
    [0, 151, 141],
  ],
  [
    [143, 160, 113],
    [151, 172, 200],
    [150, 209, 170],
  ],
  [
    [221, 64, 39],
    [243, 162, 87],
    [28, 66, 134],
  ],
  [
    [244, 128, 103],
    [245, 236, 194],
    [243, 162, 87],
    [191, 88, 146],
  ],
  [
    [197, 83, 71],
    [253, 197, 126],
    [100, 143, 123],
  ],
  [
    [166, 44, 55],
    [129, 146, 56],
    [18, 53, 78],
    [52, 69, 76],
  ],
  [
    [178, 183, 62],
    [167, 212, 228],
    [100, 80, 161],
  ],
  [
    [167, 33, 68],
    [255, 242, 0],
    [26, 116, 68],
    [52, 69, 76],
  ],
  [
    [109, 65, 69],
    [253, 191, 104],
    [79, 64, 134],
  ],
  [
    [109, 65, 69],
    [202, 146, 168],
    [113, 59, 76],
    [17, 19, 20],
  ],
  [
    [218, 82, 93],
    [235, 211, 162],
    [176, 159, 54],
    [67, 119, 66],
  ],
  [
    [255, 239, 174],
    [243, 116, 32],
    [181, 222, 204],
    [151, 172, 200],
  ],
  [
    [187, 113, 37],
    [202, 179, 86],
    [120, 205, 208],
    [17, 19, 20],
  ],
  [
    [245, 236, 194],
    [253, 191, 104],
    [67, 119, 66],
    [151, 172, 200],
  ],
  [
    [224, 179, 182],
    [242, 114, 145],
    [109, 65, 69],
  ],
  [
    [169, 65, 81],
    [193, 159, 44],
    [151, 172, 200],
  ],
  [
    [212, 109, 122],
    [143, 160, 113],
    [185, 132, 175],
  ],
  [
    [248, 182, 186],
    [245, 236, 194],
    [131, 126, 49],
    [202, 146, 168],
  ],
  [
    [216, 163, 123],
    [217, 102, 41],
    [165, 200, 209],
    [64, 69, 106],
  ],
  [
    [227, 31, 38],
    [252, 179, 21],
    [0, 110, 184],
    [163, 106, 165],
  ],
  [
    [130, 36, 31],
    [0, 148, 101],
    [79, 64, 134],
    [89, 37, 106],
  ],
  [
    [249, 193, 206],
    [125, 19, 58],
    [163, 103, 82],
    [182, 191, 193],
  ],
  [
    [243, 127, 148],
    [202, 179, 86],
    [167, 212, 228],
    [120, 205, 208],
  ],
  [
    [248, 182, 186],
    [192, 169, 179],
    [122, 68, 86],
  ],
  [
    [167, 33, 68],
    [255, 239, 174],
    [120, 205, 208],
    [161, 163, 154],
  ],
  [
    [244, 128, 103],
    [251, 230, 160],
    [0, 144, 138],
  ],
  [
    [128, 38, 38],
    [150, 135, 77],
    [181, 177, 216],
  ],
  [
    [248, 237, 67],
    [199, 209, 79],
    [64, 69, 106],
    [30, 14, 63],
  ],
  [
    [242, 114, 145],
    [235, 211, 162],
    [132, 128, 97],
  ],
  [
    [238, 167, 140],
    [243, 116, 32],
    [0, 148, 101],
    [17, 19, 20],
  ],
  [
    [166, 44, 55],
    [182, 191, 193],
    [17, 19, 20],
  ],
  [
    [227, 31, 38],
    [235, 211, 162],
    [143, 160, 113],
    [163, 106, 165],
  ],
  [
    [243, 162, 87],
    [0, 113, 144],
    [52, 69, 76],
  ],
  [
    [253, 191, 104],
    [255, 242, 0],
    [0, 110, 184],
    [30, 14, 63],
  ],
  [
    [197, 60, 105],
    [30, 14, 63],
    [154, 114, 170],
    [79, 64, 134],
  ],
  [
    [242, 114, 145],
    [255, 239, 174],
    [182, 191, 193],
  ],
  [
    [193, 196, 148],
    [188, 228, 229],
    [151, 172, 200],
    [9, 145, 151],
  ],
  [
    [214, 180, 62],
    [252, 179, 21],
    [0, 147, 165],
  ],
  [
    [125, 19, 58],
    [214, 180, 62],
    [90, 130, 179],
  ],
  [
    [253, 191, 104],
    [0, 110, 184],
    [191, 88, 146],
  ],
  [
    [235, 211, 162],
    [165, 200, 209],
    [9, 145, 151],
  ],
  [
    [241, 90, 48],
    [139, 131, 91],
    [90, 130, 179],
    [154, 114, 170],
  ],
  [
    [171, 36, 57],
    [90, 130, 179],
    [163, 106, 165],
    [182, 191, 193],
  ],
  [
    [171, 36, 57],
    [253, 191, 104],
    [183, 194, 169],
    [199, 209, 79],
  ],
  [
    [243, 127, 148],
    [188, 137, 43],
    [181, 177, 216],
    [112, 67, 87],
  ],
  [
    [235, 211, 162],
    [163, 103, 82],
    [79, 64, 134],
  ],
  [
    [253, 191, 104],
    [75, 51, 23],
    [112, 114, 124],
  ],
  [
    [194, 174, 147],
    [167, 212, 228],
    [6, 79, 110],
  ],
  [
    [121, 51, 39],
    [188, 228, 229],
    [98, 198, 191],
    [100, 80, 161],
  ],
  [
    [248, 237, 67],
    [194, 117, 68],
    [135, 197, 64],
  ],
  [
    [197, 83, 71],
    [194, 174, 147],
    [118, 44, 25],
    [122, 68, 86],
  ],
  [
    [253, 197, 126],
    [100, 143, 123],
    [102, 98, 156],
  ],
  [
    [246, 145, 126],
    [255, 242, 0],
    [0, 147, 165],
  ],
  [
    [251, 230, 160],
    [241, 90, 48],
    [37, 49, 34],
    [182, 191, 193],
  ],
  [
    [255, 221, 0],
    [188, 137, 43],
    [151, 172, 200],
  ],
  [
    [187, 113, 37],
    [128, 38, 38],
    [163, 106, 165],
    [17, 19, 20],
  ],
  [
    [235, 83, 36],
    [0, 151, 141],
    [5, 18, 48],
  ],
  [
    [235, 211, 162],
    [217, 102, 41],
    [17, 19, 20],
  ],
  [
    [253, 197, 126],
    [154, 114, 170],
    [182, 191, 193],
  ],
  [
    [245, 236, 194],
    [9, 145, 151],
    [0, 113, 144],
  ],
  [
    [248, 237, 67],
    [6, 79, 110],
    [140, 76, 98],
  ],
  [
    [128, 110, 75],
    [66, 83, 62],
    [0, 79, 70],
    [17, 47, 44],
  ],
  [
    [244, 128, 103],
    [253, 191, 104],
    [181, 222, 204],
    [120, 205, 208],
  ],
  [
    [245, 236, 194],
    [216, 163, 123],
    [113, 80, 47],
    [52, 69, 76],
  ],
  [
    [187, 113, 37],
    [75, 51, 23],
    [5, 18, 48],
  ],
  [
    [253, 191, 104],
    [214, 180, 62],
    [67, 119, 66],
    [0, 79, 70],
  ],
  [
    [181, 147, 146],
    [197, 97, 39],
    [109, 126, 119],
    [0, 113, 144],
  ],
  [
    [253, 197, 126],
    [248, 237, 67],
    [85, 88, 50],
  ],
  [
    [183, 63, 116],
    [243, 116, 32],
    [17, 19, 20],
  ],
  [
    [243, 127, 148],
    [121, 51, 39],
    [28, 66, 134],
    [78, 29, 76],
  ],
  [
    [243, 116, 32],
    [175, 212, 114],
    [18, 53, 78],
  ],
  [
    [238, 180, 128],
    [255, 221, 0],
    [178, 183, 62],
    [181, 222, 204],
  ],
  [
    [183, 63, 116],
    [181, 222, 204],
    [199, 209, 79],
    [109, 126, 119],
  ],
  [
    [218, 82, 93],
    [245, 236, 194],
    [107, 113, 64],
    [67, 119, 66],
  ],
  [
    [204, 18, 54],
    [255, 242, 0],
    [0, 110, 184],
  ],
  [
    [203, 47, 67],
    [0, 148, 101],
    [89, 37, 106],
  ],
  [
    [248, 182, 186],
    [253, 191, 104],
    [152, 111, 45],
    [37, 49, 34],
  ],
  [
    [181, 147, 146],
    [187, 113, 37],
    [37, 49, 34],
    [188, 228, 229],
  ],
  [
    [183, 63, 116],
    [252, 179, 21],
    [89, 37, 106],
  ],
  [
    [248, 182, 186],
    [168, 66, 34],
    [245, 236, 194],
    [253, 197, 126],
  ],
  [
    [249, 193, 206],
    [165, 200, 209],
    [0, 147, 165],
  ],
  [
    [124, 66, 38],
    [238, 180, 128],
    [0, 91, 141],
  ],
  [
    [181, 147, 146],
    [197, 83, 71],
    [255, 239, 174],
  ],
  [
    [109, 65, 69],
    [255, 239, 174],
    [85, 88, 50],
    [150, 209, 170],
  ],
  [
    [204, 18, 54],
    [0, 79, 70],
    [112, 67, 87],
  ],
  [
    [245, 142, 132],
    [248, 237, 67],
    [122, 68, 86],
  ],
  [
    [255, 239, 174],
    [238, 180, 128],
    [197, 165, 110],
    [194, 174, 147],
  ],
  [
    [0, 91, 141],
    [181, 177, 216],
    [112, 114, 124],
  ],
  [
    [212, 109, 122],
    [255, 221, 0],
    [166, 161, 89],
    [30, 14, 63],
  ],
  [
    [242, 114, 145],
    [130, 36, 31],
    [181, 222, 204],
  ],
  [
    [227, 31, 38],
    [235, 211, 162],
    [143, 160, 113],
    [0, 151, 141],
  ],
  [
    [218, 82, 93],
    [85, 88, 50],
    [202, 146, 168],
    [122, 68, 86],
  ],
  [
    [212, 109, 122],
    [238, 167, 140],
    [180, 205, 194],
    [0, 180, 155],
  ],
  [
    [248, 182, 186],
    [255, 239, 174],
    [161, 163, 154],
  ],
  [
    [187, 113, 37],
    [248, 237, 67],
    [241, 90, 48],
    [17, 19, 20],
  ],
  [
    [252, 199, 155],
    [194, 174, 147],
    [248, 237, 67],
    [181, 222, 204],
  ],
  [
    [166, 44, 55],
    [150, 135, 77],
    [64, 69, 106],
  ],
  [
    [124, 66, 38],
    [178, 183, 62],
    [30, 14, 63],
  ],
  [
    [248, 237, 67],
    [9, 145, 151],
    [0, 91, 141],
    [161, 163, 154],
  ],
  [
    [214, 180, 62],
    [150, 209, 170],
    [79, 64, 134],
  ],
  [
    [245, 236, 194],
    [249, 157, 27],
    [6, 79, 110],
  ],
  [
    [255, 221, 0],
    [181, 222, 204],
    [0, 113, 144],
  ],
  [
    [194, 117, 68],
    [0, 113, 144],
    [89, 37, 106],
  ],
  [
    [243, 127, 148],
    [187, 113, 37],
    [194, 174, 147],
    [192, 169, 179],
  ],
  [
    [235, 83, 36],
    [253, 212, 189],
    [90, 130, 179],
  ],
  [
    [166, 44, 55],
    [118, 44, 25],
    [151, 172, 200],
  ],
  [
    [227, 31, 38],
    [168, 66, 34],
    [191, 88, 146],
    [100, 80, 161],
  ],
];

export function getRandomGradient(posJitter: number = 0.2): ColorStop[] {
  const palette = palettes[Math.round(palettes.length * Math.random())];
  const stops: ColorStop[] = palette.map(([r, g, b], i) => {
    const position = Math.max(
      0,
      Math.min(
        1,
        i / (palette.length - 1) - posJitter + Math.random() * (posJitter * 2),
      ),
    );
    return {
      id: `${i}`,
      position,
      color: {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        a: 1,
      },
    };
  });
  return stops;
}
