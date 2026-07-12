/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Whole fish; rolled in flour and fried",
  "id": "cofid-current-16-231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Whitebait, in flour, fried",
  "nutritionPerBasis": {
    "calcium_mg": 860.0,
    "carbs_g": 5.3,
    "energy_kcal": 525.0,
    "fat_g": 47.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.1,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 860.0,
    "potassium_mg": 110.0,
    "protein_g": 19.5,
    "salt_g": 0.575,
    "sat_fat_g": 0.0,
    "sodium_mg": 230.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-231",
  "state": "Fried",
  "subcategory": "JC",
  "tags": [
    "fried",
    "grains-bread-and-pasta",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
