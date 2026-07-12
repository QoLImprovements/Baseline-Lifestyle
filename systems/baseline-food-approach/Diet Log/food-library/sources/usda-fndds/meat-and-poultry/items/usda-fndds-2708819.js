/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-microwave-singles-package-yields",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 288.0,
      "key": "1-microwave-singles-package-yields",
      "kind": "unit",
      "label": "1 microwave singles package, yields"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese and meat, prepared from Hamburger Helper mix",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 10.3,
    "energy_kcal": 144.0,
    "fat_g": 7.59,
    "fibre_g": 0.3,
    "folate_ug": 12.0,
    "iron_mg": 0.97,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 129.0,
    "protein_g": 8.24,
    "salt_g": 0.71,
    "sat_fat_g": 2.99,
    "sodium_mg": 284.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708819",
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
