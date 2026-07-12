/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Tomato-based condiments",
  "id": "usda-fndds-2709734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 272.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ketchup, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 27.4,
    "energy_kcal": 101.0,
    "fat_g": 0.1,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 281.0,
    "protein_g": 1.04,
    "salt_g": 0.05,
    "sat_fat_g": 0.014,
    "sodium_mg": 20.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709734",
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
