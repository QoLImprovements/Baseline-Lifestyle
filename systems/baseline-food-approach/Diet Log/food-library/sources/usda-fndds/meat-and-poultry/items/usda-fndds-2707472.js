/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-meatball",
      "kind": "unit",
      "label": "1 meatball"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meatball, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 8.0,
    "energy_kcal": 197.0,
    "fat_g": 9.0,
    "fibre_g": 4.6,
    "folate_ug": 78.0,
    "iron_mg": 2.16,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 344.0,
    "potassium_mg": 180.0,
    "protein_g": 21.0,
    "salt_g": 1.375,
    "sat_fat_g": 1.42,
    "sodium_mg": 550.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.73,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707472",
  "state": "Unspecified",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "meat-and-poultry",
    "soy-and-meat-alternative-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
