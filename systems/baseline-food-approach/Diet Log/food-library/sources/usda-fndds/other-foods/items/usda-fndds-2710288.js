/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Topping, nuts and syrup",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 58.1,
    "energy_kcal": 448.0,
    "fat_g": 22.0,
    "fibre_g": 2.3,
    "folate_ug": 26.0,
    "iron_mg": 1.05,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 151.0,
    "protein_g": 4.5,
    "salt_g": 0.105,
    "sat_fat_g": 1.96,
    "sodium_mg": 42.0,
    "sugar_g": 36.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710288",
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
