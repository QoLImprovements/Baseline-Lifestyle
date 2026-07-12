/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-wing-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "wing-wing-without-skin",
      "kind": "unit",
      "label": "wing wing without skin"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing bone and skin removed"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Wing, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 1.76,
    "energy_kcal": 216.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.98,
    "magnesium_mg": 23.0,
    "omega3_g": 0.272,
    "phosphorus_mg": 249.0,
    "potassium_mg": 286.0,
    "protein_g": 28.6,
    "salt_g": 1.845,
    "sat_fat_g": 2.32,
    "sodium_mg": 738.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170342",
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
