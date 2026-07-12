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
  "id": "usda-fndds-2710113",
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
  "name": "Soup, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 5.08,
    "energy_kcal": 27.0,
    "fat_g": 0.45,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 154.0,
    "protein_g": 0.84,
    "salt_g": 0.6075,
    "sat_fat_g": 0.064,
    "sodium_mg": 243.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 17.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710113",
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
