/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Blackeyed peas, from frozen",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 23.0,
    "energy_kcal": 151.0,
    "fat_g": 3.18,
    "fibre_g": 6.2,
    "folate_ug": 137.0,
    "iron_mg": 2.06,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 363.0,
    "protein_g": 8.23,
    "salt_g": 0.315,
    "sat_fat_g": 0.836,
    "sodium_mg": 126.0,
    "sugar_g": 4.32,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 37.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709956",
  "state": "Frozen",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "frozen",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
