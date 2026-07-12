/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2709118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with vegetables, soy-based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 19.8,
    "energy_kcal": 106.0,
    "fat_g": 1.79,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 0.82,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 60.0,
    "protein_g": 2.18,
    "salt_g": 0.9825,
    "sat_fat_g": 0.285,
    "sodium_mg": 393.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709118",
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
