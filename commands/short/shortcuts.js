module.exports = {   
    getFile(file) {
        if (file == undefined) return file;
        // play
        if (file == "p" || file == "tocar") return "play"
        // playlist
        if (file == "pl" || file == "lista") return "playlist"
        // stop
        if (file == "st" || file == "parar") return "stop"
        // resume
        if (file == "continuar" || file == "r") return "resume"
        // skip
        if (file == "s" || file == "sk" || file == "pular") return "skip"
        // volume
        if (file == "v" || file == "vl" || file == "vlm") return "volume"
        // pause
        if (file == "ps" || file == "pausar" || file == "pa") return "pause"
        // loop
        if (file == "l" || file == "repetir" || file == "rep") return "loop"
        // stoploop
        if (file == "pararloop" || file == "sl") return "stoploop"
        // Help
        if (file == "h" || file == "ajuda") return "help"
        // twitch
        if (file == "tw" || file == "t") return "twitch"

        return file;
    }
}