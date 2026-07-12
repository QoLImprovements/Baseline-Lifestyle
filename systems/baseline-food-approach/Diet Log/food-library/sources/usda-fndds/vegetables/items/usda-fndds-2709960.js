/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709960",
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
  "name": "Green peas, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.2,
    "energy_kcal": 78.0,
    "fat_g": 0.27,
    "fibre_g": 4.5,
    "folate_ug": 59.0,
    "iron_mg": 1.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 110.0,
    "protein_g": 5.14,
    "salt_g": 0.47,
    "sat_fat_g": 0.049,
    "sodium_mg": 188.0,
    "sugar_g": 4.39,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 23.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709960",
  "state": "Frozen",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "frozen",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
