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
  "id": "usda-fndds-2709961",
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
  "name": "Green peas, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.4,
    "energy_kcal": 68.0,
    "fat_g": 0.8,
    "fibre_g": 4.9,
    "folate_ug": 29.0,
    "iron_mg": 1.18,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 106.0,
    "protein_g": 4.47,
    "salt_g": 0.6825,
    "sat_fat_g": 0.143,
    "sodium_mg": 273.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 36.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709961",
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
