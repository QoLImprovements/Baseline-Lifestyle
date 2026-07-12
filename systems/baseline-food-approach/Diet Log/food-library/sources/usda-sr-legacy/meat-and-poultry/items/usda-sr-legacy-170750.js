/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-with-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh bone and skin removed"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Thigh, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 11.2,
    "energy_kcal": 1300.0,
    "fat_g": 21.0,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 1.38,
    "magnesium_mg": 21.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 153.0,
    "potassium_mg": 243.0,
    "protein_g": 19.1,
    "salt_g": 1.7125,
    "sat_fat_g": 7.34,
    "sodium_mg": 685.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170750",
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
