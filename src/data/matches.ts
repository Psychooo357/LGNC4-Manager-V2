import type { Match } from "../types";
import { createMatch } from "../utils/createMatch";
import { CLUB_IDS } from "../utils/clubIds";

export const matches: Match[] = [
    // ==========================
    // Journée 1
    // ==========================

    createMatch(1, CLUB_IDS.AUBAGNE, CLUB_IDS.THIONVILLE),
    createMatch(1, CLUB_IDS.CONCARNEAU, CLUB_IDS.ORLEANS),
    createMatch(1, CLUB_IDS.BOURG, CLUB_IDS.VILLEFRANCHE),
    createMatch(1, CLUB_IDS.ROUEN, CLUB_IDS.CANNES),
    createMatch(1, CLUB_IDS.PARIS13, CLUB_IDS.QRM),
    createMatch(1, CLUB_IDS.LA_ROCHE, CLUB_IDS.VERSAILLES),
    createMatch(1, CLUB_IDS.FLEURY, CLUB_IDS.AMIENS),
    createMatch(1, CLUB_IDS.CAEN, CLUB_IDS.VALENCIENNES),
    createMatch(1, CLUB_IDS.BASTIA, CLUB_IDS.LE_PUY),

    // ==========================
    // Journée 2
    // ==========================

    createMatch(2, CLUB_IDS.VERSAILLES, CLUB_IDS.LE_PUY),
    createMatch(2, CLUB_IDS.AMIENS, CLUB_IDS.LA_ROCHE),
    createMatch(2, CLUB_IDS.AUBAGNE, CLUB_IDS.BASTIA),
    createMatch(2, CLUB_IDS.ORLEANS, CLUB_IDS.ROUEN),
    createMatch(2, CLUB_IDS.THIONVILLE, CLUB_IDS.CAEN),
    createMatch(2, CLUB_IDS.QRM, CLUB_IDS.CONCARNEAU),
    createMatch(2, CLUB_IDS.VALENCIENNES, CLUB_IDS.BOURG),
    createMatch(2, CLUB_IDS.CANNES, CLUB_IDS.FLEURY),
    createMatch(2, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.PARIS13),

    // ==========================
    // Journée 3
    // ==========================

    createMatch(3, CLUB_IDS.CONCARNEAU, CLUB_IDS.VILLEFRANCHE),
    createMatch(3, CLUB_IDS.BOURG, CLUB_IDS.THIONVILLE),
    createMatch(3, CLUB_IDS.ROUEN, CLUB_IDS.QRM),
    createMatch(3, CLUB_IDS.PARIS13, CLUB_IDS.VALENCIENNES),
    createMatch(3, CLUB_IDS.LA_ROCHE, CLUB_IDS.CANNES),
    createMatch(3, CLUB_IDS.FLEURY, CLUB_IDS.ORLEANS),
    createMatch(3, CLUB_IDS.LE_PUY, CLUB_IDS.AMIENS),
    createMatch(3, CLUB_IDS.CAEN, CLUB_IDS.AUBAGNE),
    createMatch(3, CLUB_IDS.BASTIA, CLUB_IDS.VERSAILLES),

    // ==========================
    // Journée 4
    // ==========================

    createMatch(4, CLUB_IDS.AMIENS, CLUB_IDS.VERSAILLES),
    createMatch(4, CLUB_IDS.AUBAGNE, CLUB_IDS.BOURG),
    createMatch(4, CLUB_IDS.ORLEANS, CLUB_IDS.LA_ROCHE),
    createMatch(4, CLUB_IDS.CAEN, CLUB_IDS.BASTIA),
    createMatch(4, CLUB_IDS.THIONVILLE, CLUB_IDS.PARIS13),
    createMatch(4, CLUB_IDS.QRM, CLUB_IDS.FLEURY),
    createMatch(4, CLUB_IDS.VALENCIENNES, CLUB_IDS.CONCARNEAU),
    createMatch(4, CLUB_IDS.CANNES, CLUB_IDS.LE_PUY),
    createMatch(4, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.ROUEN),

    // ==========================
    // Journée 5
    // ==========================

    createMatch(5, CLUB_IDS.VERSAILLES, CLUB_IDS.CANNES),
    createMatch(5, CLUB_IDS.CONCARNEAU, CLUB_IDS.THIONVILLE),
    createMatch(5, CLUB_IDS.BOURG, CLUB_IDS.CAEN),
    createMatch(5, CLUB_IDS.ROUEN, CLUB_IDS.VALENCIENNES),
    createMatch(5, CLUB_IDS.PARIS13, CLUB_IDS.AUBAGNE),
    createMatch(5, CLUB_IDS.LA_ROCHE, CLUB_IDS.QRM),
    createMatch(5, CLUB_IDS.FLEURY, CLUB_IDS.VILLEFRANCHE),
    createMatch(5, CLUB_IDS.LE_PUY, CLUB_IDS.ORLEANS),
    createMatch(5, CLUB_IDS.BASTIA, CLUB_IDS.AMIENS),

    // ==========================
    // Journée 6
    // ==========================

    createMatch(6, CLUB_IDS.AUBAGNE, CLUB_IDS.CONCARNEAU),
    createMatch(6, CLUB_IDS.BOURG, CLUB_IDS.BASTIA),
    createMatch(6, CLUB_IDS.ORLEANS, CLUB_IDS.VERSAILLES),
    createMatch(6, CLUB_IDS.CAEN, CLUB_IDS.PARIS13),
    createMatch(6, CLUB_IDS.THIONVILLE, CLUB_IDS.ROUEN),
    createMatch(6, CLUB_IDS.QRM, CLUB_IDS.LE_PUY),
    createMatch(6, CLUB_IDS.VALENCIENNES, CLUB_IDS.FLEURY),
    createMatch(6, CLUB_IDS.CANNES, CLUB_IDS.AMIENS),
    createMatch(6, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.LA_ROCHE),

    // ==========================
    // Journée 7
    // ==========================

    createMatch(7, CLUB_IDS.VERSAILLES, CLUB_IDS.QRM),
    createMatch(7, CLUB_IDS.AMIENS, CLUB_IDS.ORLEANS),
    createMatch(7, CLUB_IDS.CONCARNEAU, CLUB_IDS.CAEN),
    createMatch(7, CLUB_IDS.ROUEN, CLUB_IDS.AUBAGNE),
    createMatch(7, CLUB_IDS.PARIS13, CLUB_IDS.BOURG),
    createMatch(7, CLUB_IDS.LA_ROCHE, CLUB_IDS.VALENCIENNES),
    createMatch(7, CLUB_IDS.FLEURY, CLUB_IDS.THIONVILLE),
    createMatch(7, CLUB_IDS.LE_PUY, CLUB_IDS.VILLEFRANCHE),
    createMatch(7, CLUB_IDS.BASTIA, CLUB_IDS.CANNES),

    // ==========================
    // Journée 8
    // ==========================

    createMatch(8, CLUB_IDS.AUBAGNE, CLUB_IDS.FLEURY),
    createMatch(8, CLUB_IDS.BOURG, CLUB_IDS.CONCARNEAU),
    createMatch(8, CLUB_IDS.PARIS13, CLUB_IDS.BASTIA),
    createMatch(8, CLUB_IDS.ORLEANS, CLUB_IDS.CANNES),
    createMatch(8, CLUB_IDS.CAEN, CLUB_IDS.ROUEN),
    createMatch(8, CLUB_IDS.THIONVILLE, CLUB_IDS.LA_ROCHE),
    createMatch(8, CLUB_IDS.QRM, CLUB_IDS.AMIENS),
    createMatch(8, CLUB_IDS.VALENCIENNES, CLUB_IDS.LE_PUY),
    createMatch(8, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.VERSAILLES),

    // ==========================
    // Journée 9
    // ==========================

    createMatch(9, CLUB_IDS.VERSAILLES, CLUB_IDS.VALENCIENNES),
    createMatch(9, CLUB_IDS.AMIENS, CLUB_IDS.VILLEFRANCHE),
    createMatch(9, CLUB_IDS.CONCARNEAU, CLUB_IDS.PARIS13),
    createMatch(9, CLUB_IDS.ROUEN, CLUB_IDS.BOURG),
    createMatch(9, CLUB_IDS.LA_ROCHE, CLUB_IDS.AUBAGNE),
    createMatch(9, CLUB_IDS.FLEURY, CLUB_IDS.CAEN),
    createMatch(9, CLUB_IDS.LE_PUY, CLUB_IDS.THIONVILLE),
    createMatch(9, CLUB_IDS.BASTIA, CLUB_IDS.ORLEANS),
    createMatch(9, CLUB_IDS.CANNES, CLUB_IDS.QRM),

    // ==========================
    // Journée 10
    // ==========================

    createMatch(10, CLUB_IDS.AUBAGNE, CLUB_IDS.LE_PUY),
    createMatch(10, CLUB_IDS.CONCARNEAU, CLUB_IDS.BASTIA),
    createMatch(10, CLUB_IDS.BOURG, CLUB_IDS.FLEURY),
    createMatch(10, CLUB_IDS.PARIS13, CLUB_IDS.ROUEN),
    createMatch(10, CLUB_IDS.CAEN, CLUB_IDS.LA_ROCHE),
    createMatch(10, CLUB_IDS.THIONVILLE, CLUB_IDS.VERSAILLES),
    createMatch(10, CLUB_IDS.QRM, CLUB_IDS.ORLEANS),
    createMatch(10, CLUB_IDS.VALENCIENNES, CLUB_IDS.AMIENS),
    createMatch(10, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.CANNES),

    // ==========================
    // Journée 11
    // ==========================

    createMatch(11, CLUB_IDS.VERSAILLES, CLUB_IDS.AUBAGNE),
    createMatch(11, CLUB_IDS.AMIENS, CLUB_IDS.THIONVILLE),
    createMatch(11, CLUB_IDS.ROUEN, CLUB_IDS.CONCARNEAU),
    createMatch(11, CLUB_IDS.LA_ROCHE, CLUB_IDS.BOURG),
    createMatch(11, CLUB_IDS.FLEURY, CLUB_IDS.PARIS13),
    createMatch(11, CLUB_IDS.ORLEANS, CLUB_IDS.VILLEFRANCHE),
    createMatch(11, CLUB_IDS.LE_PUY, CLUB_IDS.CAEN),
    createMatch(11, CLUB_IDS.BASTIA, CLUB_IDS.QRM),
    createMatch(11, CLUB_IDS.CANNES, CLUB_IDS.VALENCIENNES),

    // ==========================
    // Journée 12
    // ==========================

    createMatch(12, CLUB_IDS.AUBAGNE, CLUB_IDS.AMIENS),
    createMatch(12, CLUB_IDS.CONCARNEAU, CLUB_IDS.FLEURY),
    createMatch(12, CLUB_IDS.BOURG, CLUB_IDS.LE_PUY),
    createMatch(12, CLUB_IDS.ROUEN, CLUB_IDS.BASTIA),
    createMatch(12, CLUB_IDS.PARIS13, CLUB_IDS.LA_ROCHE),
    createMatch(12, CLUB_IDS.CAEN, CLUB_IDS.VERSAILLES),
    createMatch(12, CLUB_IDS.THIONVILLE, CLUB_IDS.CANNES),
    createMatch(12, CLUB_IDS.VALENCIENNES, CLUB_IDS.ORLEANS),
    createMatch(12, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.QRM),

    // ==========================
    // Journée 13
    // ==========================

    createMatch(13, CLUB_IDS.VERSAILLES, CLUB_IDS.BOURG),
    createMatch(13, CLUB_IDS.AMIENS, CLUB_IDS.CAEN),
    createMatch(13, CLUB_IDS.LA_ROCHE, CLUB_IDS.CONCARNEAU),
    createMatch(13, CLUB_IDS.FLEURY, CLUB_IDS.ROUEN),
    createMatch(13, CLUB_IDS.ORLEANS, CLUB_IDS.THIONVILLE),
    createMatch(13, CLUB_IDS.LE_PUY, CLUB_IDS.PARIS13),
    createMatch(13, CLUB_IDS.BASTIA, CLUB_IDS.VILLEFRANCHE),
    createMatch(13, CLUB_IDS.QRM, CLUB_IDS.VALENCIENNES),
    createMatch(13, CLUB_IDS.CANNES, CLUB_IDS.AUBAGNE),

    // ==========================
    // Journée 14
    // ==========================

    createMatch(14, CLUB_IDS.AUBAGNE, CLUB_IDS.ORLEANS),
    createMatch(14, CLUB_IDS.CONCARNEAU, CLUB_IDS.LE_PUY),
    createMatch(14, CLUB_IDS.BOURG, CLUB_IDS.AMIENS),
    createMatch(14, CLUB_IDS.ROUEN, CLUB_IDS.LA_ROCHE),
    createMatch(14, CLUB_IDS.PARIS13, CLUB_IDS.VERSAILLES),
    createMatch(14, CLUB_IDS.FLEURY, CLUB_IDS.BASTIA),
    createMatch(14, CLUB_IDS.CAEN, CLUB_IDS.CANNES),
    createMatch(14, CLUB_IDS.THIONVILLE, CLUB_IDS.QRM),
    createMatch(14, CLUB_IDS.VALENCIENNES, CLUB_IDS.VILLEFRANCHE),

    // ==========================
    // Journée 15
    // ==========================

    createMatch(15, CLUB_IDS.VERSAILLES, CLUB_IDS.CONCARNEAU),
    createMatch(15, CLUB_IDS.AMIENS, CLUB_IDS.PARIS13),
    createMatch(15, CLUB_IDS.LA_ROCHE, CLUB_IDS.FLEURY),
    createMatch(15, CLUB_IDS.ORLEANS, CLUB_IDS.CAEN),
    createMatch(15, CLUB_IDS.LE_PUY, CLUB_IDS.ROUEN),
    createMatch(15, CLUB_IDS.BASTIA, CLUB_IDS.VALENCIENNES),
    createMatch(15, CLUB_IDS.QRM, CLUB_IDS.AUBAGNE),
    createMatch(15, CLUB_IDS.CANNES, CLUB_IDS.BOURG),
    createMatch(15, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.THIONVILLE),

    // ==========================
    // Journée 16
    // ==========================

    createMatch(16, CLUB_IDS.AUBAGNE, CLUB_IDS.VILLEFRANCHE),
    createMatch(16, CLUB_IDS.CONCARNEAU, CLUB_IDS.AMIENS),
    createMatch(16, CLUB_IDS.BOURG, CLUB_IDS.ORLEANS),
    createMatch(16, CLUB_IDS.ROUEN, CLUB_IDS.VERSAILLES),
    createMatch(16, CLUB_IDS.PARIS13, CLUB_IDS.CANNES),
    createMatch(16, CLUB_IDS.LA_ROCHE, CLUB_IDS.BASTIA),
    createMatch(16, CLUB_IDS.FLEURY, CLUB_IDS.LE_PUY),
    createMatch(16, CLUB_IDS.CAEN, CLUB_IDS.QRM),
    createMatch(16, CLUB_IDS.THIONVILLE, CLUB_IDS.VALENCIENNES),

    // ==========================
    // Journée 17
    // ==========================

    createMatch(17, CLUB_IDS.VERSAILLES, CLUB_IDS.FLEURY),
    createMatch(17, CLUB_IDS.AMIENS, CLUB_IDS.ROUEN),
    createMatch(17, CLUB_IDS.ORLEANS, CLUB_IDS.PARIS13),
    createMatch(17, CLUB_IDS.LE_PUY, CLUB_IDS.LA_ROCHE),
    createMatch(17, CLUB_IDS.THIONVILLE, CLUB_IDS.BASTIA),
    createMatch(17, CLUB_IDS.QRM, CLUB_IDS.BOURG),
    createMatch(17, CLUB_IDS.VALENCIENNES, CLUB_IDS.AUBAGNE),
    createMatch(17, CLUB_IDS.CANNES, CLUB_IDS.CONCARNEAU),
    createMatch(17, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.CAEN),

    // ==========================
    // Journée 18
    // ==========================

    createMatch(18, CLUB_IDS.CONCARNEAU, CLUB_IDS.QRM),
    createMatch(18, CLUB_IDS.BOURG, CLUB_IDS.VALENCIENNES),
    createMatch(18, CLUB_IDS.ROUEN, CLUB_IDS.ORLEANS),
    createMatch(18, CLUB_IDS.PARIS13, CLUB_IDS.VILLEFRANCHE),
    createMatch(18, CLUB_IDS.LA_ROCHE, CLUB_IDS.AMIENS),
    createMatch(18, CLUB_IDS.FLEURY, CLUB_IDS.CANNES),
    createMatch(18, CLUB_IDS.LE_PUY, CLUB_IDS.VERSAILLES),
    createMatch(18, CLUB_IDS.CAEN, CLUB_IDS.THIONVILLE),
    createMatch(18, CLUB_IDS.BASTIA, CLUB_IDS.AUBAGNE),

    // ==========================
    // Journée 19
    // ==========================

    createMatch(19, CLUB_IDS.VERSAILLES, CLUB_IDS.BASTIA),
    createMatch(19, CLUB_IDS.AMIENS, CLUB_IDS.LE_PUY),
    createMatch(19, CLUB_IDS.AUBAGNE, CLUB_IDS.CAEN),
    createMatch(19, CLUB_IDS.ORLEANS, CLUB_IDS.FLEURY),
    createMatch(19, CLUB_IDS.THIONVILLE, CLUB_IDS.BOURG),
    createMatch(19, CLUB_IDS.QRM, CLUB_IDS.ROUEN),
    createMatch(19, CLUB_IDS.VALENCIENNES, CLUB_IDS.PARIS13),
    createMatch(19, CLUB_IDS.CANNES, CLUB_IDS.LA_ROCHE),
    createMatch(19, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.CONCARNEAU),

    // ==========================
    // Journée 20
    // ==========================

    createMatch(20, CLUB_IDS.VERSAILLES, CLUB_IDS.AMIENS),
    createMatch(20, CLUB_IDS.CONCARNEAU, CLUB_IDS.VALENCIENNES),
    createMatch(20, CLUB_IDS.BOURG, CLUB_IDS.AUBAGNE),
    createMatch(20, CLUB_IDS.ROUEN, CLUB_IDS.VILLEFRANCHE),
    createMatch(20, CLUB_IDS.PARIS13, CLUB_IDS.THIONVILLE),
    createMatch(20, CLUB_IDS.LA_ROCHE, CLUB_IDS.ORLEANS),
    createMatch(20, CLUB_IDS.FLEURY, CLUB_IDS.QRM),
    createMatch(20, CLUB_IDS.LE_PUY, CLUB_IDS.CANNES),
    createMatch(20, CLUB_IDS.BASTIA, CLUB_IDS.CAEN),

    // ==========================
    // Journée 21
    // ==========================

    createMatch(21, CLUB_IDS.AMIENS, CLUB_IDS.BASTIA),
    createMatch(21, CLUB_IDS.AUBAGNE, CLUB_IDS.PARIS13),
    createMatch(21, CLUB_IDS.ORLEANS, CLUB_IDS.LE_PUY),
    createMatch(21, CLUB_IDS.CAEN, CLUB_IDS.BOURG),
    createMatch(21, CLUB_IDS.THIONVILLE, CLUB_IDS.CONCARNEAU),
    createMatch(21, CLUB_IDS.QRM, CLUB_IDS.LA_ROCHE),
    createMatch(21, CLUB_IDS.VALENCIENNES, CLUB_IDS.ROUEN),
    createMatch(21, CLUB_IDS.CANNES, CLUB_IDS.VERSAILLES),
    createMatch(21, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.FLEURY),

    // ==========================
    // Journée 22
    // ==========================

    createMatch(22, CLUB_IDS.VERSAILLES, CLUB_IDS.ORLEANS),
    createMatch(22, CLUB_IDS.AMIENS, CLUB_IDS.CANNES),
    createMatch(22, CLUB_IDS.CONCARNEAU, CLUB_IDS.AUBAGNE),
    createMatch(22, CLUB_IDS.ROUEN, CLUB_IDS.THIONVILLE),
    createMatch(22, CLUB_IDS.PARIS13, CLUB_IDS.CAEN),
    createMatch(22, CLUB_IDS.LA_ROCHE, CLUB_IDS.VILLEFRANCHE),
    createMatch(22, CLUB_IDS.FLEURY, CLUB_IDS.VALENCIENNES),
    createMatch(22, CLUB_IDS.LE_PUY, CLUB_IDS.QRM),
    createMatch(22, CLUB_IDS.BASTIA, CLUB_IDS.BOURG),

    // ==========================
    // Journée 23
    // ==========================

    createMatch(23, CLUB_IDS.AUBAGNE, CLUB_IDS.ROUEN),
    createMatch(23, CLUB_IDS.BOURG, CLUB_IDS.PARIS13),
    createMatch(23, CLUB_IDS.ORLEANS, CLUB_IDS.AMIENS),
    createMatch(23, CLUB_IDS.CAEN, CLUB_IDS.CONCARNEAU),
    createMatch(23, CLUB_IDS.THIONVILLE, CLUB_IDS.FLEURY),
    createMatch(23, CLUB_IDS.QRM, CLUB_IDS.VERSAILLES),
    createMatch(23, CLUB_IDS.VALENCIENNES, CLUB_IDS.LA_ROCHE),
    createMatch(23, CLUB_IDS.CANNES, CLUB_IDS.BASTIA),
    createMatch(23, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.LE_PUY),

    // ==========================
    // Journée 24
    // ==========================

    createMatch(24, CLUB_IDS.VERSAILLES, CLUB_IDS.VILLEFRANCHE),
    createMatch(24, CLUB_IDS.AMIENS, CLUB_IDS.QRM),
    createMatch(24, CLUB_IDS.CONCARNEAU, CLUB_IDS.BOURG),
    createMatch(24, CLUB_IDS.ROUEN, CLUB_IDS.CAEN),
    createMatch(24, CLUB_IDS.LA_ROCHE, CLUB_IDS.THIONVILLE),
    createMatch(24, CLUB_IDS.FLEURY, CLUB_IDS.AUBAGNE),
    createMatch(24, CLUB_IDS.LE_PUY, CLUB_IDS.VALENCIENNES),
    createMatch(24, CLUB_IDS.BASTIA, CLUB_IDS.PARIS13),
    createMatch(24, CLUB_IDS.CANNES, CLUB_IDS.ORLEANS),

    // ==========================
    // Journée 25
    // ==========================

    createMatch(25, CLUB_IDS.AUBAGNE, CLUB_IDS.LA_ROCHE),
    createMatch(25, CLUB_IDS.BOURG, CLUB_IDS.ROUEN),
    createMatch(25, CLUB_IDS.PARIS13, CLUB_IDS.CONCARNEAU),
    createMatch(25, CLUB_IDS.ORLEANS, CLUB_IDS.BASTIA),
    createMatch(25, CLUB_IDS.CAEN, CLUB_IDS.FLEURY),
    createMatch(25, CLUB_IDS.THIONVILLE, CLUB_IDS.LE_PUY),
    createMatch(25, CLUB_IDS.QRM, CLUB_IDS.CANNES),
    createMatch(25, CLUB_IDS.VALENCIENNES, CLUB_IDS.VERSAILLES),
    createMatch(25, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.AMIENS),

    // ==========================
    // Journée 26
    // ==========================

    createMatch(26, CLUB_IDS.VERSAILLES, CLUB_IDS.THIONVILLE),
    createMatch(26, CLUB_IDS.AMIENS, CLUB_IDS.VALENCIENNES),
    createMatch(26, CLUB_IDS.ROUEN, CLUB_IDS.PARIS13),
    createMatch(26, CLUB_IDS.LA_ROCHE, CLUB_IDS.CAEN),
    createMatch(26, CLUB_IDS.FLEURY, CLUB_IDS.BOURG),
    createMatch(26, CLUB_IDS.ORLEANS, CLUB_IDS.QRM),
    createMatch(26, CLUB_IDS.LE_PUY, CLUB_IDS.AUBAGNE),
    createMatch(26, CLUB_IDS.BASTIA, CLUB_IDS.CONCARNEAU),
    createMatch(26, CLUB_IDS.CANNES, CLUB_IDS.VILLEFRANCHE),

    // ==========================
    // Journée 27
    // ==========================

    createMatch(27, CLUB_IDS.AUBAGNE, CLUB_IDS.VERSAILLES),
    createMatch(27, CLUB_IDS.CONCARNEAU, CLUB_IDS.ROUEN),
    createMatch(27, CLUB_IDS.BOURG, CLUB_IDS.LA_ROCHE),
    createMatch(27, CLUB_IDS.PARIS13, CLUB_IDS.FLEURY),
    createMatch(27, CLUB_IDS.CAEN, CLUB_IDS.LE_PUY),
    createMatch(27, CLUB_IDS.THIONVILLE, CLUB_IDS.AMIENS),
    createMatch(27, CLUB_IDS.QRM, CLUB_IDS.BASTIA),
    createMatch(27, CLUB_IDS.VALENCIENNES, CLUB_IDS.CANNES),
    createMatch(27, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.ORLEANS),

    // ==========================
    // Journée 28
    // ==========================

    createMatch(28, CLUB_IDS.VERSAILLES, CLUB_IDS.CAEN),
    createMatch(28, CLUB_IDS.AMIENS, CLUB_IDS.AUBAGNE),
    createMatch(28, CLUB_IDS.LA_ROCHE, CLUB_IDS.PARIS13),
    createMatch(28, CLUB_IDS.FLEURY, CLUB_IDS.CONCARNEAU),
    createMatch(28, CLUB_IDS.ORLEANS, CLUB_IDS.VALENCIENNES),
    createMatch(28, CLUB_IDS.LE_PUY, CLUB_IDS.BOURG),
    createMatch(28, CLUB_IDS.BASTIA, CLUB_IDS.ROUEN),
    createMatch(28, CLUB_IDS.QRM, CLUB_IDS.VILLEFRANCHE),
    createMatch(28, CLUB_IDS.CANNES, CLUB_IDS.THIONVILLE),

    // ==========================
    // Journée 29
    // ==========================

    createMatch(29, CLUB_IDS.AUBAGNE, CLUB_IDS.CANNES),
    createMatch(29, CLUB_IDS.CONCARNEAU, CLUB_IDS.LA_ROCHE),
    createMatch(29, CLUB_IDS.BOURG, CLUB_IDS.VERSAILLES),
    createMatch(29, CLUB_IDS.ROUEN, CLUB_IDS.FLEURY),
    createMatch(29, CLUB_IDS.PARIS13, CLUB_IDS.LE_PUY),
    createMatch(29, CLUB_IDS.CAEN, CLUB_IDS.AMIENS),
    createMatch(29, CLUB_IDS.THIONVILLE, CLUB_IDS.ORLEANS),
    createMatch(29, CLUB_IDS.VALENCIENNES, CLUB_IDS.QRM),
    createMatch(29, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.BASTIA),

    // ==========================
    // Journée 30
    // ==========================

    createMatch(30, CLUB_IDS.VERSAILLES, CLUB_IDS.PARIS13),
    createMatch(30, CLUB_IDS.AMIENS, CLUB_IDS.BOURG),
    createMatch(30, CLUB_IDS.LA_ROCHE, CLUB_IDS.ROUEN),
    createMatch(30, CLUB_IDS.ORLEANS, CLUB_IDS.AUBAGNE),
    createMatch(30, CLUB_IDS.LE_PUY, CLUB_IDS.CONCARNEAU),
    createMatch(30, CLUB_IDS.BASTIA, CLUB_IDS.FLEURY),
    createMatch(30, CLUB_IDS.QRM, CLUB_IDS.THIONVILLE),
    createMatch(30, CLUB_IDS.CANNES, CLUB_IDS.CAEN),
    createMatch(30, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.VALENCIENNES),

    // ==========================
    // Journée 31
    // ==========================

    createMatch(31, CLUB_IDS.AUBAGNE, CLUB_IDS.QRM),
    createMatch(31, CLUB_IDS.CONCARNEAU, CLUB_IDS.VERSAILLES),
    createMatch(31, CLUB_IDS.BOURG, CLUB_IDS.CANNES),
    createMatch(31, CLUB_IDS.ROUEN, CLUB_IDS.LE_PUY),
    createMatch(31, CLUB_IDS.PARIS13, CLUB_IDS.AMIENS),
    createMatch(31, CLUB_IDS.FLEURY, CLUB_IDS.LA_ROCHE),
    createMatch(31, CLUB_IDS.CAEN, CLUB_IDS.ORLEANS),
    createMatch(31, CLUB_IDS.THIONVILLE, CLUB_IDS.VILLEFRANCHE),
    createMatch(31, CLUB_IDS.VALENCIENNES, CLUB_IDS.BASTIA),

    // ==========================
    // Journée 32
    // ==========================

    createMatch(32, CLUB_IDS.VERSAILLES, CLUB_IDS.ROUEN),
    createMatch(32, CLUB_IDS.AMIENS, CLUB_IDS.CONCARNEAU),
    createMatch(32, CLUB_IDS.ORLEANS, CLUB_IDS.BOURG),
    createMatch(32, CLUB_IDS.LE_PUY, CLUB_IDS.FLEURY),
    createMatch(32, CLUB_IDS.BASTIA, CLUB_IDS.LA_ROCHE),
    createMatch(32, CLUB_IDS.QRM, CLUB_IDS.CAEN),
    createMatch(32, CLUB_IDS.VALENCIENNES, CLUB_IDS.THIONVILLE),
    createMatch(32, CLUB_IDS.CANNES, CLUB_IDS.PARIS13),
    createMatch(32, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.AUBAGNE),

    // ==========================
    // Journée 33
    // ==========================

    createMatch(33, CLUB_IDS.AUBAGNE, CLUB_IDS.VALENCIENNES),
    createMatch(33, CLUB_IDS.CONCARNEAU, CLUB_IDS.CANNES),
    createMatch(33, CLUB_IDS.BOURG, CLUB_IDS.QRM),
    createMatch(33, CLUB_IDS.ROUEN, CLUB_IDS.AMIENS),
    createMatch(33, CLUB_IDS.PARIS13, CLUB_IDS.ORLEANS),
    createMatch(33, CLUB_IDS.LA_ROCHE, CLUB_IDS.LE_PUY),
    createMatch(33, CLUB_IDS.FLEURY, CLUB_IDS.VERSAILLES),
    createMatch(33, CLUB_IDS.CAEN, CLUB_IDS.VILLEFRANCHE),
    createMatch(33, CLUB_IDS.BASTIA, CLUB_IDS.THIONVILLE),

    // ==========================
    // Journée 34
    // ==========================

    createMatch(34, CLUB_IDS.VERSAILLES, CLUB_IDS.LA_ROCHE),
    createMatch(34, CLUB_IDS.AMIENS, CLUB_IDS.FLEURY),
    createMatch(34, CLUB_IDS.ORLEANS, CLUB_IDS.CONCARNEAU),
    createMatch(34, CLUB_IDS.LE_PUY, CLUB_IDS.BASTIA),
    createMatch(34, CLUB_IDS.THIONVILLE, CLUB_IDS.AUBAGNE),
    createMatch(34, CLUB_IDS.QRM, CLUB_IDS.PARIS13),
    createMatch(34, CLUB_IDS.VALENCIENNES, CLUB_IDS.CAEN),
    createMatch(34, CLUB_IDS.CANNES, CLUB_IDS.ROUEN),
    createMatch(34, CLUB_IDS.VILLEFRANCHE, CLUB_IDS.BOURG),
]