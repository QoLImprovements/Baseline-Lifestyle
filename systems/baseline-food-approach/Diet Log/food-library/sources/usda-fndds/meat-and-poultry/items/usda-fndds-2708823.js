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
  "id": "usda-fndds-2708823",
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
  "name": "Macaroni or noodles with cheese and chicken or turkey",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 14.8,
    "energy_kcal": 178.0,
    "fat_g": 7.61,
    "fibre_g": 0.7,
    "folate_ug": 32.0,
    "iron_mg": 0.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 149.0,
    "potassium_mg": 131.0,
    "protein_g": 12.5,
    "salt_g": 0.5725,
    "sat_fat_g": 2.7,
    "sodium_mg": 229.0,
    "sugar_g": 2.31,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708823",
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
