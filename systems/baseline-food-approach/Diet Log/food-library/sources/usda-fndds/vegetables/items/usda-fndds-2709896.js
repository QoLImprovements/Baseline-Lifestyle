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
  "id": "usda-fndds-2709896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-pad",
      "kind": "unit",
      "label": "1 pad"
    }
  ],
  "name": "Cactus, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 3.23,
    "energy_kcal": 38.0,
    "fat_g": 2.63,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 0.57,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 249.0,
    "protein_g": 1.29,
    "salt_g": 0.3525,
    "sat_fat_g": 0.682,
    "sodium_mg": 141.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709896",
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
