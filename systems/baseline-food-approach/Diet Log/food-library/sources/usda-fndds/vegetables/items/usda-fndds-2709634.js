/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turnip greens, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 4.35,
    "energy_kcal": 20.0,
    "fat_g": 0.23,
    "fibre_g": 3.5,
    "folate_ug": 118.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 202.0,
    "protein_g": 1.14,
    "salt_g": 0.3625,
    "sat_fat_g": 0.053,
    "sodium_mg": 145.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 380.0,
    "vitamin_c_mg": 27.3,
    "vitamin_e_mg": 1.87,
    "vitamin_k_ug": 366.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709634",
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
