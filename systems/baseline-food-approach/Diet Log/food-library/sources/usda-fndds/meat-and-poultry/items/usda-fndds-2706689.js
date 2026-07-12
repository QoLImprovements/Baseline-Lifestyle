/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 15.3,
    "energy_kcal": 149.0,
    "fat_g": 5.97,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 0.97,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 130.0,
    "protein_g": 8.93,
    "salt_g": 0.85,
    "sat_fat_g": 2.62,
    "sodium_mg": 340.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706689",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
