module.exports = function ($http) {
    return {
        getVersion: () => {
            return $http.get('/api/version').then((d) => { return d.data })
        },
        getPlexServers: () => {
            return $http.get('/api/plex-servers').then((d) => { return d.data })
        },
        addPlexServer: (plexServer) => {
            return $http({
                method: 'PUT',
                url: '/api/plex-servers',
                data: plexServer,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        updatePlexServer: (plexServer) => {
            return $http({
                method: 'POST',
                url: '/api/plex-servers',
                data: plexServer,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        checkExistingPlexServer: async (serverName) => {
            let d = await $http({
                method: 'POST',
                url: '/api/plex-servers/status',
                data: { name: serverName },
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
            return d.data;
        },
        checkNewPlexServer: async (server) => {
            let d = await $http({
                method: 'POST',
                url: '/api/plex-servers/foreignstatus',
                data: server,
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
            return d.data;
        },
        removePlexServer: async (serverName) => {
            let d = await $http({
                method: 'DELETE',
                url: '/api/plex-servers',
                data: { name: serverName },
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
            return d.data;
        },
        getPlexSettings: () => {
            return $http.get('/api/plex-settings').then((d) => { return d.data })
        },
        updatePlexSettings: (config) => {
            return $http({
                method: 'PUT',
                url: '/api/plex-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        resetPlexSettings: (config) => {
            return $http({
                method: 'POST',
                url: '/api/plex-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        getFfmpegSettings: () => {
            return $http.get('/api/ffmpeg-settings').then((d) => { return d.data })
        },
        updateFfmpegSettings: (config) => {
            return $http({
                method: 'PUT',
                url: '/api/ffmpeg-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        resetFfmpegSettings: (config) => {
            return $http({
                method: 'POST',
                url: '/api/ffmpeg-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        getXmltvSettings: () => {
            return $http.get('/api/xmltv-settings').then((d) => { return d.data })
        },
        updateXmltvSettings: (config) => {
            return $http({
                method: 'PUT',
                url: '/api/xmltv-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        resetXmltvSettings: (config) => {
            return $http({
                method: 'POST',
                url: '/api/xmltv-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        getHdhrSettings: () => {
            return $http.get('/api/hdhr-settings').then((d) => { return d.data })
        },
        updateHdhrSettings: (config) => {
            return $http({
                method: 'PUT',
                url: '/api/hdhr-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        resetHdhrSettings: (config) => {
            return $http({
                method: 'POST',
                url: '/api/hdhr-settings',
                data: angular.toJson(config),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        getChannels: () => {
            return $http.get('/api/channels').then((d) => { return d.data })
        },

        getChannel: (number) => {
            return $http.get(`/api/channel/${number}`).then( (d) => { return d.data })
        },

        getChannelDescription: (number) => {
            return $http.get(`/api/channel/description/${number}`).then( (d) => { return d.data } )
        },


        getChannelNumbers: () => {
            return $http.get('/api/channelNumbers').then( (d) => { return d.data } )
        },

        addChannel: (channel) => {
            return $http({
                method: 'POST',
                url: '/api/channel',
                data: angular.toJson(channel),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        updateChannel: (channel) => {
            return $http({
                method: 'PUT',
                url: '/api/channel',
                data: angular.toJson(channel),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        },
        removeChannel: (channel) => {
            return $http({
                method: 'DELETE',
                url: '/api/channel',
                data: angular.toJson(channel),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then((d) => { return d.data })
        }
    }
}