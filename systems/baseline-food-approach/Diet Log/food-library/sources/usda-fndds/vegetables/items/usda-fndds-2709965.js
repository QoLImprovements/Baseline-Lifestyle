/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green peas, canned, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.0,
    "energy_kcal": 89.0,
    "fat_g": 3.33,
    "fibre_g": 4.8,
    "folate_ug": 29.0,
    "iron_mg": 1.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 103.0,
    "protein_g": 4.35,
    "salt_g": 0.685,
    "sat_fat_g": 0.807,
    "sodium_mg": 274.0,
    "sugar_g": 2.91,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 37.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709965",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
