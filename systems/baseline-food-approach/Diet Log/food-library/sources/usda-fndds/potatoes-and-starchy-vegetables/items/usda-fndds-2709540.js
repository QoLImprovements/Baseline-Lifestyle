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
  "id": "usda-fndds-2709540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato salad with egg, made with any type of fat free dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 16.0,
    "energy_kcal": 89.0,
    "fat_g": 1.74,
    "fibre_g": 1.6,
    "folate_ug": 12.0,
    "iron_mg": 0.39,
    "magnesium_mg": 15.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 49.0,
    "potassium_mg": 245.0,
    "protein_g": 2.67,
    "salt_g": 0.5125,
    "sat_fat_g": 0.488,
    "sodium_mg": 205.0,
    "sugar_g": 2.69,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709540",
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
