/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples; fruit and cream sponge including strawberry, orange and lemon and tropical fruit",
  "id": "cofid-current-11-530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gateau, fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 33.3,
    "energy_kcal": 248.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.7,
    "magnesium_mg": 10.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 110.0,
    "potassium_mg": 107.0,
    "protein_g": 3.2,
    "salt_g": 0.32,
    "sat_fat_g": 7.89,
    "sodium_mg": 128.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-530",
  "state": "Frozen",
  "subcategory": "AN",
  "tags": [
    "an",
    "frozen",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
