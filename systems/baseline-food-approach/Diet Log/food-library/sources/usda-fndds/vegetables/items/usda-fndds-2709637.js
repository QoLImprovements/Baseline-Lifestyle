/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Turnip greens, fresh, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 4.23,
    "energy_kcal": 42.0,
    "fat_g": 2.77,
    "fibre_g": 3.4,
    "folate_ug": 114.0,
    "iron_mg": 0.78,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 197.0,
    "protein_g": 1.11,
    "salt_g": 0.3725,
    "sat_fat_g": 0.717,
    "sodium_mg": 149.0,
    "sugar_g": 0.52,
    "vitamin_a_ug": 380.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 358.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709637",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
