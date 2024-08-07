import { Router } from 'express';
import {
    addVideoToPlaylist,
    createPlaylist,
    deletePlaylist,
    getPlaylistById,
    getUserPlaylists,
    removeVideoFromPlaylist,
    updatePlaylist,
} from "../controllers/playlist.controller.js"
import { verifyJwt } from '../middlewares/auth.middleware.js';


const router = Router();
router.use(verifyJwt); // Apply verifyJWT middleware to all routes in this file


router.route("/createplaylist").get(createPlaylist)

router.route("/getplaylist/:playlistId").get(getPlaylistById)

router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);

router.route("/remove/:videoId/:playlistId").delete(removeVideoFromPlaylist);

router.route("/deletePlaylist/:playlistId").delete(deletePlaylist)

router.route("/updateplaylist/:playlistId").patch(updatePlaylist)

// router
//     .route("/:playlistId")
//     .get(getPlaylistById)
//     .patch(updatePlaylist)
//     .delete(deletePlaylist);

// router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist);

router.route("/userplaylist/:userId").get(getUserPlaylists);

export default router