/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Pupusa, cheese only",
  "nutritionPerBasis": {
    "calcium_mg": 325.0,
    "carbs_g": 22.4,
    "energy_kcal": 256.0,
    "fat_g": 13.2,
    "fibre_g": 2.9,
    "folate_ug": 3.0,
    "iron_mg": 0.56,
    "magnesium_mg": 36.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 271.0,
    "potassium_mg": 120.0,
    "protein_g": 11.7,
    "salt_g": 1.0,
    "sat_fat_g": 6.48,
    "sodium_mg": 400.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708608",
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
