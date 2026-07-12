/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2710003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Water Chesnut",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 19.2,
    "energy_kcal": 78.0,
    "fat_g": 0.09,
    "fibre_g": 3.9,
    "folate_ug": 9.0,
    "iron_mg": 1.36,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 184.0,
    "protein_g": 1.38,
    "salt_g": 0.03,
    "sat_fat_g": 0.025,
    "sodium_mg": 12.0,
    "sugar_g": 3.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710003",
  "state": "Unspecified",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "other-starchy-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
