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
  "id": "usda-fndds-2709450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, scalloped, from fresh",
  "nutritionPerBasis": {
    "calcium_mg": 191.0,
    "carbs_g": 13.5,
    "energy_kcal": 168.0,
    "fat_g": 9.63,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 154.0,
    "potassium_mg": 251.0,
    "protein_g": 7.13,
    "salt_g": 0.805,
    "sat_fat_g": 5.22,
    "sodium_mg": 322.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709450",
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
