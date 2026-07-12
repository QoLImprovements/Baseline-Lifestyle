/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 288.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with vegetables and gravy, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.4,
    "energy_kcal": 94.0,
    "fat_g": 1.21,
    "fibre_g": 1.7,
    "folate_ug": 9.0,
    "iron_mg": 0.49,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 90.0,
    "protein_g": 2.27,
    "salt_g": 0.54,
    "sat_fat_g": 0.308,
    "sodium_mg": 216.0,
    "sugar_g": 0.77,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709123",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
