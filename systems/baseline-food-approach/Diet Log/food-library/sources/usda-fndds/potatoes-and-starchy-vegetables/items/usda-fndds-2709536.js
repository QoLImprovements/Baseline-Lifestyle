/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato salad with egg, made with creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.9,
    "energy_kcal": 142.0,
    "fat_g": 7.91,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 77.0,
    "potassium_mg": 259.0,
    "protein_g": 2.93,
    "salt_g": 0.47,
    "sat_fat_g": 1.44,
    "sodium_mg": 188.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 22.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709536",
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
