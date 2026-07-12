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
  "id": "usda-sr-legacy-170739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast without skin"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast bone and skin removed"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Breast, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 149.0,
    "fat_g": 4.56,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.53,
    "magnesium_mg": 27.0,
    "omega3_g": 0.092,
    "phosphorus_mg": 255.0,
    "potassium_mg": 285.0,
    "protein_g": 26.9,
    "salt_g": 1.2475,
    "sat_fat_g": 1.03,
    "sodium_mg": 499.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170739",
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
