/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-envelope",
      "kind": "unit",
      "label": "1 envelope"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Nutritional powder mix, sugar free (Carnation Instant Breakfast)",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 41.0,
    "energy_kcal": 358.0,
    "fat_g": 5.1,
    "fibre_g": 2.0,
    "folate_ug": 500.0,
    "iron_mg": 2.3,
    "magnesium_mg": 410.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 500.0,
    "potassium_mg": 1700.0,
    "protein_g": 35.8,
    "salt_g": 1.7925,
    "sat_fat_g": 2.16,
    "sodium_mg": 717.0,
    "sugar_g": 39.0,
    "vitamin_a_ug": 2690.0,
    "vitamin_c_mg": 138.0,
    "vitamin_e_mg": 16.9,
    "vitamin_k_ug": 120.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710730",
  "state": "Unspecified",
  "subcategory": "Protein and nutritional powders",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "protein-and-nutritional-powders",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
