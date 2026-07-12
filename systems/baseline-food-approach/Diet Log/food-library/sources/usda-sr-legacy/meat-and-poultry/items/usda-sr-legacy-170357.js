/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-drumstick-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "drumstick-drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, drumstick without skin"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Drumstick, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 718.0,
    "fat_g": 7.41,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.03,
    "magnesium_mg": 24.0,
    "omega3_g": 0.076,
    "phosphorus_mg": 211.0,
    "potassium_mg": 291.0,
    "protein_g": 26.2,
    "salt_g": 1.23,
    "sat_fat_g": 2.0,
    "sodium_mg": 492.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170357",
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
