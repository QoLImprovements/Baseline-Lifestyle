/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich",
  "description": "Burgers",
  "id": "usda-fndds-2707019",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey or chicken burger, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 18.7,
    "energy_kcal": 227.0,
    "fat_g": 7.72,
    "fibre_g": 2.2,
    "folate_ug": 34.0,
    "iron_mg": 2.19,
    "magnesium_mg": 41.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 217.0,
    "potassium_mg": 250.0,
    "protein_g": 20.7,
    "salt_g": 0.835,
    "sat_fat_g": 1.86,
    "sodium_mg": 334.0,
    "sugar_g": 2.15,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707019",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
