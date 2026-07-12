/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-individual-container",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Dessert dip",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 22.5,
    "energy_kcal": 249.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.02,
    "magnesium_mg": 8.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 95.0,
    "potassium_mg": 104.0,
    "protein_g": 6.01,
    "salt_g": 0.425,
    "sat_fat_g": 8.82,
    "sodium_mg": 170.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710295",
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
