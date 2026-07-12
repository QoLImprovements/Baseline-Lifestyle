/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2709988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-strip",
      "kind": "unit",
      "label": "1 strip"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seaweed, dried",
  "nutritionPerBasis": {
    "calcium_mg": 372.0,
    "carbs_g": 52.4,
    "energy_kcal": 298.0,
    "fat_g": 4.01,
    "fibre_g": 5.6,
    "folate_ug": 337.0,
    "iron_mg": 25.0,
    "magnesium_mg": 482.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 85.0,
    "potassium_mg": 1240.0,
    "protein_g": 31.8,
    "salt_g": 1.4375,
    "sat_fat_g": 1.36,
    "sodium_mg": 575.0,
    "sugar_g": 3.04,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709988",
  "state": "Dried",
  "subcategory": "Not included in a food category",
  "tags": [
    "dried",
    "not-included-in-a-food-category",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
