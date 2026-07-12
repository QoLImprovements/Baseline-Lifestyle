/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    }
  ],
  "name": "Fry sauce",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 7.28,
    "energy_kcal": 535.0,
    "fat_g": 56.2,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 0.24,
    "magnesium_mg": 4.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 22.0,
    "potassium_mg": 85.0,
    "protein_g": 0.98,
    "salt_g": 1.2025,
    "sat_fat_g": 8.78,
    "sodium_mg": 481.0,
    "sugar_g": 5.74,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.82,
    "vitamin_k_ug": 123.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710176",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
