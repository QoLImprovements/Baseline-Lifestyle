/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Flavored milk, nonfat",
  "id": "usda-fndds-2705469",
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
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    }
  ],
  "name": "Chocolate milk, fat free (skim)",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 13.5,
    "energy_kcal": 67.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.27,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 182.0,
    "protein_g": 3.39,
    "salt_g": 0.1975,
    "sat_fat_g": 0.0,
    "sodium_mg": 79.0,
    "sugar_g": 8.39,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705469",
  "state": "Unspecified",
  "subcategory": "Flavored milk, nonfat",
  "tags": [
    "flavored-milk-nonfat",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
