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
  "id": "usda-fndds-2706697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 14.6,
    "energy_kcal": 131.0,
    "fat_g": 5.68,
    "fibre_g": 0.8,
    "folate_ug": 31.0,
    "iron_mg": 0.72,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 104.0,
    "protein_g": 5.26,
    "salt_g": 0.865,
    "sat_fat_g": 1.01,
    "sodium_mg": 346.0,
    "sugar_g": 0.97,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 16.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706697",
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
