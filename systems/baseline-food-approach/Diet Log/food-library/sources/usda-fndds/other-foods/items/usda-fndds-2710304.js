/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-individual-packet",
      "kind": "unit",
      "label": "1 individual packet"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Jam or jelly, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 29.6,
    "energy_kcal": 121.0,
    "fat_g": 0.0,
    "fibre_g": 2.2,
    "folate_ug": 3.0,
    "iron_mg": 0.15,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 96.0,
    "protein_g": 0.55,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710304",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
