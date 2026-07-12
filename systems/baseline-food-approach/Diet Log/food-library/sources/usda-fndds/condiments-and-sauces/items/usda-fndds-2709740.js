/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tomato-based condiments",
  "id": "usda-fndds-2709740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    }
  ],
  "name": "Taco sauce",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.72,
    "energy_kcal": 11.0,
    "fat_g": 0.68,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 1.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 115.0,
    "protein_g": 1.16,
    "salt_g": 1.425,
    "sat_fat_g": 0.095,
    "sodium_mg": 570.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709740",
  "state": "Unspecified",
  "subcategory": "Tomato-based condiments",
  "tags": [
    "condiments-and-sauces",
    "tomato-based-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
