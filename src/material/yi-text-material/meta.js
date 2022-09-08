/**
 * 物料
 */
const inputMeta =
{
    group: 'Fed',
    componentName: 'YiText',
    title: 'Text',
    style: {},
    props: {},
    screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAAAXNSR0IArs4c6QAAB8VJREFUaEPtWnlsXEcZf/Nm3rn7dm1vbK9jbxwfTZM4sYmXtipxm9KWIosGp6UGqeVqQVTcMkgUDCRuWqX0nwRxqgiooIcEpocbUAW0paWuUFrWuXDaBh/ZrO/Ner3Xu+cNmo23tR0TNlV24wiP9q9938z8fvP9vjfzvm8Ac5k3QPHfcEMPGh17uhlbVhcAzNWAYT2OgxPYtvt5jvtZOPzmwKXgWVu7qdW0rC9BiK5jIfQQxkkSwrwOOe5AXc3tx15+uccG7e3twsmhmXshgvfznOgFLEuxAoYhxHEcxjL1uKplvjYWPvFEMUnU1G6+S5ZcP+J4sZTNYgJ0sSkoxrT0BLbxng2NFY+A+iu23cwh/mleEN3UyHEwwdi2EeIRALQTIZl0Iqab2q6J02+/VgwSa9dduV3kpWddbq+PYiKEENs2bQgRYlmYxWQaetp2rF2UwCGXy3MVNUwmzsRUNbnXsfGgIElXybL325KseCkpQ89MOsQZYQiTdVHBGmAcFrD1guiqomA1NZVQ1cQPDE17g0WwSZY9uz3eNb7swmaSb4BNWz5gIsRzFOTU+NAdN97Y1tfb2+sEg0EUjRndLrdnN0I8BU2yv6K0bGgC2zadTDq5t9wn7AuFQnZnZyf70kv9Hf7qxj9QcrZtWmBLyw6HSsUydXNi7ERVMpmczWGk8uI58Y8cLwhFwb1kEss0DNPSbx359+EXco8URfFVB5omOF7kqbTAxqZrLY4TECEOiU5FOqanRw/m3kynx/q6RUneAyHHplPxhKal9jsEpwsmo6x8oCJJSpdbKfVibDm6pt6/rqZjH33jULx+f/2t5f5AHwAssCzDBuvrmw8rnrL3UdCZdGLKsc2HGcQfhoC0IcR38YJc5jiYmZudeoVD1e0+XwoX0huxmAIte/z5kjL/DpaFjGmos7ZtHsAE9DOO2cqy/Ldcbq+fYkglZ4+A+vqW2zlReoLnRXE+2jFxsAEhJ0CEIA1uXUtlUpnER6bGhl4pJPjc2P6axh2Ky/snUVJcNFixbWOMLQOwUECIh1Typqnrlq7dBegmNjz6+68LorRXktxSdguYb46DgWmomXhs4t5odOJJAEBRophKpbx87Z2lvrWP8ILsYlm4YF7CaFpaM3RtT0Pdx3+YRRsMBrnp6eROWSl9VBBkD/0vnYrPGaZ2nNh4X1tb6197e3sLKp2lnu3s7IT9/QMfAgh2C7y01a2UllAbw1BTair+2cpKz8FQKGS9s9y0w+Gjw8ck2bOZGs7MnPqOS/T9fHj4n8lirfxSEtQTDQ3v92T02BcrKtY/RJ9ravLEtpaG5tyCvqsXhmEaN7QO5ghMjQ/fE41GHl06aDD4BY5hRuTCxEK9Ggr9wlo6dnl54G5/dcOvcwSGTg405WzOR+Bz0Wgk22lhC6zf3MEh7vuFIGDZ1gORUyf6liFwj7+64VcXh0Bt015vyZrvFYJAYu7Mg5Hw4O6CEqita3rA4y3PEnCwTbCDz30zAUBYwLIQoqyHMbaJQ4+RhCzyOH0GWQjYebtkIvpgeHTwHO+WlwcungcWEkinZk8buvYbwiw+4AEAbEGQPuZyl2yhIDPpuX8ZhvYUIQQtXF3AMI4gSp9xK2Xr6P9FJzA3N/13Aa2/ZTk5YWfsly6l9JNZAqn445Ct+fxydoZ96i8lJZXXF41AILDxwwwA3QxgiG0afZOTIweWA1Zbv/UxZZ5AKhV/PDxy/FPL2VVV1XchXuhgCB2R7ItE3vpzQWMg3+DNl0A+413UGMhnQmqzSmDBSq16IF/ZLLRbldCqhMaHlz3M5SunVQmtSuj/XkINzb9V3CXZ808qPfdYePjYp/ONn0t2FqLfsHV1TZWSJAHNMH/qVspuo2DSqdlnJIH/sqZpZHR0cPpCv7GLthMHgzd7Z+MzRxEvVEDE8RziISVg2SbGtmXapjFTVlrREgq9kLgQbxSNwNatbaW6pUdE0b3sR7+up1WREwPHj/fHVySBa65p98ycGX8NIb6Gnu4XgSTZbPNYxZrq7YcOPZ8sBoFl0yrnm5jmlgYG3t6EMeNaqnMaHxAymdbWK9+80CRZXmmVyzqxNZ9a/Oh8alE5++ZYGalFFsHv8ry0ZUlq8e7KSs9z2dQiTe4Ojf6uSxTlnsspuavrak9j3ScOnCe9jgSIuHfT6+m5nVPjw3+7kOB7r7b+6oYPKu6Sg3ml1/9bgQMwZDvP8d9YUQUO29zGIv6+RQWOlV5iMnS1J1Dd8RAtMVGPVlbW7VxUYrrsi3wLy6yTY0OdN93U9myuzBqLG92SvLLKrC++2L+rqqax950ya+OG4IAkK7TIRwvd0Uwq1oWxc1QU3dfKHu/DsuQppRVMQ1djjuOEmSV50PcaqOfp57AsWyuIso9WIlUtGVeTift0Pf0PCNkWl+Lb7/GuqaB1a01NHQF1jS23CIL0DMeJEiWRvWpgWxbiBO7sVQOGqJlEUtUzOycjJ18tAOBzhqwKXHG9LLqfk11eWu46e9XAMiyIOO7sVQOGWJauGYZ2W56XPVJfHQu/9WQxwOfmqKndeKcsKT/+n5c9aAe6mY1Enmohtv1NANirAQAKxjjpYOtVTpJ/Eh46dmmu2zQ2t1qa+hUWctdBet2GkBQhzusMhPsb1t1xJHvdppirWoi5/gO4TT+16ccwVwAAAABJRU5ErkJggg==',
    configure: {
        props: [
            {
                name: 'name',
                display: 'block',
                title: 'Name',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: '请输入内容',
                    },
                },
            },
            {
                name: 'border',
                display: 'block',
                title: 'Border',
                setter: {
                    componentName: 'BorderTypeSetter',
                    props: {
                        placeholder: 'Please enter a name for this component',
                    },
                },
            },
            {
                name: 'padding',
                display: 'block',
                title: 'Padding',
                setter: {
                    componentName: 'PaddingSetter',
                    props: {
                        placeholder: 'Please enter a name for this component',
                    },
                },
            },
            {
                name: 'value',
                display: 'block',
                title: 'Text',
                setter: {
                    componentName: 'RichTextSetter',
                    props: {
                        placeholder: 'Please enter a name for this component',
                    },
                },
            },
            // RichTextSetter

        ]
    }
}
export default inputMeta
