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
  "id": "usda-sr-legacy-170353",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast, bone and skin removed"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "breast-with-skin",
      "kind": "unit",
      "label": "breast, with skin"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast, without skin"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Breast, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 9.83,
    "energy_kcal": 1150.0,
    "fat_g": 16.5,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.74,
    "magnesium_mg": 25.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 191.0,
    "potassium_mg": 283.0,
    "protein_g": 21.7,
    "salt_g": 1.35,
    "sat_fat_g": 5.76,
    "sodium_mg": 540.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170353",
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
