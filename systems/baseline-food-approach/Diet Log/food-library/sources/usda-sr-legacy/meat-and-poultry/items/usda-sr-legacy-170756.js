/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-with-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "breast-with-skin",
      "kind": "unit",
      "label": "breast, with skin"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast, without skin"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast, bone and skin removed"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Breast, meat and skin and breading",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 6.03,
    "energy_kcal": 963.0,
    "fat_g": 12.4,
    "fibre_g": 0.1,
    "folate_ug": 21.0,
    "iron_mg": 0.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 230.0,
    "potassium_mg": 282.0,
    "protein_g": 23.5,
    "salt_g": 1.6425,
    "sat_fat_g": 3.32,
    "sodium_mg": 657.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170756",
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
