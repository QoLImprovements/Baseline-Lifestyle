/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710032",
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
    }
  ],
  "name": "Broccoli and cauliflower, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 4.41,
    "energy_kcal": 46.0,
    "fat_g": 2.71,
    "fibre_g": 2.8,
    "folate_ug": 47.0,
    "iron_mg": 0.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 136.0,
    "protein_g": 2.29,
    "salt_g": 0.3375,
    "sat_fat_g": 0.691,
    "sodium_mg": 135.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 34.6,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 50.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710032",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
