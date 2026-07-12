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
  "id": "usda-fndds-2709023",
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
  "name": "Rice, white, with carrots, dark green vegetables, and tomatoes and/or tomato-based sauce, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 20.8,
    "energy_kcal": 115.0,
    "fat_g": 2.28,
    "fibre_g": 1.0,
    "folate_ug": 48.0,
    "iron_mg": 0.99,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 97.0,
    "protein_g": 2.26,
    "salt_g": 0.4725,
    "sat_fat_g": 0.331,
    "sodium_mg": 189.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709023",
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
