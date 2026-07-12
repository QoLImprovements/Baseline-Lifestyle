/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "g",
  "description": "Tempeh and rice burgers. Recipe from review of recipe collection",
  "id": "cofid-current-15-886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tempeh burgers, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 22.2,
    "energy_kcal": 188.0,
    "fat_g": 7.9,
    "fibre_g": 1.3,
    "folate_ug": 27.0,
    "iron_mg": 1.38,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 179.0,
    "protein_g": 8.3,
    "salt_g": 0.325,
    "sat_fat_g": 0.0,
    "sodium_mg": 130.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-886",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
