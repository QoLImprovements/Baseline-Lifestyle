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
  "id": "usda-fndds-2709963",
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
  "name": "Green peas, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 14.6,
    "energy_kcal": 106.0,
    "fat_g": 3.06,
    "fibre_g": 5.7,
    "folate_ug": 56.0,
    "iron_mg": 1.48,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 246.0,
    "protein_g": 5.47,
    "salt_g": 0.3275,
    "sat_fat_g": 0.765,
    "sodium_mg": 131.0,
    "sugar_g": 5.72,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 34.3,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 27.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709963",
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
