import {io} from 'socket.io-client';
import React from 'react';
import { BASEURL } from '../http-common';

const SOCKET_URL = BASEURL;
export const socket = io(SOCKET_URL);

//app context
export const AppContext = React.createContext();