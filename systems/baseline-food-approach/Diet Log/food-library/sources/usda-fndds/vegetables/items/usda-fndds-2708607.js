/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fajita, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 20.4,
    "energy_kcal": 166.0,
    "fat_g": 7.84,
    "fibre_g": 2.0,
    "folate_ug": 47.0,
    "iron_mg": 1.32,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 160.0,
    "protein_g": 3.22,
    "salt_g": 0.8575,
    "sat_fat_g": 1.66,
    "sodium_mg": 343.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 47.8,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708607",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
