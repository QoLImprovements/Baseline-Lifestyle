/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 5 products",
  "id": "cofid-current-11-884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, ready-cooked, \"plain\", re-heated",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 33.9,
    "energy_kcal": 161.0,
    "fat_g": 1.9,
    "fibre_g": 1.1,
    "folate_ug": 5.0,
    "iron_mg": 0.14,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 57.0,
    "potassium_mg": 51.0,
    "protein_g": 4.1,
    "salt_g": 0.3775,
    "sat_fat_g": 0.3,
    "sodium_mg": 151.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-884",
  "state": "Cooked",
  "subcategory": "AC",
  "tags": [
    "ac",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
