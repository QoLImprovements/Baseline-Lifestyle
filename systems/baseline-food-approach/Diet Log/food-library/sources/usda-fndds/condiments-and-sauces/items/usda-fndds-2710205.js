/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-dipping-size-container",
  "description": "Mayonnaise",
  "id": "usda-fndds-2710205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-in-salad",
      "kind": "unit",
      "label": "Guideline amount in salad"
    },
    {
      "gramsPerUnit": 14.1,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegan mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 16.0,
    "energy_kcal": 232.0,
    "fat_g": 19.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 10.0,
    "protein_g": 0.3,
    "salt_g": 1.2425,
    "sat_fat_g": 3.3,
    "sodium_mg": 497.0,
    "sugar_g": 6.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 42.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710205",
  "state": "Unspecified",
  "subcategory": "Mayonnaise",
  "tags": [
    "condiments-and-sauces",
    "mayonnaise",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
