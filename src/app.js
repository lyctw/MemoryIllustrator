import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '@instructure/canvas-theme'
import { TextArea } from '@instructure/ui-forms'
import { Grid } from '@instructure/ui-layout'
import { Heading } from '@instructure/ui-heading'
import {isTwoHex, IEEE754_to_float} from './utils/converter';
import Chart from './components/Chart'
import Tutorial from './components/Tutorial'
 
/* 
https://instructure.design/
https://raw.githubusercontent.com/syokujinau/MemoryIllustrator/master/app/ecg_signal_mem_dump.txt
*/

// console.log(IEEE754_to_float('f6feffff'))

const App = () => {

  const [file, setFile] = useState('');
  const [floatArr, setFloatArr] = useState([]);

  const handleChange = (e) => {

    let textAreaValue = e.target.value;
    setFile(textAreaValue)
    
    // parse  
    let byte_ary = textAreaValue.split(' ').filter((e) => isTwoHex(e));
    
    let numbers = [];

    for(let i = 0; i < byte_ary.length; i++) {
        if(i % 4 === 0) {
            numbers.push(`${byte_ary[i + 3]}${byte_ary[i + 2]}${byte_ary[i + 1]}${byte_ary[i]}`);
        }
    }

    // console.log(numbers)

    let outputAry = numbers.map(e => IEEE754_to_float(e));
  
    console.log(outputAry);


    setFloatArr(outputAry);

  }


  return (
    <div className="App">
      <Grid startAt="large">
        <Grid.Row>
          <Grid.Col></Grid.Col>
          <Grid.Col width={8}>
            {/***************************************** */}
            <Heading>Memory Illustrator</Heading>
            Designed by YC
          </Grid.Col>
          <Grid.Col></Grid.Col>
        </Grid.Row>
      </Grid>
      
      <br/>

      <Grid startAt="large">
        <Grid.Row>
          <Grid.Col></Grid.Col>
          <Grid.Col width={8}>
            {/***************************************** */}
            <img alt="keil" width="200px" src="https://i.imgur.com/jdBvyh1.png" /><br/>
            <Tutorial />
            

            </Grid.Col>
          <Grid.Col></Grid.Col>
        </Grid.Row>
      </Grid>
      
      <br/>

      <Grid startAt="large" >
        <Grid.Row>
          <Grid.Col></Grid.Col>
          <Grid.Col width={8}>
            {/***************************************** */}
            <TextArea
              label="Enter dump file"
              value={file}
              onChange={handleChange}
            />
            <hr/>
          </Grid.Col>
          <Grid.Col></Grid.Col>
        </Grid.Row>
      </Grid>
        
      <br/>
        
      <Grid startAt="large" >
        <Grid.Row>
          <Grid.Col></Grid.Col>
          <Grid.Col width={8}>
          {/***************************************** */}
            <Chart samples={floatArr}/>
            <hr/>
          </Grid.Col>
          <Grid.Col></Grid.Col>
        </Grid.Row>
      </Grid>

      <br/>

      <Grid startAt="large" >
        <Grid.Row>
          <Grid.Col></Grid.Col>
          <Grid.Col width={8}>
            {/***************************************** */}
            <Heading>About IEEE 754</Heading>
            <img src="https://i.imgur.com/3osDdvx.png" />
            <h2>Reference:</h2>
            <ul>
              <li><a href="https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/" target="_blank">GeeksforGeeks - IEEE Standard 754 Floating Point Numbers</a></li>
              <li><a href="https://www.h-schmidt.net/FloatConverter/IEEE754.html" target="_blank">IEEE-754 Floating Point Converter</a></li>
            </ul>  
            <hr/>
          </Grid.Col>
          <Grid.Col></Grid.Col>
        </Grid.Row>
      </Grid>
        
      
      
    </div>
  );
}

