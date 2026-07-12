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
  "id": "usda-fndds-2709972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, canned, reduced sodium, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 12.2,
    "energy_kcal": 66.0,
    "fat_g": 0.38,
    "fibre_g": 4.1,
    "folate_ug": 34.0,
    "iron_mg": 1.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 125.0,
    "protein_g": 3.99,
    "salt_g": 0.0275,
    "sat_fat_g": 0.068,
    "sodium_mg": 11.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 20.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709972",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
