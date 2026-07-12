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
  "id": "usda-sr-legacy-173000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Frosted Mini SPOONERS",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 81.8,
    "energy_kcal": 354.0,
    "fat_g": 1.94,
    "fibre_g": 10.9,
    "folate_ug": 727.0,
    "iron_mg": 29.4,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 273.0,
    "potassium_mg": 327.0,
    "protein_g": 9.09,
    "salt_g": 0.045,
    "sat_fat_g": 0.228,
    "sodium_mg": 18.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173000",
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
