/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, assorted flavours, fruit topping",
  "id": "cofid-current-12-395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheesecake, fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 35.2,
    "energy_kcal": 294.0,
    "fat_g": 16.2,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.46,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 96.0,
    "protein_g": 4.0,
    "salt_g": 0.365,
    "sat_fat_g": 9.44,
    "sodium_mg": 146.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-395",
  "state": "Frozen",
  "subcategory": "BR",
  "tags": [
    "br",
    "frozen",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
