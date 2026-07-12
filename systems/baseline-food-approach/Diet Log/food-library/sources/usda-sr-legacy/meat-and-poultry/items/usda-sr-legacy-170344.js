/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast, bone and skin removed"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Breast, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.25,
    "energy_kcal": 153.0,
    "fat_g": 4.82,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.51,
    "magnesium_mg": 28.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 253.0,
    "potassium_mg": 309.0,
    "protein_g": 27.2,
    "salt_g": 1.1925,
    "sat_fat_g": 1.2,
    "sodium_mg": 477.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170344",
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
