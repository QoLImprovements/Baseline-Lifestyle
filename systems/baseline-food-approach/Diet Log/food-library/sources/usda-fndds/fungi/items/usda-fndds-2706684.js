/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables excluding carrots, broccoli, and/or dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.5,
    "energy_kcal": 132.0,
    "fat_g": 5.64,
    "fibre_g": 1.1,
    "folate_ug": 41.0,
    "iron_mg": 0.83,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 111.0,
    "protein_g": 6.09,
    "salt_g": 0.8625,
    "sat_fat_g": 1.05,
    "sodium_mg": 345.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706684",
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
