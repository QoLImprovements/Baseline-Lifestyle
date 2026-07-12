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
  "id": "usda-fndds-2709057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with carrots and tomatoes and/or tomato-based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 20.0,
    "energy_kcal": 111.0,
    "fat_g": 2.51,
    "fibre_g": 1.7,
    "folate_ug": 9.0,
    "iron_mg": 0.53,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 114.0,
    "protein_g": 2.2,
    "salt_g": 0.4275,
    "sat_fat_g": 0.432,
    "sodium_mg": 171.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709057",
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
