/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2707018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Turkey or chicken burger, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 20.7,
    "energy_kcal": 234.0,
    "fat_g": 7.69,
    "fibre_g": 0.7,
    "folate_ug": 43.0,
    "iron_mg": 2.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 190.0,
    "potassium_mg": 222.0,
    "protein_g": 20.0,
    "salt_g": 0.89,
    "sat_fat_g": 1.91,
    "sodium_mg": 356.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707018",
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
