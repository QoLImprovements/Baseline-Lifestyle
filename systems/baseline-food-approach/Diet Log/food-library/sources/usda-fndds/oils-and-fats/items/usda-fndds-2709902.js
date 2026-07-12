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
  "id": "usda-fndds-2709902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Cauliflower, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.01,
    "energy_kcal": 52.0,
    "fat_g": 3.31,
    "fibre_g": 2.0,
    "folate_ug": 49.0,
    "iron_mg": 0.43,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 302.0,
    "protein_g": 1.94,
    "salt_g": 0.3675,
    "sat_fat_g": 0.535,
    "sodium_mg": 147.0,
    "sugar_g": 1.93,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 41.3,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 18.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709902",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
