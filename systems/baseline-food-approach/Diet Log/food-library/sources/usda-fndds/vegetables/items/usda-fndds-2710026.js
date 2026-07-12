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
  "id": "usda-fndds-2710026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Peas and corn, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 16.7,
    "energy_kcal": 79.0,
    "fat_g": 0.47,
    "fibre_g": 3.4,
    "folate_ug": 47.0,
    "iron_mg": 0.99,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 171.0,
    "protein_g": 3.84,
    "salt_g": 0.38,
    "sat_fat_g": 0.076,
    "sodium_mg": 152.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 12.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710026",
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
