/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Chocolate dip",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 65.3,
    "energy_kcal": 393.0,
    "fat_g": 13.2,
    "fibre_g": 2.0,
    "folate_ug": 3.0,
    "iron_mg": 0.94,
    "magnesium_mg": 34.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 71.0,
    "potassium_mg": 204.0,
    "protein_g": 3.33,
    "salt_g": 0.7225,
    "sat_fat_g": 6.62,
    "sodium_mg": 289.0,
    "sugar_g": 45.5,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710294",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
