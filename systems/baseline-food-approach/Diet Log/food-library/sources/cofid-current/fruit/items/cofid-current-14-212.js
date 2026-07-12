/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, 10 brands; cubes and slices. Drained proportion = 0.56",
  "id": "cofid-current-14-212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pineapple, canned in syrup, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 16.5,
    "energy_kcal": 64.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 79.0,
    "protein_g": 0.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 16.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-212",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "canned",
    "fa",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
