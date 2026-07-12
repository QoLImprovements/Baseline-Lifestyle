/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Candy containing chocolate",
  "id": "usda-fndds-2710349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-package-any-size",
      "kind": "unit",
      "label": "1 package, any size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Chocolate candy, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 37.7,
    "energy_kcal": 590.0,
    "fat_g": 43.3,
    "fibre_g": 3.5,
    "folate_ug": 25.0,
    "iron_mg": 1.45,
    "magnesium_mg": 129.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 332.0,
    "potassium_mg": 606.0,
    "protein_g": 12.4,
    "salt_g": 0.2775,
    "sat_fat_g": 21.7,
    "sodium_mg": 111.0,
    "sugar_g": 14.6,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710349",
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
