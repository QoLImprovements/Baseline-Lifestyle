/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-stalk",
      "kind": "unit",
      "label": "1 stalk"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Celery, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 3.46,
    "energy_kcal": 42.0,
    "fat_g": 2.9,
    "fibre_g": 1.7,
    "folate_ug": 32.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 276.0,
    "protein_g": 0.52,
    "salt_g": 0.5775,
    "sat_fat_g": 0.76,
    "sodium_mg": 231.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 32.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709906",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
