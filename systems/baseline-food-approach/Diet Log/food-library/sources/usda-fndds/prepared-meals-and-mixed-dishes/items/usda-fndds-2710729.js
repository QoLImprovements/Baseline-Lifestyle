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
  "id": "usda-fndds-2710729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "1-envelope",
      "kind": "unit",
      "label": "1 envelope"
    },
    {
      "gramsPerUnit": 7.4,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Nutritional powder mix (Carnation Instant Breakfast)",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 66.2,
    "energy_kcal": 353.0,
    "fat_g": 1.4,
    "fibre_g": 0.4,
    "folate_ug": 285.0,
    "iron_mg": 12.8,
    "magnesium_mg": 228.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 427.0,
    "potassium_mg": 947.0,
    "protein_g": 19.9,
    "salt_g": 0.9625,
    "sat_fat_g": 0.56,
    "sodium_mg": 385.0,
    "sugar_g": 65.8,
    "vitamin_a_ug": 625.0,
    "vitamin_c_mg": 76.9,
    "vitamin_e_mg": 9.37,
    "vitamin_k_ug": 90.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710729",
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
