/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 301.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ham or pork, noodles and vegetables excluding carrots, broccoli, and dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 15.3,
    "energy_kcal": 155.0,
    "fat_g": 6.42,
    "fibre_g": 1.1,
    "folate_ug": 46.0,
    "iron_mg": 1.02,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 150.0,
    "protein_g": 9.18,
    "salt_g": 0.7525,
    "sat_fat_g": 2.88,
    "sodium_mg": 301.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706636",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
