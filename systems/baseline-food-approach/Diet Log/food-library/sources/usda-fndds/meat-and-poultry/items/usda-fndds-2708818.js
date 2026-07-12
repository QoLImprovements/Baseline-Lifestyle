/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni or noodles with cheese and meat",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 15.1,
    "energy_kcal": 210.0,
    "fat_g": 11.2,
    "fibre_g": 0.7,
    "folate_ug": 32.0,
    "iron_mg": 1.27,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 132.0,
    "potassium_mg": 135.0,
    "protein_g": 11.8,
    "salt_g": 0.595,
    "sat_fat_g": 4.37,
    "sodium_mg": 238.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708818",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "macaroni-and-cheese",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
