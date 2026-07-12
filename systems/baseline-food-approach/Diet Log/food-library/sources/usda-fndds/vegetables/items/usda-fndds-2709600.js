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
  "id": "usda-fndds-2709600",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Kale, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 272.0,
    "carbs_g": 4.74,
    "energy_kcal": 46.0,
    "fat_g": 1.6,
    "fibre_g": 4.4,
    "folate_ug": 50.0,
    "iron_mg": 1.72,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 373.0,
    "protein_g": 3.13,
    "salt_g": 0.4525,
    "sat_fat_g": 0.191,
    "sodium_mg": 181.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 245.0,
    "vitamin_c_mg": 70.1,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 418.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709600",
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
