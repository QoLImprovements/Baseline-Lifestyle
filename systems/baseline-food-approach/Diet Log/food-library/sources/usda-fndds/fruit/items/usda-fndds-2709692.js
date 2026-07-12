/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup-mashed",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709692",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pumpkin, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 6.77,
    "energy_kcal": 52.0,
    "fat_g": 2.84,
    "fibre_g": 0.5,
    "folate_ug": 14.0,
    "iron_mg": 0.84,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 354.0,
    "protein_g": 1.05,
    "salt_g": 0.3275,
    "sat_fat_g": 0.77,
    "sodium_mg": 131.0,
    "sugar_g": 2.88,
    "vitamin_a_ug": 433.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709692",
  "state": "Cooked",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "cooked",
    "fruit",
    "other-red-and-orange-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
