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
  "id": "usda-sr-legacy-170748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast without skin"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast bone and skin removed"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Breast, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 157.0,
    "fat_g": 4.52,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.55,
    "magnesium_mg": 29.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 219.0,
    "potassium_mg": 327.0,
    "protein_g": 29.0,
    "salt_g": 1.315,
    "sat_fat_g": 1.37,
    "sodium_mg": 526.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170748",
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
