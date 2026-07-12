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
  "id": "usda-fndds-2709502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, mashed, from school lunch",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 13.2,
    "energy_kcal": 77.0,
    "fat_g": 1.89,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.18,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 203.0,
    "protein_g": 2.14,
    "salt_g": 0.5025,
    "sat_fat_g": 0.491,
    "sodium_mg": 201.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709502",
  "state": "Mashed",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed",
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
