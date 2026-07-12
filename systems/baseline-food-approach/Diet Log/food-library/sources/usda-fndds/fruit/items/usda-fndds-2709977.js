/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709977",
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
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Peppers, red, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.71,
    "energy_kcal": 55.0,
    "fat_g": 2.78,
    "fibre_g": 1.2,
    "folate_ug": 40.0,
    "iron_mg": 0.36,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 215.0,
    "protein_g": 0.92,
    "salt_g": 0.315,
    "sat_fat_g": 0.753,
    "sodium_mg": 126.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 122.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709977",
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
