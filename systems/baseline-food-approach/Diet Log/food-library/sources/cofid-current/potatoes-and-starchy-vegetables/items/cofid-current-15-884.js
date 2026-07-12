/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Recipe from a personal collection",
  "id": "cofid-current-15-884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet potato and onion layer",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 23.3,
    "energy_kcal": 124.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.71,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 375.0,
    "protein_g": 3.4,
    "salt_g": 0.165,
    "sat_fat_g": 1.04,
    "sodium_mg": 66.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 544.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-884",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
