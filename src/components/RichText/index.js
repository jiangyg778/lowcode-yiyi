import React from 'react';
import '@wangeditor/editor/dist/css/style.css'
import { createEditor, createToolbar, i18nChangeLanguage } from '@wangeditor/editor'

const align = {
    iconSvg: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\"></path></svg>",
    key: "group-justify",
    menuKeys: ['justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify'],
    title: "对齐",
}


class RichTextSetter extends React.Component {

    componentDidMount() {
        // i18nChangeLanguage('en')
        const editorConfig = {

        }
        editorConfig.placeholder = '请输入内容'
        editorConfig.onChange = (editor) => {
            // 当编辑器选区、内容变化时，即触发
            if (typeof this.props?.onChange === 'function') {
                this.props?.onChange?.(editor.getHtml());
            }
        }
        //自定义菜单
        editorConfig.menus = [
            'bold',
            'fontSize',
        ]



        // 工具栏配置
        const toolbarConfig = {
            // excludeKeys: ["blockquote", "todo", "emotion", ''],
            toolbarKeys: ['headerSelect', "fontFamily", "fontSize", "bold", "underline", "color", "bgColor", "divider", "bulletedList", "numberedList"
                , align, "lineHeight", "insertLink"
            ]
        }

        // 创建编辑器
        const editor = createEditor({
            selector: '#editor-container',
            config: editorConfig,
            mode: 'simple', // 或 'simple' 参考下文
            html: '123',
        })
        // 创建工具栏
        const toolbar = createToolbar({
            editor,
            selector: '#toolbar-container',
            config: toolbarConfig,
            mode: 'default',// 或 'simple' 参考下文

        })
        console.log(toolbar.getConfig().toolbarKeys, 4444)

    }

    render() {
        return (
            <div>
                <div id="toolbar-container"></div>
                <div id="editor-container" style={{ minHeight: "200px" }} ></div>
            </div>
        )

    }
}

export default RichTextSetter;
