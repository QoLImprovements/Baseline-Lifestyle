/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2709117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with vegetables, soy-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 20.1,
    "energy_kcal": 94.0,
    "fat_g": 0.26,
    "fibre_g": 1.1,
    "folate_ug": 35.0,
    "iron_mg": 0.83,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 61.0,
    "protein_g": 2.22,
    "salt_g": 0.9975,
    "sat_fat_g": 0.081,
    "sodium_mg": 399.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709117",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "condiments-and-sauces",
    "fried-rice-and-lo-chow-mein",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
