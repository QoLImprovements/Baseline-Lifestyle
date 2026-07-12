/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Milk, whole",
  "id": "usda-fndds-2705393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Buttermilk",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.81,
    "energy_kcal": 43.0,
    "fat_g": 1.08,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.01,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 158.0,
    "protein_g": 3.46,
    "salt_g": 0.23,
    "sat_fat_g": 0.552,
    "sodium_mg": 92.0,
    "sugar_g": 5.36,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705393",
  "state": "Unspecified",
  "subcategory": "Milk, whole",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-whole",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
