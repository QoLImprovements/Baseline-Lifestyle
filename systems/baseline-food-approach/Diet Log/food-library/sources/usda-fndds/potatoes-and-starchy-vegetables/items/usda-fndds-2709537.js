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
  "id": "usda-fndds-2709537",
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
  "name": "Potato salad with egg, made with light creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.0,
    "energy_kcal": 102.0,
    "fat_g": 3.46,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.38,
    "magnesium_mg": 16.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 50.0,
    "potassium_mg": 254.0,
    "protein_g": 2.95,
    "salt_g": 0.4825,
    "sat_fat_g": 0.734,
    "sodium_mg": 193.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709537",
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
