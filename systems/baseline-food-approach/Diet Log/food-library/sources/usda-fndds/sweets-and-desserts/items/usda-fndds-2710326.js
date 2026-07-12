/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Candy containing chocolate",
  "id": "usda-fndds-2710326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-package-any-size",
      "kind": "unit",
      "label": "1 package, any size"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Almonds, chocolate covered candy",
  "nutritionPerBasis": {
    "calcium_mg": 221.0,
    "carbs_g": 44.0,
    "energy_kcal": 560.0,
    "fat_g": 38.8,
    "fibre_g": 6.4,
    "folate_ug": 29.0,
    "iron_mg": 2.9,
    "magnesium_mg": 149.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 313.0,
    "potassium_mg": 508.0,
    "protein_g": 13.0,
    "salt_g": 0.1225,
    "sat_fat_g": 12.7,
    "sodium_mg": 49.0,
    "sugar_g": 32.8,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.87,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710326",
  "state": "Unspecified",
  "subcategory": "Candy containing chocolate",
  "tags": [
    "candy-containing-chocolate",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
