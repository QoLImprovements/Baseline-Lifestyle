/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with carrots and tomatoes and/or tomato-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 21.3,
    "energy_kcal": 98.0,
    "fat_g": 0.26,
    "fibre_g": 1.0,
    "folate_ug": 44.0,
    "iron_mg": 0.98,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 86.0,
    "protein_g": 2.12,
    "salt_g": 0.5,
    "sat_fat_g": 0.064,
    "sodium_mg": 200.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709015",
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
