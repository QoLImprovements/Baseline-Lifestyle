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
  "id": "usda-fndds-2709962",
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
  "name": "Green peas, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 13.8,
    "energy_kcal": 98.0,
    "fat_g": 2.81,
    "fibre_g": 4.4,
    "folate_ug": 57.0,
    "iron_mg": 1.47,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 107.0,
    "protein_g": 4.99,
    "salt_g": 0.4775,
    "sat_fat_g": 0.714,
    "sodium_mg": 191.0,
    "sugar_g": 4.26,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 25.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709962",
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
