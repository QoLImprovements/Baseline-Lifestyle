/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-fajita",
      "kind": "unit",
      "label": "1 fajita"
    }
  ],
  "name": "Fajita, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 18.0,
    "energy_kcal": 219.0,
    "fat_g": 11.0,
    "fibre_g": 1.5,
    "folate_ug": 41.0,
    "iron_mg": 1.73,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 137.0,
    "potassium_mg": 190.0,
    "protein_g": 11.7,
    "salt_g": 1.1375,
    "sat_fat_g": 2.68,
    "sodium_mg": 455.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 23.9,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708603",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
