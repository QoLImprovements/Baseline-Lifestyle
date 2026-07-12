/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.5,
    "energy_kcal": 128.0,
    "fat_g": 5.64,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 0.83,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 106.0,
    "protein_g": 6.06,
    "salt_g": 0.845,
    "sat_fat_g": 1.05,
    "sodium_mg": 338.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 15.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706683",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "fungi",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
