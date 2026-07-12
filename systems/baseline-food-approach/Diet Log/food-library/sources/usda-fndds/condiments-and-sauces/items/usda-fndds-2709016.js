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
  "id": "usda-fndds-2709016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with carrots and tomatoes and/or tomato-based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 20.9,
    "energy_kcal": 114.0,
    "fat_g": 2.29,
    "fibre_g": 0.9,
    "folate_ug": 43.0,
    "iron_mg": 0.97,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 84.0,
    "protein_g": 2.07,
    "salt_g": 0.49,
    "sat_fat_g": 0.334,
    "sodium_mg": 196.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709016",
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
