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
  "id": "usda-fndds-2709605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lambsquarter, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 4.85,
    "energy_kcal": 54.0,
    "fat_g": 3.22,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 0.68,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 279.0,
    "protein_g": 3.11,
    "salt_g": 0.3725,
    "sat_fat_g": 0.716,
    "sodium_mg": 149.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 390.0,
    "vitamin_c_mg": 35.8,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 480.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709605",
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