const demofile_ecg_ft = `0x200013E0  B2 84 A1 39 9A E9 23 33 - AA 86 91 32 77 8A AA 32 ...9..#3...2w..2
0x200013F0  0E 1A DF 31 72 89 8D 3C - 96 ED 00 33 56 E7 84 32 ...1r..<...3V..2
0x20001400  34 07 16 33 31 A5 CC 32 - 62 AD 46 3D 23 30 54 32 4..31..2b.F=#0T2
0x20001410  4A F3 16 33 86 10 F3 31 - 18 70 01 33 8A B8 05 3D J..3...1.p.3...=
0x20001420  10 43 AD 32 BA 6F 18 33 - 12 B8 BF 32 52 0C 5F 33 .C.2.o.3...2R._3
0x20001430  CE 39 98 3D 8D 95 E8 33 - 85 03 06 33 CA 36 23 33 .9.=...3...3.6#3
0x20001440  78 70 D7 30 18 5C CE 3C - BA CF 31 32 16 31 20 33 xp.0.\.<..12.1 3
0x20001450  01 48 BB 33 E3 DF 59 33 - 03 75 7F 3D 38 AA AF 33 .H.3..Y3.u.=8..3
0x20001460  2D EC A2 33 BE FC 8E 33 - D2 D2 B3 33 B0 45 88 3D -..3...3...3.E.=
0x20001470  16 83 A1 31 F2 C5 E1 32 - C0 0D 50 33 AE 03 3D 34 ...1...2..P3..=4
0x20001480  7B B3 B5 3D E2 99 6A 32 - 5A B4 BB 33 3A 08 32 32 {..=..j2Z..3:.22
0x20001490  3A ED 0F 34 E5 D6 B7 3C - 2D DF 53 30 56 E4 65 34 :..4...<-.S0V.e4
0x200014A0  33 6A 43 33 60 6C 54 33 - 0F 02 25 3D C3 E7 31 34 3jC3.lT3..%=..14
0x200014B0  B6 39 D2 33 F2 18 B6 33 - 9A 68 19 34 66 ED 8B 3D .9.3...3.h.4f..=
0x200014C0  09 FC 96 34 2D 91 26 33 - 31 53 A1 33 17 C5 2B 34 ...4-.&31S.3..+4
0x200014D0  93 C7 7E 3D F1 5D CA 33 - 9A CC 61 32 0E 8A F2 33 ..~=.].3..a2...3
0x200014E0  62 E6 24 32 BA 1F BF 3C - 33 E3 F8 33 9A E6 33 33 b.$2...<3..3..33
0x200014F0  35 BF AD 32 20 B5 50 32 - E5 69 04 3C BC 7F 22 34 5..2 .P2.i.<.."4
0x20001500  C3 D8 54 34 66 F5 98 33 - 6F 50 17 33 8C B1 85 3C ..T4f..3oP.3...<
0x20001510  56 6E AC 33 7F 93 9B 33 - 8E CB 28 32 33 5A 2B 34 Vn.3...3..(23Z+4
0x20001520  6D CD 15 3C 6B 80 65 34 - A3 CB 00 34 3B FD 57 33 m..<k.e4...4;.W3
0x20001530  FA 29 23 34 7A F8 05 3B - AA 59 1F 33 09 8A 0C 31 .)#4z..;.Y.3...1
0x20001540  7A D1 4F 34 55 FC 7B 34 - 25 9B 6E 3B 3F F5 BC 33 z.O4U.{4%.n;?..3
0x20001550  E2 EC 83 33 B1 7C 0F 34 - 5A 26 11 34 B6 53 74 3C ...3.|.4Z&.4.St<
0x20001560  6E 88 70 33 6A 11 0B 34 - D3 57 0A 34 59 9E 90 31 n.p3j..4.W.4Y..1
0x20001570  BD 87 65 3C 63 BF 22 34 - 16 0C 71 33 AF 46 9A 34 ..e<c."4..q3.F.4
0x20001580  9A 60 0F 34 18 ED 18 3C - B8 28 9B 34 A5 D5 79 34 ...4...<.(.4..y4
0x20001590  B3 8B 4F 33 94 81 44 34 - BE 2D 99 3B 0A D2 04 34 ..O3..D4.-.;...4
0x200015A0  08 11 B6 33 F6 6E 2F 33 - 41 F0 9B 33 9D 0C F6 3A ...3.n/3A..3...:
0x200015B0  D2 F4 B2 32 6E F3 4C 33 - 56 FA 94 34 21 BA AA 34 ...2n.L3V..4!..4
0x200015C0  50 44 A4 3A D1 92 AA 32 - 41 87 3E 33 FD 42 72 34 PD.:...2A.>3.Br4
0x200015D0  32 72 95 33 06 18 B9 3B - A3 11 0A 32 85 26 D9 34 2r.3...;...2.&.4
0x200015E0  FE 11 F0 33 3E EB 33 33 - ED 7A 4B 3C FD 01 63 32 ...3>.33.zK<..c2
0x200015F0  F7 C6 99 34 49 FE 90 34 - 7D 5B 77 32 4A 52 64 3C ...4I..4}[w2JRd<
0x20001600  03 7B 87 34 3B 9C D9 31 - A6 9B 62 34 EB 88 78 34 .{.4;..1..b4..x4
0x20001610  7A 4B 13 3C 80 A6 43 34 - A2 AB 19 35 B6 9C 51 34 zK.<..C4...5..Q4
0x20001620  36 E3 90 33 5E B7 34 3A - 68 91 F2 33 DE B5 96 34 6..3^.4:h..3...4
0x20001630  5A DC 93 33 86 E3 DA 32 - 8E AE 07 3C 72 8F A8 33 Z..3...2...<r..3
0x20001640  88 53 AD 33 CE 58 02 34 - C6 78 01 34 0E D4 05 3C .S.3.X.4.x.4...<
0x20001650  F1 F7 05 33 7D 82 26 35 - BD B9 27 33 90 E1 DD 33 ...3}.&5..'3...3
0x20001660  15 06 5A 3B 25 CF C1 32 - 85 A7 D1 33 07 54 34 34 ..Z;%..2...3.T44
0x20001670  01 4C A4 33 B2 B8 03 3A - 51 B3 A8 33 5A E9 E8 34 .L.3...:Q..3Z..4
0x20001680  C2 14 7C 34 CE BC 42 34 - 21 17 0D 3B 5A F0 D6 33 ..|4..B4!..;Z..3
0x20001690  4D D5 3F 33 C3 95 DA 32 - 82 3B F6 33 22 4B FB 3A M.?3...2.;.3"K.:
0x200016A0  7A 39 5D 34 F8 CD 97 32 - 7A 1C 08 34 05 6C C4 33 z9]4...2z..4.l.3
0x200016B0  50 4F 55 3B E5 AC C9 34 - ED F8 C8 34 C8 B1 9B 33 POU;...4...4...3
0x200016C0  D2 CF 0E 34 D2 C8 D2 3A - 3E 68 07 35 27 39 11 35 ...4...:>h.5'9.5
0x200016D0  A8 8F CE 33 5B DB E5 34 - E5 80 06 3A B6 36 E0 33 ...3[..4...:.6.3
0x200016E0  00 64 7E 33 32 47 A1 33 - 62 2E 57 34 6E E1 1F 3B .d~32G.3b.W4n..;
0x200016F0  92 3B F0 34 36 90 0D 35 - 3B 6A BA 33 6C EF 9A 34 .;.46..5;j.3l..4
0x20001700  89 D7 48 3B CF C4 B1 34 - 7B 3D 9F 34 FA 77 E7 33 ..H;...4{=.4.w.3
0x20001710  6D 03 94 33 30 84 0C 3B - 85 55 5A 35 43 3E A0 33 m..30..;.UZ5C>.3
0x20001720  E0 04 27 33 3E AE 8F 34 - 06 E7 76 3A F7 9B 39 34 ..'3>..4..v:..94
0x20001730  C8 92 51 34 F2 FA 82 33 - 33 27 42 34 A8 03 EC 39 ..Q4...33'B4...9
0x20001740  19 44 AE 34 BE 5E 8F 34 - CD F7 10 34 8A A4 C1 34 .D.4.^.4...4...4
0x20001750  E0 62 E4 3A CD 57 18 33 - C0 C8 61 34 1A 2F 89 34 .b.:.W.3..a4./.4
0x20001760  6D AF 03 33 95 6F 27 3B - D7 60 9C 30 E0 4A 4C 34 m..3.o';...0.JL4
0x20001770  20 A3 E1 34 9D 06 25 35 - 8F 94 41 3B 4E 2B B4 33  ..4..%5..A;N+.3
0x20001780  2A E3 92 34 90 C3 D0 33 - FB BB 19 35 D2 02 87 3A *..4...3...5...:
0x20001790  6D 5A 31 34 0F 83 07 35 - 3A E9 8C 34 19 30 AE 34 mZ14...5:..4.0.4
0x200017A0  0E 2E 09 3B 77 85 32 34 - EB 72 51 35 E9 3F 9A 33 ...;w.24.rQ5.?.3
0x200017B0  41 6B 8C 34 6D FB 5D 3B - 60 F0 C8 34 5A A7 89 33 Ak.4m.];...4Z..3
0x200017C0  60 17 FE 33 46 47 EC 34 - 27 81 A1 3B 05 39 DB 34 ...3FG.4'..;.9.4
0x200017D0  1A A0 B3 31 52 AB AE 34 - E9 CB 22 34 69 8C 2D 3B ...1R..4.."4i.-;
0x200017E0  DF B8 40 33 46 51 A4 34 - 46 FF D8 32 79 28 9F 34 ..@3FQ.4F..2y(.4
0x200017F0  21 9C 92 3A 06 3B 60 34 - 0A C9 FC 34 90 DF DF 34 !..:.;.4...4...4
0x20001800  5E 5F BA 34 96 D2 21 3B - 0A 1D 0B 35 DD E9 42 35 ^_.4..!;...5..B5
0x20001810  91 8F 8F 34 5F 26 45 34 - 58 92 17 3B 60 9E 68 34 ...4_&E4X..g..h4
0x20001820  A5 F8 27 35 60 33 DF 33 - D5 95 AB 33 13 6B 9B 39 ..'5.3.3...3.k.9
0x20001830  15 C2 7B 32 D0 38 9C 34 - D0 BE 30 34 4E 4C FB 33 ..{2.8.4..04NL.3
0x20001840  EA B6 14 3A F6 63 56 31 - 35 AE 8A 34 1E 15 87 34 ...:.cV15..4...4
0x20001850  45 73 E1 34 6A E3 65 3A - 27 48 C6 33 88 D8 60 32 Es.4j.e:'H.3...2
0x20001860  40 D3 50 35 17 A6 25 35 - 7B DD 4D 3B C0 78 61 33 @.P5..%5{.M;.xa3
0x20001870  BC F2 BC 34 92 6D D4 34 - 20 D9 09 34 A1 12 83 3B ...4.m.4 ..4...;
0x20001880  F5 82 F8 33 D3 B8 3F 35 - 1E 26 3F 34 9B 1F 53 34 ...3..?5.&?4..S4
0x20001890  3C 92 2E 3B F0 15 BC 33 - 3E CB 10 34 F2 FA EB 34 <..;...3>..4...4
0x200018A0  66 12 89 34 46 16 5F 3A - 52 DE 4B 35 B6 7C 28 35 f..4F._:R.K5.|(5
0x200018B0  73 16 F8 34 60 14 55 32 - 03 83 38 3B 9F 72 02 35 s..4.oU2..8;.r.5
0x200018C0  92 A2 6F 34 52 60 BE 33 - E9 AB BF 33 F0 FF 54 3B ..o4R..3...3..T;
0x200018D0  54 3D 02 35 D2 C2 1E 33 - 46 C4 85 35 4A 92 BD 33 T=.5...3F..5J...`;


ReactDOM.render(<App />, document.getElementById('app'));