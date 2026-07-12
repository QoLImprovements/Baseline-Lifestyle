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
  "id": "usda-fndds-2710011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Peppers and onions, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.14,
    "energy_kcal": 59.0,
    "fat_g": 2.66,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 0.25,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 177.0,
    "protein_g": 1.04,
    "salt_g": 0.3075,
    "sat_fat_g": 0.72,
    "sodium_mg": 123.0,
    "sugar_g": 3.99,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 53.9,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710011",
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
