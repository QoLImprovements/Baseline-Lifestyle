/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Flavored milk, whole",
  "id": "usda-fndds-2705479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chocolate milk, reduced sugar, whole",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 8.38,
    "energy_kcal": 73.0,
    "fat_g": 2.92,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 95.0,
    "potassium_mg": 155.0,
    "protein_g": 3.04,
    "salt_g": 0.115,
    "sat_fat_g": 1.63,
    "sodium_mg": 46.0,
    "sugar_g": 7.79,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705479",
  "state": "Unspecified",
  "subcategory": "Flavored milk, whole",
  "tags": [
    "flavored-milk-whole",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
