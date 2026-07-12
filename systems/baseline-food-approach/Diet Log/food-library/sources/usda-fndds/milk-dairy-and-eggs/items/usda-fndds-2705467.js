/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Flavored milk, whole",
  "id": "usda-fndds-2705467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chocolate milk, whole",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 10.3,
    "energy_kcal": 83.0,
    "fat_g": 3.39,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.24,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 167.0,
    "protein_g": 3.17,
    "salt_g": 0.15,
    "sat_fat_g": 2.1,
    "sodium_mg": 60.0,
    "sugar_g": 9.54,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705467",
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
