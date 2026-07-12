/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Rice-based dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pilau, egg and potato, brown rice, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 19.5,
    "energy_kcal": 117.0,
    "fat_g": 2.8,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 1.09,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 154.0,
    "protein_g": 4.7,
    "salt_g": 0.0725,
    "sat_fat_g": 0.6,
    "sodium_mg": 29.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-845",
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
