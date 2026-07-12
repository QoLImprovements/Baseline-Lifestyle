/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-item-any-size",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Gordita, cheese only",
  "nutritionPerBasis": {
    "calcium_mg": 288.0,
    "carbs_g": 22.4,
    "energy_kcal": 324.0,
    "fat_g": 21.6,
    "fibre_g": 1.7,
    "folate_ug": 50.0,
    "iron_mg": 2.16,
    "magnesium_mg": 33.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 225.0,
    "potassium_mg": 102.0,
    "protein_g": 10.6,
    "salt_g": 1.225,
    "sat_fat_g": 8.33,
    "sodium_mg": 490.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708583",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
