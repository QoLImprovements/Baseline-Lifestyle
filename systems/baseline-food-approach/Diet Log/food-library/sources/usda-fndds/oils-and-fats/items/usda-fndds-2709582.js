/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Collards, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 242.0,
    "carbs_g": 5.64,
    "energy_kcal": 61.0,
    "fat_g": 3.76,
    "fibre_g": 4.2,
    "folate_ug": 101.0,
    "iron_mg": 0.49,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 222.0,
    "protein_g": 3.14,
    "salt_g": 0.3475,
    "sat_fat_g": 0.475,
    "sodium_mg": 139.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 248.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 2.94,
    "vitamin_k_ug": 458.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709582",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
