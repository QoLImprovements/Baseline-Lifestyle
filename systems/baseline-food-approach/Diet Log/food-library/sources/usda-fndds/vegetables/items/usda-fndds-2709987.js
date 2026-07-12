/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709987",
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
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-snow-pea",
      "kind": "unit",
      "label": "1 snow pea"
    }
  ],
  "name": "Snowpeas, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 8.74,
    "energy_kcal": 73.0,
    "fat_g": 2.91,
    "fibre_g": 3.0,
    "folate_ug": 34.0,
    "iron_mg": 2.33,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 210.0,
    "protein_g": 3.4,
    "salt_g": 0.315,
    "sat_fat_g": 0.737,
    "sodium_mg": 126.0,
    "sugar_g": 4.67,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 21.3,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 31.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709987",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
