/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe. Apple and tinned gooseberry, plum, rhubarb",
  "id": "cofid-current-11-1070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, sponge, with fruit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 21.5,
    "energy_kcal": 101.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.62,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 101.0,
    "protein_g": 2.3,
    "salt_g": 0.055,
    "sat_fat_g": 0.34,
    "sodium_mg": 22.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1070",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
