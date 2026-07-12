/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, GENERAL MILLS, CHEERIOS",
  "nutritionPerBasis": {
    "calcium_mg": 357.0,
    "carbs_g": 73.2,
    "energy_kcal": 1560.0,
    "fat_g": 6.6,
    "fibre_g": 10.1,
    "folate_ug": 714.0,
    "iron_mg": 28.9,
    "magnesium_mg": 114.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 633.0,
    "protein_g": 12.4,
    "salt_g": 1.2425,
    "sat_fat_g": 1.6,
    "sodium_mg": 497.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 990.0,
    "vitamin_c_mg": 21.4,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173884",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
