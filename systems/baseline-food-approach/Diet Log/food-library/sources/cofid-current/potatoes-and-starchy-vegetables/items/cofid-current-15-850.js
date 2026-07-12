/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Baked potato, egg and butter shapes. Recipe from review of recipe collection",
  "id": "cofid-current-15-850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, duchesse",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 17.5,
    "energy_kcal": 124.0,
    "fat_g": 5.1,
    "fibre_g": 1.6,
    "folate_ug": 20.0,
    "iron_mg": 0.51,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 381.0,
    "protein_g": 3.1,
    "salt_g": 0.1325,
    "sat_fat_g": 2.89,
    "sodium_mg": 53.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.37
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-850",
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
