/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Rice, tomato, onion and raisin stuffing. Recipe from review of recipe collection. Whole dish consumed",
  "id": "cofid-current-15-662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, stuffed with rice",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 15.9,
    "energy_kcal": 86.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.58,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 280.0,
    "protein_g": 1.9,
    "salt_g": 0.0175,
    "sat_fat_g": 0.22,
    "sodium_mg": 7.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-662",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
