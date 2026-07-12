/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709541",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato salad, German style",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 17.2,
    "energy_kcal": 108.0,
    "fat_g": 3.22,
    "fibre_g": 1.9,
    "folate_ug": 23.0,
    "iron_mg": 0.89,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 67.0,
    "potassium_mg": 446.0,
    "protein_g": 2.92,
    "salt_g": 0.4525,
    "sat_fat_g": 1.2,
    "sodium_mg": 181.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709541",
  "state": "Unspecified",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
