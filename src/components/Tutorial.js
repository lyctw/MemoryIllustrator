import React from 'react';
import { CodeEditor } from '@instructure/ui-code-editor'

const Tutorial = () => {

    return (
        <div>
            <a href="http://www.keil.com/support/docs/3051.htm?fbclid=IwAR3rxbla5hq9DnTKFv2Rf1axl5DNH48Bjc0E8nx_uFj8Lg1MdWeBIUa7Cjc"  target="_blank">µVISION DEBUGGER: HOW CAN I LOG VARIABLE VALUES TO A FILE</a>
            {/* <p></p> */}
            <p>Step 1.</p> 
            <CodeEditor
                label='code editor'
                defaultValue={                    
                    `log > MyValues.log\nd &testarray[0], &testarray[99]`
                }
                language='sh'
                options={{ lineNumbers: false }}
            />
            <p>Step 2. </p><p>Copy and paste a memory segment to the textarea below</p>
            <p>Example. </p>
            <CodeEditor
                label='code editor'
                defaultValue={                    
                    `0x08000F58  B9 E1 EE BA 12 22 D0 BA - 00 00 00 00 F7 55 72 3B .....".......Ur;\n0x08000F68  CF 4E 04 3C 58 C2 0B 3C - 00 00 00 80 9E 85 8E BC .N.<X..<........\n0x08000F78  88 DC 0B BD 9C A3 08 BD - 00 00 00 00 0A 82 8A 3D ...............=\n0x08000F88  F0 DB 1B 3E 5F 46 64 3E - 06 41 80 3E 5F 46 64 3E ...>_Fd>.A.>_Fd>\n0x08000F98  F0 DB 1B 3E 0A 82 8A 3D - 00 00 00 00 9C A3 08 BD ...>...=........\n0x08000FA8  88 DC 0B BD 9E 85 8E BC - 00 00 00 80 58 C2 0B 3C ............X..<\n0x08000FB8  CF 4E 04 3C F7 55 72 3B - 00 00 00 00 12 22 D0 BA .N.<.Ur;....."..\n0x08000FC8  B9 E1 EE BA 00 00 00 00 - 00 00 00 00 00 00 00 00 ...<.U.e=...."..`
                }
                language='markdown'
                options={{ lineNumbers: false }}
            />
        </div>
    )
}
 
export default Tutorial; 

