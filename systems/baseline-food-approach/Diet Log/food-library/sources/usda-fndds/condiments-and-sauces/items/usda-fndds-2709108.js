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
  "id": "usda-fndds-2709108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with soy-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 20.9,
    "energy_kcal": 100.0,
    "fat_g": 0.77,
    "fibre_g": 1.2,
    "folate_ug": 7.0,
    "iron_mg": 0.43,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 70.0,
    "protein_g": 2.17,
    "salt_g": 1.07,
    "sat_fat_g": 0.221,
    "sodium_mg": 428.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709108",
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
