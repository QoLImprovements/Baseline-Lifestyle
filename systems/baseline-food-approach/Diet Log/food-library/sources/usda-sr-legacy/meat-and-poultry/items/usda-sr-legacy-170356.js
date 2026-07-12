/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170356",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast without skin"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast bone and skin removed"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Breast, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 638.0,
    "fat_g": 4.54,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.54,
    "magnesium_mg": 28.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 237.0,
    "potassium_mg": 306.0,
    "protein_g": 27.9,
    "salt_g": 1.28,
    "sat_fat_g": 1.18,
    "sodium_mg": 512.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170356",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
