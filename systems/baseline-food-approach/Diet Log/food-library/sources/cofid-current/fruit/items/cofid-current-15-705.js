/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources",
  "id": "cofid-current-15-705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, red, cooked with apple",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 7.9,
    "energy_kcal": 57.0,
    "fat_g": 2.6,
    "fibre_g": 0.1,
    "folate_ug": 14.0,
    "iron_mg": 0.33,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 204.0,
    "protein_g": 0.9,
    "salt_g": 0.075,
    "sat_fat_g": 0.77,
    "sodium_mg": 30.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-705",
  "state": "Cooked",
  "subcategory": "DR",
  "tags": [
    "cooked",
    "dr",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
