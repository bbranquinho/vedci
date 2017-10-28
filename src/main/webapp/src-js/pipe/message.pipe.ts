import { Pipe, PipeTransform } from '@angular/core';

const MAP_TAGS_DECODE = [
    [/\[b]/gi, '<strong>'],
    [/\[\/b]/gi, '</strong>'],
    [/\[i]/gi, '<em>'],
    [/\[\/i]/gi, '</em>'],
    [/\[u]/gi, '<u>'],
    [/\[\/u]/gi, '</u>'],
    [/\[a (.+?)](.+?)\[\/a]/gi,'<a target="_blank" href="$1">$2</a>'],
    [/\[emoji](.+?)\[\/emoji]/gi,'<span class="ice-emoticon-img" style="background: url(https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/$1.svg);">&nbsp;</span>']
];

const MAP_TAGS_ENCODE = [
    [/<strong>/gi, '[b]'],
    [/<\/strong>/gi, '[/b]'],
    [/<em>/gi, '[i]'],
    [/<\/em>/gi, '[/i]'],
    [/<u>/gi, '[u]'],
    [/<\/u>/gi, '[/u]'],
    [/<a .+?src="(.+?)".+?>(.+?)<\/a>/gi, '[a $1]$2[/a]'],
    [/<span .+?\/assets\/svg\/(.+?)\.svg.+?<\/span>/gi, '[emoji]$1[/emoji]']
];


@Pipe({
    name: 'message'
})
export class MessagePipe implements PipeTransform {
    transform(text: string): string {
        return MessagePipe.decodeMessage(text);
    }

    static decodeMessage(message: string): string{
        for(let i = 0; i < MAP_TAGS_DECODE.length; i++){
            message = message.replace(MAP_TAGS_DECODE[i][0], MAP_TAGS_DECODE[i][1].toString());
        }
        return message;
    }

    static encodeMessage(message: string): string{
        for(let i = 0; i < MAP_TAGS_ENCODE.length; i++){
            message = message.replace(MAP_TAGS_ENCODE[i][0], MAP_TAGS_ENCODE[i][1].toString());
        }
        return message;
    }
}