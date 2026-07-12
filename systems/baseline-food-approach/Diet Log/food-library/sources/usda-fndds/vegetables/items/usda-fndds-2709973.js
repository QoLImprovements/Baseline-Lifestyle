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
  "id": "usda-fndds-2709973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, canned, reduced sodium, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.8,
    "energy_kcal": 93.0,
    "fat_g": 3.56,
    "fibre_g": 4.0,
    "folate_ug": 33.0,
    "iron_mg": 1.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 122.0,
    "protein_g": 3.88,
    "salt_g": 0.055,
    "sat_fat_g": 0.901,
    "sodium_mg": 22.0,
    "sugar_g": 3.89,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 22.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709973",
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
