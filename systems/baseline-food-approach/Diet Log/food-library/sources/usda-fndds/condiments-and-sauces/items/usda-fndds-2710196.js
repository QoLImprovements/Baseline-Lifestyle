/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Mayonnaise",
  "id": "usda-fndds-2710196",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 14.3,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Salad dressing, NFS, for sandwiches",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.41,
    "energy_kcal": 594.0,
    "fat_g": 64.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.19,
    "magnesium_mg": 1.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 19.0,
    "potassium_mg": 23.0,
    "protein_g": 0.9,
    "salt_g": 1.5975,
    "sat_fat_g": 10.0,
    "sodium_mg": 639.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.93,
    "vitamin_k_ug": 139.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710196",
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
