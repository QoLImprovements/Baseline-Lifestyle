/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chili with chicken and beans",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 10.2,
    "energy_kcal": 99.0,
    "fat_g": 2.08,
    "fibre_g": 3.0,
    "folate_ug": 49.0,
    "iron_mg": 1.49,
    "magnesium_mg": 26.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 114.0,
    "potassium_mg": 282.0,
    "protein_g": 10.2,
    "salt_g": 0.8525,
    "sat_fat_g": 0.563,
    "sodium_mg": 341.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706425",
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
