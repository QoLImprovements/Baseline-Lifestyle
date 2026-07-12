/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Salad with feta cheese, olives and olive oil. Recipe from review of recipe collection",
  "id": "cofid-current-15-871",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, Greek",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 1.9,
    "energy_kcal": 131.0,
    "fat_g": 12.6,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.32,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 144.0,
    "protein_g": 2.7,
    "salt_g": 0.5225,
    "sat_fat_g": 3.32,
    "sodium_mg": 209.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-871",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
