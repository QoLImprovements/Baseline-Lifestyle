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
  "id": "usda-fndds-2709551",
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
  "name": "Potato salad, made with any type of fat free dressing",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 17.9,
    "energy_kcal": 81.0,
    "fat_g": 0.58,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.28,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 261.0,
    "protein_g": 1.38,
    "salt_g": 0.5375,
    "sat_fat_g": 0.125,
    "sodium_mg": 215.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709551",
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
