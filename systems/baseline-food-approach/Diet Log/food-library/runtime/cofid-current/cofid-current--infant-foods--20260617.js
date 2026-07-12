/* Generated runtime bundle: cofid-current / Infant Foods. Edit isolated files under food-library/sources and regenerate. */
(function(){
  "use strict";
  var records=[{"id":"cofid-current-12-530","name":"Yogurt, whole milk, infant, fruit flavour","category":"Infant Foods","subcategory":"BN","state":"Unspecified","source":"UK CoFID 2021","sourceId":"12-530","description":"8 samples, 4 brands, no fruit pieces","tags":["bn","infant-foods","unspecified"],"basis":"g","basisGrams":100.0,"basisLabel":"100 g","defaultMeasure":"g","measures":[{"key":"g","label":"g","gramsPerUnit":1.0,"kind":"weight"}],"nutritionPerBasis":{"energy_kcal":90.0,"protein_g":3.8,"carbs_g":11.1,"sugar_g":10.4,"fibre_g":0.2,"fat_g":3.7,"sat_fat_g":2.45,"omega3_g":0.02,"sodium_mg":46.0,"salt_g":0.115,"potassium_mg":176.0,"calcium_mg":120.0,"iron_mg":0.21,"magnesium_mg":12.0,"phosphorus_mg":114.0,"folate_ug":10.0,"vitamin_c_mg":0.0,"vitamin_e_mg":0.18,"vitamin_a_ug":36.0,"vitamin_k_ug":0.0}}];
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  var known=Object.create(null);
  list.forEach(function(item){if(item&&item.id)known[item.id]=true;});
  records.forEach(function(item){if(item&&item.id&&!known[item.id]){known[item.id]=true;list.push(item);}});
})();
