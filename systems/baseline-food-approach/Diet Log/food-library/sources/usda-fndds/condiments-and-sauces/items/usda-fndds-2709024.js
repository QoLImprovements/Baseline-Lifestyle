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
  "id": "usda-fndds-2709024",
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
  "name": "Rice, white, with carrots, dark green vegetables, and tomatoes and/or tomato-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 21.8,
    "energy_kcal": 101.0,
    "fat_g": 0.27,
    "fibre_g": 0.9,
    "folate_ug": 48.0,
    "iron_mg": 1.01,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 91.0,
    "protein_g": 2.3,
    "salt_g": 0.495,
    "sat_fat_g": 0.065,
    "sodium_mg": 198.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709024",
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
