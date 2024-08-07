import convertPxToDp from './ConvertPxToDp';
import {useTheme} from '@theme/ThemeProvider';

const {theme} = useTheme();

const colors = theme.colors;
const iconColors = theme.icons;

// iconData.json
const iconData = {
  dashboard: {
    type: 'svg',
    source: require('@assets/icons/dashboard.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
  },
  'dashboard-outline': {
    type: 'svg',
    source: require('@assets/icons/dashboard-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  'add-square': {
    type: 'svg',
    source: require('@assets/icons/add-square.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
  },
  'add-square-outline': {
    type: 'svg',
    source: require('@assets/icons/add-square-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  machine: {
    type: 'svg',
    source: require('@assets/icons/machine.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
    stroke: colors.primary,
  },
  'machine-outline': {
    type: 'svg',
    source: require('@assets/icons/machine-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  additem: {
    type: 'svg',
    source: require('@assets/icons/additem.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
    stroke: colors.primary,
  },
  'additem-outline': {
    type: 'svg',
    source: require('@assets/icons/additem-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  document: {
    type: 'svg',
    source: require('@assets/icons/document.js'),
    width: convertPxToDp(36.529),
    height: convertPxToDp(46),
    color: colors.primary,
    stroke: colors.primary,
  },
  'document-outline': {
    type: 'svg',
    source: require('@assets/icons/document-outline.js'),
    width: convertPxToDp(36.529),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  'folder-add': {
    type: 'svg',
    source: require('@assets/icons/folder-add.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
  },
  'folder-add-outline': {
    type: 'svg',
    source: require('@assets/icons/folder-add-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: colors.secondary,
  },
  attach: {
    type: 'svg',
    source: require('@assets/icons/attach.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.primary,
  },
  'attach-outline': {
    type: 'svg',
    source: require('@assets/icons/attach-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: colors.secondary,
  },
  users: {
    type: 'svg',
    source: require('@assets/icons/users.js'),
    width: convertPxToDp(56),
    height: convertPxToDp(56),
    color: colors.primary,
  },
  'users-outline': {
    type: 'svg',
    source: require('@assets/icons/users-outline.js'),
    width: convertPxToDp(56),
    height: convertPxToDp(56),
    color: colors.secondary,
  },
  'card-chip-stop-hours': {
    type: 'svg',
    source: require('@assets/icons/stop-hours.js'),
    width: convertPxToDp(25),
    height: convertPxToDp(25),
    stroke: colors.primary,
    opacity: 0.7,
  },
  'card-chip-working-hours': {
    type: 'svg',
    source: require('@assets/icons/working-hours.js'),
    width: convertPxToDp(25),
    height: convertPxToDp(25),
    stroke: colors.primary,
    opacity: 0.7,
  },
  'card-chip-machine': {
    type: 'svg',
    source: require('@assets/icons/machine-outline.js'),
    width: convertPxToDp(27),
    height: convertPxToDp(27),
    stroke: colors.primary,
    opacity: 0.7,
  },
  'table-view-add-square': {
    type: 'svg',
    source: require('@assets/icons/add-square.js'),
    width: convertPxToDp(28),
    height: convertPxToDp(28),
    color: colors.primary,
  },
  'edit-crud': {
    type: 'svg',
    source: require('@assets/icons/edit.js'),
    width: convertPxToDp(28),
    height: convertPxToDp(28),
    stroke: iconColors.edit,
  },
  'trash-crud': {
    type: 'svg',
    source: require('@assets/icons/trash.js'),
    width: convertPxToDp(28),
    height: convertPxToDp(28),
    stroke: iconColors.trash,
  },
  'card-chip-roll': {
    type: 'svg',
    source: require('@assets/icons/roll.js'),
    width: convertPxToDp(27),
    height: convertPxToDp(27),
    color: colors.primary,
    opacity: 0.7,
  },
  'card-chip-efficiency': {
    type: 'svg',
    source: require('@assets/icons/efficiency.js'),
    width: convertPxToDp(27),
    height: convertPxToDp(27),
    color: colors.primary,
    opacity: 0.7,
  },
  'order-summary-check': {
    type: 'svg',
    source: require('@assets/icons/check.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.check,
    stroke: iconColors.check,
    opacity: 0.75,
  },
  'order-summary-stop-hours': {
    type: 'svg',
    source: require('@assets/icons/stop-hours-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.stopHoursSquare,
    stroke: iconColors.stopHoursSquare,
  },
  'order-summary-working-hours': {
    type: 'svg',
    source: require('@assets/icons/working-hours-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.workingHoursSquare,
    stroke: iconColors.workingHoursSquare,
    opacity: 0.5,
  },
  'order-summary-inprogress': {
    type: 'svg',
    source: require('@assets/icons/inprogress-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.inprogressSquare,
    stroke: iconColors.inprogressSquare,
  },
  'order-summary-pending': {
    type: 'svg',
    source: require('@assets/icons/pending-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.pendingSquare,
    stroke: iconColors.pendingSquare,
  },
  'order-summary-done': {
    type: 'svg',
    source: require('@assets/icons/done-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.doneSquare,
    stroke: iconColors.doneSquare,
  },

  'machine-summary-stop-number': {
    type: 'svg',
    source: require('@assets/icons/exclamation-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.exclamationSquare,
    stroke: iconColors.exclamationSquare,
  },

  'machine-summary-efficiency': {
    type: 'svg',
    source: require('@assets/icons/effieciency-square.js'),
    width: convertPxToDp(50),
    height: convertPxToDp(50),
    color: iconColors.efficiencySquare,
    stroke: iconColors.efficiencySquare,
  },
};

export default iconData;
