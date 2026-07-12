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
  "id": "usda-fndds-2706531",
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
  "name": "Chicken or turkey and noodles with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.9,
    "energy_kcal": 136.0,
    "fat_g": 5.46,
    "fibre_g": 0.8,
    "folate_ug": 43.0,
    "iron_mg": 0.89,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 94.0,
    "protein_g": 6.92,
    "salt_g": 0.8425,
    "sat_fat_g": 1.08,
    "sodium_mg": 337.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706531",
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
