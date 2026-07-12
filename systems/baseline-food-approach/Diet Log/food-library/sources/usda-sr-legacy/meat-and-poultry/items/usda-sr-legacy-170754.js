/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing without skin"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing bone and skin removed"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Wing, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 2.13,
    "energy_kcal": 215.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.96,
    "magnesium_mg": 24.0,
    "omega3_g": 0.195,
    "phosphorus_mg": 225.0,
    "potassium_mg": 296.0,
    "protein_g": 28.8,
    "salt_g": 1.9025,
    "sat_fat_g": 2.65,
    "sodium_mg": 761.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170754",
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
