/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710018",
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
  "name": "Classic mixed vegetables, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 12.7,
    "energy_kcal": 89.0,
    "fat_g": 3.05,
    "fibre_g": 4.3,
    "folate_ug": 18.0,
    "iron_mg": 0.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 164.0,
    "protein_g": 2.77,
    "salt_g": 0.365,
    "sat_fat_g": 0.418,
    "sodium_mg": 146.0,
    "sugar_g": 3.02,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 25.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710018",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
