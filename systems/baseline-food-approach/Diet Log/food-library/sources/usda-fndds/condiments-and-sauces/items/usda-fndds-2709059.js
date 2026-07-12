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
  "id": "usda-fndds-2709059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with dark green vegetables and tomatoes and/or tomato-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 20.3,
    "energy_kcal": 98.0,
    "fat_g": 0.8,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.57,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 124.0,
    "protein_g": 2.42,
    "salt_g": 0.4325,
    "sat_fat_g": 0.203,
    "sodium_mg": 173.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709059",
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
