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
  "id": "usda-fndds-2709058",
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
  "name": "Rice, brown, with dark green vegetables and tomatoes and/or tomato-based sauce, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 19.9,
    "energy_kcal": 112.0,
    "fat_g": 2.54,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.57,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 122.0,
    "protein_g": 2.38,
    "salt_g": 0.425,
    "sat_fat_g": 0.434,
    "sodium_mg": 170.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709058",
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
