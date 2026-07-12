/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2710027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Peas and corn, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.2,
    "energy_kcal": 100.0,
    "fat_g": 3.0,
    "fibre_g": 3.3,
    "folate_ug": 46.0,
    "iron_mg": 0.97,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 166.0,
    "protein_g": 3.74,
    "salt_g": 0.39,
    "sat_fat_g": 0.74,
    "sodium_mg": 156.0,
    "sugar_g": 3.62,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710027",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
