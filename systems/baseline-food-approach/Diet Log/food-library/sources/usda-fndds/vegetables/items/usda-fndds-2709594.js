/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709594",
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
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Greens, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 5.75,
    "energy_kcal": 37.0,
    "fat_g": 0.71,
    "fibre_g": 2.7,
    "folate_ug": 67.0,
    "iron_mg": 1.09,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 194.0,
    "protein_g": 2.92,
    "salt_g": 0.365,
    "sat_fat_g": 0.098,
    "sodium_mg": 146.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 376.0,
    "vitamin_c_mg": 21.2,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 500.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709594",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "frozen",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
