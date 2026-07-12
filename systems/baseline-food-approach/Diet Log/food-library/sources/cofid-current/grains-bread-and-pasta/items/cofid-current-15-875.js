/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe. Rice, vegetables, nut and raisin. Recipe from dietary survey records",
  "id": "cofid-current-15-875",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, rice, brown",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 21.6,
    "energy_kcal": 160.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 1.19,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 179.0,
    "protein_g": 3.5,
    "salt_g": 0.425,
    "sat_fat_g": 0.85,
    "sodium_mg": 170.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-875",
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
