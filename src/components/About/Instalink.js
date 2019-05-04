import * as React from 'react';

export default class Instalink extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" >
                <img alt='instagram_logo' style={{ boxShadow: 'none' }} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADy0lEQVRYhe2RfVDTdRzHP4h3Xf90XWlieXXmriMfjpAM48EGw42xgbLx2/PYA/Abv200OJlOsprHRDsJhaGya7MxLMbmntiOHrwSLjhPCDMfAjG0Lsu4ZBuzVKL69tc8464jN/pvr7vvP+97f+/9+t4XIEGCBAkSJHgIWBWu5zhKXx5f6S3mE57t0SNQuLfxCB+DV+0hY7jj2UUflsu7X1ZWOb/U4E5UizuRBneiGsVJRFS7UYXSi0Rq/z8OX+UbEbweyFiU8Z1i24v68q7bBmHneCPfKtsvsGbo2aZUPWYm6TAzSScyk+pEXaSqcvsLEsKTwVP55ELCNyFQ9kbY+MnUuAVa2Jae9m2mH1toLU8s1MUUjrUCpbceK3c8I1D1TgmJXnvcArat7SH7a4femZ+XyLufFqsDmFgdwFi4ayUAgFDps4jVfsSpdmXLFO7DQsI7Hdd4y6q6R/s2N6NPNx5QRDMEKMlGMTadoBjn3qcfQ4fKjiOtvHtOQPgaWZWuVULCKwCAJVr5hzU44UF0etsjMQv4M/TLhtIb0VD6G+JoNrRRv/PsK2+hM5v2NH+2Xrvm9DodyZ/ZfNhYakaVuGtHtNfEs1bsrrAjDDMv+HX/yul12pTRLB0azdKIAAAcGJZ8fotm+mKeyja/O5BmsFsKj/yCYY5kAAAjs0N2QNCJarDjy2MWGN6kTLlEqUGXtypEAAAXcojnJxkSNFnEYc/vjmTW8wZfMiAj1bgaAMCW3yZtLzWjhpL3VsQuQJamfMuQomsMjggA4CqdvvxnrAhNYfnE/O7XZKVmZHMDcqfufhIAwJ11UGYtPIr01GNPxSxwkVKy4kYpC/3ELhRFs6Aid3DGQJ2c2ke5/7LvaLSV4zTp9+e21A5Es1NpTTInuRWZyKZlMQt8RSY/fotbgEKCLOl9gVbG+l89/NBvfvGtiL2sI/wm1TTFzZ++VswNnstVrI32BjbsVQRefRe1Zeofi1kAYVhySJr7Z0hbUPdgHu6TrJkdVnfd6ZPcCB9h/hDk53SOU4tXP9gZSt+z61T6/j8AYEnMAgAAQV3BN6FWpvth753NbAj0bzBcimscACB8sEg7c6Lsr4iLJ/2vdy7kEfho9i70RdreHQu3FwCRYWnEyfXe/UiK7vXjY7OD1T2z/VWWu5/ITBEXvyNs3W4Kv001hcQ5lptsWs91Ju/KGJVAo9n1bj2Ql8YtAACAECTd+VjCmT2j6pk7Xzv8+7Dq8r3PK6/c9ogmIh+wrs7so00E5TljN8uoI9eZXPt4IYEhgKRFGU/wf/M3XNeidAmU/YMAAAAASUVORK5CYII=' />
            </a>
        );
    }
}