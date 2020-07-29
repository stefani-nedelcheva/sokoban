function drawField(field) {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < currField.length; i += 1) {
        for (var j = 0; j < currField[i].length; j += 1) {
            switch (currField[i][j]) {
                case 0:
                    break;
                case 1:
                    context.drawImage(brick_img, (j) * 50, (i) * 50);
                    break;
                case 2:
                    context.drawImage(pc_wrong_img, j * 50, i * 50);
                    break;
                case 3:
                    context.drawImage(server_img, j * 50, i * 50);
                    break;
                case 4:
                    context.drawImage(pc_ok_img, j * 50, i * 50);
                    break;
                case 5:
                case 6:
                    context.drawImage(player_img, (j) * 50, (i) * 50);
                    break;
                case 7:
                    context.drawImage(public_img, (j) * 100, (i) * 100);
                    break;
                default:
                    break;
            }
        }
    }
}