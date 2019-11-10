export const TO_DAMAGE = "TO_DAMAGE";
export const TO_ADD_HEALTH = "TO_ADD_HEALTH";
export const TO_GAME_OVER = "TO_GAME_OVER";

export const onChangeHealth = ({ damage, player, comment }) => ({
   type: TO_DAMAGE,
   payload: {
      damage,
      player,
      comment,
      id: Date.now().toString()
   }
});

export const onChangeAddHealth = ({ addHealth, player, comment }) => ({
   type: TO_ADD_HEALTH,
   payload: {
      addHealth,
      player,
      comment,
      id: Date.now().toString()
   }
})

export const onGameOver = () => ({
   type: TO_GAME_OVER
})