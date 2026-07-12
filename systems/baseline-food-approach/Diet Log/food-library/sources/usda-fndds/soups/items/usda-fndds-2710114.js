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
  "id": "usda-fndds-2710114",
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
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    }
  ],
  "name": "Soup, minestrone",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.3,
    "energy_kcal": 40.0,
    "fat_g": 0.5,
    "fibre_g": 1.5,
    "folate_ug": 25.0,
    "iron_mg": 0.48,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 147.0,
    "protein_g": 1.71,
    "salt_g": 0.6025,
    "sat_fat_g": 0.072,
    "sodium_mg": 241.0,
    "sugar_g": 1.04,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 12.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710114",
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
