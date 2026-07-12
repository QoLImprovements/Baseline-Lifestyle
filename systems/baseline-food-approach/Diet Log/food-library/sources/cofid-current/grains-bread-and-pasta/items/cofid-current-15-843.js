/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe, Greek dish. Recipe from a personal collection",
  "id": "cofid-current-15-843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pilaf, rice with tomato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 27.9,
    "energy_kcal": 147.0,
    "fat_g": 2.6,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.67,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 82.0,
    "protein_g": 2.9,
    "salt_g": 0.815,
    "sat_fat_g": 0.35,
    "sodium_mg": 326.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-843",
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
