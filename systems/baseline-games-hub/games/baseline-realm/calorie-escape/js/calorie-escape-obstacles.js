import { OBSTACLE_TYPES } from '../data/calorie-escape-data.js';

export const obstacleRenderer = {
  drawObstacle(ctx, obstacle) {
    const definition = OBSTACLE_TYPES[obstacle.type];
    if (!definition) return;
    const { x, y, scale } = this.projection(obstacle.lane, obstacle.depth);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    if (obstacle.hit) ctx.globalAlpha = 0.42;
    if (definition.category === 'collectible') {
      ctx.fillStyle = definition.visual.fill;
      ctx.strokeStyle = definition.visual.edge;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(-24, -48, 48, 44, 10);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#143a30';
      ctx.font = '900 10px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('SUPPLY', 0, -23);
      ctx.restore();
      return;
    }
    if (obstacle.type === 'pothole') {
      ctx.fillStyle = '#0b0e12';
      ctx.strokeStyle = '#f0c45b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(0, -2, 36, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      return;
    }
    if (obstacle.type === 'steam-pipe') {
      ctx.strokeStyle = definition.visual.fill;
      ctx.lineWidth = 16;
      ctx.beginPath();
      ctx.moveTo(-44, -56);
      ctx.lineTo(44, -56);
      ctx.stroke();
      ctx.strokeStyle = definition.visual.edge;
      ctx.lineWidth = 4;
      ctx.setLineDash([10, 7]);
      ctx.beginPath();
      ctx.moveTo(-42, -56);
      ctx.lineTo(42, -56);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      return;
    }
    const width = obstacle.type === 'delivery-cart' ? 76 : 60;
    const height = obstacle.type === 'delivery-cart' ? 70 : 58;
    ctx.fillStyle = definition.visual.fill;
    ctx.strokeStyle = definition.visual.edge;
    ctx.lineWidth = definition.category === 'breakable' ? 5 : 4;
    ctx.beginPath();
    ctx.roundRect(-width / 2, -height, width, height, definition.category === 'breakable' ? 8 : 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = definition.category === 'breakable' ? '#fff3d1' : '#f2c14f';
    ctx.font = '900 9px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(definition.category === 'breakable' ? 'BREAK' : 'UNBREAKABLE', 0, -6);
    ctx.restore();
  }
};
