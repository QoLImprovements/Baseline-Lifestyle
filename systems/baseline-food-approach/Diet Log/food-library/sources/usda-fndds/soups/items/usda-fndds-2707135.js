/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, sopa or caldo de pollo",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.04,
    "energy_kcal": 55.0,
    "fat_g": 1.58,
    "fibre_g": 0.8,
    "folate_ug": 11.0,
    "iron_mg": 0.31,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 63.0,
    "potassium_mg": 181.0,
    "protein_g": 6.23,
    "salt_g": 0.7375,
    "sat_fat_g": 0.438,
    "sodium_mg": 295.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707135",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "soups",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
