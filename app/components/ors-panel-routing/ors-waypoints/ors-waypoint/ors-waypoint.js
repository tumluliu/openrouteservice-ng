angular.module('orsApp.ors-waypoint', [])
    .component('orsWaypoint', {
        templateUrl: 'components/ors-panel-routing/ors-waypoints/ors-waypoint/ors-waypoint.html',
        bindings: {
            idx: '<',
            waypoint: '<',
            onDelete: '&',
            onWaypointsChanged: '&',
            onAddressChanged: '&',
            waypoints: '<',
            showAdd: '=',
            addresses: '<'
        },
        controller: ['orsSettingsFactory', 'orsMapFactory', 'orsObjectsFactory', 'orsUtilsService', 'orsRequestService', 'orsMessagingService', 'lists', function(orsSettingsFactory, orsMapFactory, orsObjectsFactory, orsUtilsService, orsRequestService, orsMessagingService, lists) {
            let ctrl = this;
            ctrl.select = (address) => {
                ctrl.showAddresses = false;
                ctrl.waypoint._address = address.shortaddress;
                ctrl.waypoint._latlng = L.latLng(address.geometry.coordinates[1], address.geometry.coordinates[0]);
                ctrl.waypoint._set = 1;
                ctrl.onAddressChanged(ctrl.waypoint);
                orsRequestService.zoomTo([
                    [address.geometry.coordinates[1], address.geometry.coordinates[0]]
                ])
            };
            ctrl.getIdx = () => {
                if (ctrl.idx == 0) return 'A';
                else if (ctrl.idx == ctrl.waypoints.length - 1) return 'B';
                else return ctrl.idx;
            };
            ctrl.emph = () => {
                const highlightWaypoint = orsObjectsFactory.createMapAction(3, lists.layers[2], ctrl.waypoint._latlng, ctrl.idx, undefined);
                orsMapFactory.mapServiceSubject.onNext(highlightWaypoint);
            };
            ctrl.deEmph = () => {
                const clearHighlightWaypoints = orsObjectsFactory.createMapAction(2, lists.layers[2], undefined, undefined, undefined);
                orsMapFactory.mapServiceSubject.onNext(clearHighlightWaypoints);
            };
            ctrl.checkForAddresses = () => {
                if (ctrl.addresses) ctrl.showAddresses = true;
            };
            ctrl.addressChanged = () => {
                console.log(true)
                let addressString = ctrl.waypoint._address;
                // split at "," ";" and " "
                addressString = addressString.split(/[\s,;]+/);
                // is this a coordinate?
                if (addressString.length == 2) {
                    var lat = addressString[0];
                    var lng = addressString[1];
                    if (orsUtilsService.isCoordinate(lat, lng)) {
                        let position = L.latLng(lat, lng);
                        let positionString = orsUtilsService.parseLatLngString(position);
                        ctrl.addresses = [{
                            geometry: {
                                coordinates: [lng, lat]
                            },
                            shortaddress: positionString
                        }];
                        ctrl.showAddresses = true;
                    } else {
                        ctrl.contructPayLoad();
                    }
                } else {
                    ctrl.contructPayLoad();
                }
            };
            ctrl.contructPayLoad = () => {
                const payload = orsUtilsService.geocodingPayload(ctrl.waypoint._address);
                const request = orsRequestService.geocode(payload);
                orsRequestService.geocodeRequests.updateRequest(request, ctrl.idx, 'routeRequests');
                request.promise.then((data) => {
                    if (data.features.length > 0) {
                        ctrl.addresses = orsUtilsService.addShortAddresses(data.features);
                        ctrl.showAddresses = true;
                    } else {
                        orsMessagingService.messageSubject.onNext(lists.errors.GEOCODE);
                    }
                }, (response) => {
                    // this will be caught my the httpinterceptor
                    console.log(response);
                });
            };
            ctrl.getPlaceholder = () => {
                let placeholder;
                if (ctrl.idx == 0) placeholder = 'Start';
                else if (ctrl.idx == ctrl.waypoints.length - 1) placeholder = 'End';
                else placeholder = 'Via';
                return placeholder;
            };
            // ctrl.$doCheck = () => {
            //  console.log('check')
            // }
            // ctrl.$onChanges = (changesObj) => {
            //     // can be different kinds of changes
            //     if (changesObj.idx) {
            //      console.log(changesObj.idx);
            //      console.log(ctrl.waypoints);
            //      // if array is reversed, 5 changes, how to unify???
            //     }
            // };
            ctrl.delete = () => {
                ctrl.onDelete({
                    idx: ctrl.idx
                });
                ctrl.onWaypointsChanged();
            };
        }]
    });